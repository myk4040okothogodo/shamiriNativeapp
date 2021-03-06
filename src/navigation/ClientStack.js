import React,{useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import StatisticsScreen from '../screens/StatisticsScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from "../screens/MyOrdersScreen";
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';


const ClientSearch = createStackNavigator()

export  function ClientStack({navigation, route}){
  {/*
  useLayoutEffect(() =>{
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "FarmHomeScreen" || "MenuproductScreen"){
       navigation.setOptions({tabBarVisible:false})
    }else{
       navigation.setOptions({tabBarVisible:true})
    }    
    
  }, [navigation,route]) 
*/}
  return (
    <ClientSearch.Navigator>
    
      <ClientSearch.Screen 
         name ="StatisticsScreen"
         component = {StatisticsScreen}
         options = {
            () => ({
               headerShown: false
            })
         }
      /> 

      <ClientSearch.Screen 
         name ="MyOrdersScreen"
         component = {MyOrdersScreen}
         options = {
            () => ({
               headerShown: false
            })
         }
      />


    </ClientSearch.Navigator>
  )
}

const styles = StyleSheet.create({


})
