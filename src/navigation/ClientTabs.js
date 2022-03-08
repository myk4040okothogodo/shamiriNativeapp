import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'; 
import SearchScreen from '../screens/SearchScreen';
import {ClientStack} from '../navigation/ClientStack';
import {colors} from '../global/styles';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
  return(
    <ClientTabs.Navigator
      screenOptions ={{
         activeTintColor:"green"
      }}
    >
      <ClientTabs.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options = {() =>({
            tabBarLabel : "Home",
            headerShown:false,
            tabBarIcon:({color,size}) =>(
              <Icon 
                name ="home"
                type = "material"
                color={color}
                size={size}
              />            
            )})}    
      />
      
      <ClientTabs.Screen 
        name="clientscreens"
        component={ClientStack}
        options = {() =>({
            tabBarLabel : "Account",
            headerShown:false,
            tabBarIcon:({color,size}) =>(
              <Icon 
                name ="person"
                type = "material"
                color={color}
                size={size}
              />            
            )})}    
      />
    
    </ClientTabs.Navigator>
  )
}
