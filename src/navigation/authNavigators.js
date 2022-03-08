import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import TherapyCenters from '../screens/TherapyCenters';
import DrawerNavigator from './DrawerNavigator';


const Auth = createStackNavigator();

export default function AuthStack(){
  return(
       <Auth.Navigator>
       <Auth.Screen 
         name="SignInScreen"
         component ={SignInScreen}
         options = {{
           headerShown: false,
           ...TransitionPresets.RevealFromBottomAndroid
         }}
       />
       <Auth.Screen 
         name="DrawerNavigator"
         component ={DrawerNavigator}
         options = {{
           headerShown: false,
           ...TransitionPresets.RevealFromBottomAndroid
         }}
       />
       <Auth.Screen 
         name="TherapyCenters"
         component ={TherapyCenters}
         options = {{
           headerShown: false,
           ...TransitionPresets.RevealFromBottomAndroid
         }}
       />
     </Auth.Navigator>
  )

}
