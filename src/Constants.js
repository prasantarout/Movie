import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const Constants = {
  textColor: '#fff',
  baseColor: '#151C26',
  fadedColor: '#969696',
  secondaryColor: '#F4C10F',
};
 export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  width,
  height
};

export default Constants;
