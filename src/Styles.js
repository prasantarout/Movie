import {Dimensions, StyleSheet} from 'react-native';
import Constants from './Constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
   height:deviceHeight/-5,
   
  },
   heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 175,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: Constants.textColor,
    textAlign: 'center',
    marginTop: -80,
  },
  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
 
   
    width: 45,
    marginLeft: 20,
    marginTop: 10,
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  
  
});

export default Styles;
