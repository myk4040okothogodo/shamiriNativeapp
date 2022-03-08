import React from 'react';
import {colors} from "./src/global/styles";
import RootNavigator from './src/navigation/RootNavigator';
import {
SafeAreaView,
StyleSheet,
StatusBar,
  View,
  Text,
} from 'react-native';

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <StatusBar 
            barStyle = "dark-content"
            backgroundColor = {colors.grey1}
         />
         <RootNavigator />
         
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:"#367588"}
  

})
