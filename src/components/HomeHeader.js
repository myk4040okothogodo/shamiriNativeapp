import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles'
import {Spiral as Hamburger} from 'hamburger-react';

export default function HomeHeader({navigation}){
   const [isOpen , setOpen] = useState(false);
  const BadgeIcon = withBadge(0)(Icon)
  return(
    <View style={styles.header}>
    
     <View style={{alignItems:"center", justifyContent:"center",marginLeft:15}}> 
        <Icon   
          type="material-community"
          name ="menu"
          color={colors.cardbackground}
          size={40}
          onPress={()=>{
            navigation.toggleDrawer()
          }}
        />
        
       </View>
       
    <View style={{alignItems:"center", justifyContent:"center"}}>
      <Text style={{color:colors.cardbackground, fontSize:25, fontWeight:"bold"}}>Vuuna</Text>
    </View>
    <View style={{alignItems:"center", justifyContent:"center", marginRight:15}}>
       <BadgeIcon  
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardbackground}
       />
    </View>
  </View>
  )

}

const styles = StyleSheet.create({
   header: {
     flexDirection: "row",
     backgroundColor: "green",
     height:parameters.headerHeight,
     justifyContent:"space-between"
   
   }

})
