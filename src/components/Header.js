import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from "../global/styles";
import {Icon} from 'react-native-elements';


export default function Header({title, type, navigation}){
  return (
    <View style={styles.header} >
        <View style={{flex:0.4 }}>
   
          <Icon 
            type="material-community"
            name={type}
            color = {colors.headerText}
            size = {36}
            onPress = {() => {
              navigation.goBack()
            }}
          
          />
          </View>
          <View>
            <Text style ={styles.headerText}>{title}</Text>
          </View>
          
    </View>
  
  )

}

const styles = StyleSheet.create({
   header : {
      flexDirection: "row",
      backgroundColor:"#367588", //colors.buttons,
      height: parameters.headerHeight,
      padding:18,
      justifyContent: "flex-start",
           
   },
   headerText: {
      color: colors.headerText,
      fontSize: 24,
      fontWeight: "bold"
   }
})
