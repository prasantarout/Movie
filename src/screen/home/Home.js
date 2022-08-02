import React,{useState} from 'react';
import {View,Text,TextInput, TouchableOpacity, Dimensions,ScrollView,FlatList,Image} from 'react-native';
import DiscoverMovies from '../../Components/DiscoverMovies';
import Styles from '../../Styles';
import { SIZES } from '../../Constants';
import TrendingMovies from '../../Components/TrendingMovies';
import Icon from 'react-native-vector-icons/Ionicons';
import Loader from '../../Components/Loader';
import {POSTER_IMAGE} from '../../config';
import axios from 'axios'
const {height,width}=Dimensions.get('window')

const Home = props => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [movie,setMovie]=useState([]);
    const [homeflag,setHomeFlag] = useState(true);
     const [loading, setLoading] = useState(true);

    
    const searchMovies = async (e) => {
     
        setHomeFlag(false);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${search}&page=1&include_adult=false`;
        await axios.get(url)
       .then((response)=>{
         const data=response.data.results;
          setMovie(data);
          setSearch("");
          setLoading(false);
          setFilteredData(data);
       }).catch((error)=>{
          console.log(error);
       })
    }


 

const  DisplaySearchMovie=({item}, props)=>{
    return (
        <TouchableOpacity
          onPress={() => {
            props.navigation.push('movieDetails', {movieId: item.id});
          }}
          style={{marginHorizontal: 10}}>
          <Image
            source={{uri: `${POSTER_IMAGE + item.poster_path}`}}
            style={Styles.posterImage}
          />
          <Text style={Styles.movieTitle}>{item.original_title}</Text>
        </TouchableOpacity>
      );
    };
 const SearchMovie=()=>{
    return(
   <View>
    {loading ? (
      <Loader />
    ) : (
      <View>
        <Text style={Styles.heading}>{props.title}</Text>
       {/* <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:height*1.4}}> */}
        <View style={{height:1550}}>
        <FlatList
          keyExtractor={item => item.id}
          data={filteredData}
          numColumns={2}
          renderItem={item => DisplaySearchMovie(item, props)}
          contentContainerStyle={{paddingBottom:1200}}
        />
        </View>
        {/* </ScrollView> */}
      </View>
    )}
  </View>
    )
 }

 return (
    <View style={Styles.sectionBg}>
        <View >
         <View 
            style={{
                flexDirection:'row',
                height:60,
                alignItems:'center',
                marginHorizontal:SIZES.padding,
                paddingHorizontal:SIZES.radius,
                backgroundColor:'white',
                borderRadius:10,
                top:50,
                width:'90%',
                left:-5,
              }}>
            <TextInput style={{
               marginLeft:SIZES.radius,
               color:'black'
           }}
           placeholderTextColor="black"
           placeholder="Search movies"
           onChangeText={(text) => setSearch(text)}
           value={search}
           >
           </TextInput>
           </View>
        <TouchableOpacity style={{
            width:70,
            height:60,
            bottom:10,
            borderRadius:10,
            borderTopLeftRadius:1,
            borderBottomLeftRadius:1,
            left:width*0.78,
            backgroundColor:'blue',
            padding:12
        }} 
           onPress={searchMovies}
        >
         <Icon 
            name="search"
            size={28}
            color="white"
            style={{top:4,left:10}}
            />        
        </TouchableOpacity>   
     </View>
      <View style={{top:5}}>
      <DiscoverMovies navigation={props.navigation} />
      {homeflag ==true ?
      <TrendingMovies
        title="Trending Movies"
        url="/movie/"
        navigation={props.navigation}
      />:<SearchMovie  title="Trending Movies" 
       url="/movie/"
       navigation={props.navigation}
      />}
       </View>
    </View>
  );
};

export default Home;
