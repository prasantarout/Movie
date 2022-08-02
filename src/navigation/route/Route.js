//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

import {Home,Splash,MovieDetails} from '../../screen'
import Constants from '../../Constants';


import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator,TransitionSpecs, HeaderStyleInterpolators, } from '@react-navigation/stack';
 const Stack = createStackNavigator();
 
 const MyTransition = {
    gestureDirection: 'vertical',
   transitionSpec: {
     open: TransitionSpecs.TransitionIOSSpec,
     close: TransitionSpecs.TransitionIOSSpec,
   },
   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
   cardStyleInterpolator: ({ current, next, layouts }) => {
     return {
       cardStyle: {
         transform: [
           {
             translateX: current.progress.interpolate({
               inputRange: [0, 1],
               outputRange: [layouts.screen.width, 1],
             }),
           },
         ],
       },
       overlayStyle: {
         opacity: current.progress.interpolate({
           inputRange: [0, 0.1],
           outputRange: [0, 0.1],
         }),
       },
     };
   },
 };


const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator  
           screenOptions={{
            headerShown: false,
             ...MyTransition,
           }}
           initialRouteName={'Splash'}>
             <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home}  />
          <Stack.Screen
            name="movieDetails"
            component={MovieDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};





   

   
   


//make this component available to the app
export default Routes;
