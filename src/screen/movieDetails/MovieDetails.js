import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../../config';
import {GET} from '../../Services/API';
import Styles from '../../Styles';
import Loader from '../../Components/Loader';
import Icon from 'react-native-vector-icons/Entypo';
import Constants from '../../Constants';
import {useNavigation} from '@react-navigation/native';

  const MovieDetails = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
   const navigation=useNavigation();
  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);



  return (
  
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
          
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          
          </View>
          <TouchableOpacity onPress={()=>navigation.goBack('')}>
          <Icon name="chevron-thin-left"  size={32} style={{left:30,bottom:200}} color="white"/>
          </TouchableOpacity> 
          <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
          {details.homepage ? (
            <View style={Styles.linkContainer}>
            <TouchableOpacity
             onPress={() => {
                  Linking.openURL(details.homepage);
                 
                }}>
                <Icon name="link" color={Constants.textColor} size={22} />
              </TouchableOpacity>
             
            </View>
          ) : null}

          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>RATINGS</Text>
              <Text style={Styles.details}>⭐{details.popularity}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  
  );
};

export default MovieDetails;
