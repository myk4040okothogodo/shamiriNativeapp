import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {colors} from '../global/styles';



export default function MenuCard({productName, price, image, productDetails}){
  return(
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>{productName}</Text>
          <View>
            <Text style={styles.text2}>{productDetails}</Text>
          </View>
          <Text style={styles.text3}>KSH {price}</Text>
          
        </View>
        <View style={{flex:2}}>
             <Image  style={styles.image} source={image}/>
          </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
   view1:{
     backgroundColor: "grey",
     elevation:4.5,
     shadowOpacity: 0.6,
     shadowColor:"blue",
     margin:5,
     padding:10
   },
   
   view2:{
     flex:1,
     flexDirection: "row",
     padding:0,
     justifyContent:"space-between"
   },
   view3 :{
     flex:6,
     justifyContent:"space-between"
   },
   
   text1:{
     fontSize: 15,
     color:"black",
     fontWeight:"bold"
   },
   text2:{
     fontSize:15,
     color:"black",
     marginRight:2
   },
   text3:{
     fontSize:15,
     color:"blue",
   },
   image: {
     flex:19,
     height:"100%",
     width:"95%"
   }

})
