import React from 'react';
import {View,Text, StyleSheet, FlatList,ImageBackground,Dimensions, TouchableWithoutFeedback} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import {filterData2} from '../global/Data';
//import {colors} from '../components/GlobalStyles';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}){
  return (
    <View style={{flex:1, alignItems:"center"}}>
       <SearchComponent  />
       <View style={{marginTop:10}}>
         <View>
          <FlatList 
             style ={{}}
             data = {filterData2}
             keyExtractor = {item => item.id}
             renderItem ={({item}) => (
                <TouchableWithoutFeedback
                    onPress ={() =>{
                      navigation.navigate("SearchResultScreen", {item: item.name})
                    
                    }}
                >
                    <View style={styles.imageView}>
                       <ImageBackground
                              style ={{...styles.image}}
                              source = {item.image}
                              >
                       <View style={{...styles.textView, justifyContents:"center"}}>
                          <Text style={{color:"#DCDCDC", fontSize:16}}>{item.name}</Text>
                       </View>
                       </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
             )}
             
             horizontal ={false}
             showsVerticalScrollIndicator ={false}
             numColumns = {2}
             ListHeaderComponent = {<Text style={styles.listHeader}>Common Searches</Text>}
             ListFooterComponent = {<Footer navigation={navigation}/>}
          />
       </View>
    </View>
    </View>
  )
}



const Footer = ({navigation}) =>{
  return (
   <View style={{marginTop:20,marginBottom:30}}>
         <View style={{}}>
          <FlatList 
             style ={{marginBottom:10}}
             data = {filterData2}
             keyExtractor = {item => item.id}
             renderItem ={({item}) => (
                <TouchableWithoutFeedback
                     onPress ={() =>{
                      navigation.navigate("SearchResultScreen", {item: item.name})
                      }}   
                  >
                    <View style={styles.imageView}>
                       <ImageBackground
                              style ={styles.image}
                              source = {item.image}
                              >
                       <View style={{...styles.textView, justifyContents:"center"}}>
                          <Text style={{color:"#DCDCDC", fontSize:16}}>{item.name}</Text>
                       </View>
                       </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
             )}
             
             horizontal ={false}
             showsVerticalScrollIndicator ={false}
             numColumns = {2}
             ListHeaderComponent = {<Text style={styles.listHeader}>Harvest Categories</Text>}
             
          />
       </View>
    </View>
 )
}
const styles = StyleSheet.create({
   imageView: {
      borderRadius: 10,
      justifyContent: "center",
      alignItems:"center",
      width:SCREEN_WIDTH*0.4475,
      height:SCREEN_WIDTH*0.4475,
      marginLeft:SCREEN_WIDTH*0.035,
      marginBottom:SCREEN_WIDTH*0.035
   },
   image : {
      height: SCREEN_WIDTH*0.4475,
      width: SCREEN_WIDTH*0.4475,
      borderRadius:10,
   },
   listHeader: {
       fontSize:16,
       color: "grey",
       paddingBottom:10,
       marginLeft:12
   
   },
   textView : {
      height: SCREEN_WIDTH*0.4475,
      width: SCREEN_WIDTH*0.4475,
      alignItems: "center",
      backgroundColor: "rgba(57,57,57,0.3)",
      justifyContent:"center"
   },

})
