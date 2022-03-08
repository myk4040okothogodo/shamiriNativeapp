import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';


export default function SignInScreen({navigation}){
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1)
  const textInput2 = useRef(2)
  
  return (
    <View style={styles.container}>
        <Header title="i-mentalApp" navigation={navigation}/>
        <View style={{ marginLeft:20, marginTop:10}}>
          <Text style={{...title, color:" #367588"}}>Log-In</Text>
        </View>
        
        <View style={{marginTop:20}}>
           <View>
             <TextInput 
               style={styles.TextInput1}
               placeholder="Email"
               ref={textInput1}
              />
           </View>
           <View style={styles.TextInput2}>
           <Animatable.View animation={textInput2Focused ? " ":"fadeInLeft"} duration={200}>
             <Icon 
               name="lock"
               iconStyle={{color:" #367588"}}
               type="material"
               style={{marginLeft:0.5}}
             />
           </Animatable.View>
             <TextInput 
               style ={{ width:"80%"}}
               placeholder="Password"
               ref={textInput2}
               onFocus ={() => {
                 setTextInput2Focused(false)
               
               }}
               onBlur = {() => {
                 setTextInput2Focused(true)  
               }}
              />
           <Animatable.View animation={textInput2Focused ? " ":"fadeInLeft"} duration={350}>
             <Icon 
               name="visibility-off"
               iconStyle={{color:" #367588"}}
               type="material"
               style={{marginRight:10}}
             />  
           </Animatable.View>
           </View>
        </View>
         
         <View style={{marginHorizontal:29, marginTop:36, marginBottom:15}}>
           <Button 
             title="SIGN IN"
             buttonStyle= {{...parameters.styledButton, backgroundColor:" #367588"}}
             titleStyle = {parameters.buttonTitle}
             onPress ={() => {
                navigation.navigate("DrawerNavigator")
             
             }}
           />
         </View>
         <View style={{alignItems:"center", marginTop:8}}>
           <Text style={{...styles.text1, textDecorationLine:"underline", color:"red"}}> 
           
           forgot password?
           </Text>
         </View>
         <View style={{alignItems:"center",marginTop:10, marginBottom:20}}>
           <Text style={{ fontSize:20, color:"#367588", fontWeight:"bold"}}>OR</Text>
         </View>
         <View style={{marginHorizontal:10, marginTop:10}}>
           <SocialIcon 
             title="Sign In With Facebook"
             button
             type = "facebook"
             style = {styles.socialIcon}
             onPress ={() => {}}
           />
         
         </View>
         <View style={{marginHorizontal:10, marginTop:0}}>
           <SocialIcon 
             title="Sign In With Google"
             button
             type = "google"
             style = {styles.socialIcon}
             onPress ={() => {}}
           />
         </View>
         
         <View style={{flexDirection:"row", justifyContent: "flex-end", marginRight:15, marginTop: 50}}>
           <View style={{flex:0.3}}>
             <Text >New here?</Text>
           </View>
           <View>
             <Button  
               title="create an account"
               buttonStyle={{...styles.createButton, backgroundColor:"#367588"}}
               titleStyle ={styles.createButtonTitle}
             />
           </View>
         </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text1:{
    color: "steelblue",
    fontSize:16
  },
  TextInput1:{
    borderWidth:1,
    borderColor: "steelblue",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 13
  },
  TextInput2:{
    borderWidth:1,
    borderRadius:12,
    marginHorizontal: 20,
    borderColor: "steelblue",
    flexDirection: "row",
    justifyContent:"space-between",
    alignContent: "center",
    alignItems:"center",
    paddingLeft:13
  },
  socialIcon: {
    borderRadius: 12,
    height:53
  },
  createButton: {
    backgroundColor:"steelblue",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1,
    borderColor:"blue",
    height:40,
    paddingHorizontal:20,
  },
  createButtonTitle:{
    color:"grey",
    fontSize:16,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
  }

})
