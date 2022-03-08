import React ,{useState, useContext, useEffect} from 'react';
import {
StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch
}  from  'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Button, Icon} from 'react-native-elements';
import {colors} from '../global/styles';

export default function DrawerContent(props){
  return(
 
    <View style={styles.container}>
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection:"row",paddingLeft:20,paddingvertical:10, alignItems:"center",paddingBottom:10}}>
        <Avatar 
          rounded
          avatarStyle={styles.avatar}
          source = {require('../assets/images/logo-animation-tips_thumb900_1-1.jpg')}
          size={75}
        />
        <View style={{paddingLeft:10}}>
          <Text style={{fontWeight:'bold', color:"black", fontSize:18}}>test user</Text>
          <Text style={{fontSize:14, color:"black"}}>myk@gmail.com</Text>
        </View>
        
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingLeft:8}}>
        <View style={{flexDirection:"row", marginTop:10, marginHorizontal:0}}>
          
        </View>
         <View style={{flexDirection:"row", marginTop:10}}>
         </View>
     </View>
     <View style={{borderTopWidth:1, borderTopColor:"green",paddingTop:2.5}}>
     <View style={{borderTopWidth:1, borderTopColor:"green",paddingTop:5}}>
      <DrawerItemList {...props} />
      
      <DrawerItem 
       label="PaySession"
       icon ={({color, size}) =>(
          <Icon 
            type="material-community"
            name="credit-card-outline"
            color={color}
            size={30}
          />
       )}
     
     />
     <DrawerItem 
       label="Community"
       icon ={({color, size}) =>(
          <Icon 
            type="material-community"
            name="tag-heart"
            color={color}
            size={30}
          />
       )}
     
     />
     <DrawerItem 
       label="Settings"
       icon ={({color, size}) =>(
          <Icon 
            type="material-community"
            name="cog-outline"
            color={color}
            size={30}
          />
       )}
     
     />
     <DrawerItem 
       label="Help"
       icon ={({color, size}) =>(
          <Icon 
            type="material-community"
            name="lifebuoy"
            color={color}
            size={30}
          />
       )}
     
     />
     </View>
     </View>
     <View style={{borderTopWidth:1, borderTopColor:"green"}}>
         <Text style={styles.preferences} >Preferences</Text>
         <View style={styles.switchText}>
            <Text style={styles.darkthemeText}> Dark Theme</Text>
            <View style={{paddingRight:10}}>
                <Switch 
                  trackColor= {{false:"grey", true:"blue"}}
                  thumbColor = "#f4f3f4"
                />  
            </View>
         </View>
     </View>
     
    
    </DrawerContentScrollView>
     <DrawerItem 
       label="Sign-out"
       icon ={({color, size}) =>(
          <Icon 
            type="material-community"
            name="logout-variant"
            color={color}
            size={30}
          />
       )}
     
     />
    </View>
  
  )

}

styles = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor:"#367588",
    justifyContent:"space-between"
  },
  avatar:{
    borderWidth:4,
    borderColor:"grey"
    
  },
  preferences:{
     fontSize:16,
     color:"grey",
     paddingTop:10,
     paddingLeft:20,
  },
  switchText:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingLeft:20,
    paddingVertical:5,
    paddingRight:10
  },
  darkthemeText:{
    fontSize:16,
    paddingTop:10,
    paddingLeft:10,
    fontWeight: "bold",
    color:"grey"
  
  }

})
