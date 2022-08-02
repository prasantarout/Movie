import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, RefreshControl, ToastAndroid
 } from 'react-native';
import {POSTER_IMAGE} from '../config';
import {GET} from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';
const {height,width}=Dimensions.get('window')
const TrendingMovies = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    const getMovies = async () => {
      
      const data = await GET('/movie/popular');
      console.log(data);
      setMovies(data.results);
      setLoading(false);
    };
   getMovies();
  }, []);

 return (
    <View>
      {loading ? (
        <Loader />
      ) : (
         <View>
          <Text style={Styles.heading}>{props.title}</Text>
           <SafeAreaView>
          <View style={{paddingBottom:450}}>
          <FlatList
            keyExtractor={item => item.id}
            data={movies}
            numColumns={2}
            renderItem={item => displayMovies(item, props)}
           
            contentContainerStyle={{paddingBottom:750}}
          />
          </View>
          </SafeAreaView> 
         
          </View>
      )}
    </View>
  );
};

const displayMovies = ({item}, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('movieDetails', {movieId: item.id});
      }}
      style={{marginHorizontal: 10}}>
      <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.posterImage}
      />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};



export default TrendingMovies;
