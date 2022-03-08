import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';


const Progress = ({step, steps, height, color , label}) => {

  const animatedValue = React.useRef(new Animated.Value(-100)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth]  = React.useState(0);
  React.useEffect(() => {
      Animated.timing(animatedValue, {
          toValue: reactive,
          duration: 50,
          useNativeDriver: true,
      }).start();
  }, []);

  React.useEffect(()=> {
      reactive.setValue(-width + (width * step )/ steps)
  }, [step, width])
   var x = ({step}/{steps})
  return (
      <>
      <Text style={{ fontFamily: 'serif', fontSize:12, fontWeight:'900', marginBottom:1,}}>
    {label}: ${x}
      </Text>
      <View 
           onLayout = {e => {
              const newWidth = e.nativeEvent.layout.width;

             setWidth(newWidth);

           }}
       style = {{
          height,
          backgroundColor: ' #33ffdd',
          borderRadius : height,
          overflow: 'hidden',
      }}>
        <Animated.View
          style ={{
            height,
            width: '100%',  
            borderRadius : height,
            backgroundColor: color,
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
                {
                 translateX: animatedValue,
                },
            ],  
          }}
      />
      </View>
    </>
    );


}


export default function StatuzBar() {
  const [index, setIndex] = React.useState(0);
  const color1 = "red"; 
  const color2 = "#8efae8";
  const color3 = "#7233e8";
  const [label1, label2, label3] = ["anxiety", "Dopamine", "endorphines"]
  const [anxietyHeight, Dopaminelevel, endorphineslevel]= [35, 30, 20]
  
  React.useEffect(() => {
       const interval = setInterval(() =>{
           setIndex((index + 1) % (10+1)

           )}, 60)
  return () => {
       clearInterval(interval)
  }
  }, [])
  
  return (
        <View style={styles.container}>
        <StatusBar  hidden />
        <Progress step={index} steps={10} height={14} color={color1} label={label1} />
        <Progress step={index} steps={5} height={14} color={color2}  label={label2} />
        <Progress step={index} steps={7} height={14} color={color3} label={label3} />
        
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#999999',
        padding: 20,
        borderTopLeftRadius: 65,
        borderTopRightRadius: 65,
        borderBottomRightRadius: 65,
        borderBottomLeftRadius: 65,
       marginBottom :35
    }

})
