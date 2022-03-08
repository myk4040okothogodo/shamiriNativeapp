import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    ImageBackground,
    StyleSheet,
    Image
} from 'react-native';
import  Header   from "../components/Header";
import TextButton from "../components/TextButton";
import {images,dummyData, constants, COLORS, FONTS, SIZES, icons } from "../constants";


import {VictoryScatter, VictoryLine, VictoryChart, VictoryAxis} from "victory-native";
import VictoryCustomTheme from "../styles/VictoryCustomTheme";


const TimingTabs = constants.Timings.map((marketTab) =>({
    ...marketTab,
    ref: React.createRef()

}))


const TabIndicator = ({measureLayout, scrollX }) => {

     const inputRange = TimingTabs.map((_, i) => i * SIZES.width)
     const translateX = scrollX.interpolate({
         inputRange,
         outputRange: measureLayout.map(measure => measure.x)
     
     })
     return (
         <Animated.View
             style ={{
                 position: "absolute",
                 left: 0,
                 height: "100%",
                 width: (SIZES.width - (SIZES.radius * 2)) / 2,
                 borderRadius: SIZES.radius,
                 backgroundColor: "#367588" ,
                 transform: [{
                     translateX
                 }]
             
             }}
         
         />
     
     )

}


const Tabs = ({scrollX, onMarketTabPress }) => {


    const [measureLayout, setMeasureLayout] =  React.useState([])
    const containerRef = React.useRef()
    
    React.useEffect(() => {
        let ml = []
        TimingTabs.forEach(timingTab => {
            
            timingTab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })
                if(ml.length === TimingTabs.length){
                    setMeasureLayout(ml)
                
                }
                }
            
            )
        })
    }, [containerRef.current])
    return (
        <View
        
            ref = {containerRef}
            style={{
                flexDirection: "row",
                backgroundColor: "grey"
            }}
        >
        {/* Tab Indicator */}
        {measureLayout.length > 0 && <TabIndicator 
            measureLayout = {measureLayout}
            scrollX = {scrollX}
        
        />}
        
        {/* Tabs */}
        {TimingTabs.map((item, index) => {
            return (
                <TouchableOpacity
                   key = {`MarketTab-${index}`}
                   style = {{
                       flex: 1
                   
                   }}
                   onPress = {() => onMarketTabPress(index)} 
                >
                <View
                  ref ={item.ref}
                  style ={{
                      paddingHorizontal: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40
                  
                  }}
                
                >
                <Text 
                  style = {{
                    color: COLORS.white,
                    ...FONTS.h3
                  
                  }}
                
                >{item.title}</Text>
                
                
                </View>
                
                </TouchableOpacity>
            )
        })}
        </View>
    )
}

const StatisticsScreen = ({ navigation }) => {
    const numberOfCharts = [1,2,3];
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const marketTabScrollViewRef = React.useRef()
    const onMarketTabPress = React.useCallback(marketTabIndex => {
        marketTabScrollViewRef?.current?.scrollToOffset({
            offset: marketTabIndex * SIZES.width
        
        })
    
    })
    function renderTabBar() {
        return (
            <View
              style ={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.radius,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.gray
              }}
            >
            <Tabs 
                scrollX = {scrollX}
                onMarketTabPress = {onMarketTabPress}
            
            />
            </View>
        )
    }
    
    
    function renderDots() {
    
        
        const dotPosition = Animated.divide(scrollX, SIZES.width)
        
        return (
            <View
                style = {{
                    height: 30,
                    marginTop: 15

                }}
             >
                <View
                    style ={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                 {numberOfCharts.map((item, index) => {
                     const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index+1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                     })

                     const dotSize = dotPosition.interpolate({
                         inputRange: [index-1, index, index+1],
                         outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                         extrapolate: "clamp"

                     })
                     const dotColor = dotPosition.interpolate({
                         inputRange: [index -1, index, index+1],
                         outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
                         extrapolate: 'clamp'

                     })
                     return (
                         <Animated.View

                            key = {`dot-${index}`}
                            opacity = {opacity}
                            style = {{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 6,
                                width: dotSize,
                                height: dotSize, 
                                backgroundColor: "#367588"

                            }}
                       />
                     )

                 })}
             </View>

            </View>


        )
    }
    
    
    
    function renderCharts() {
    
        
        const [chartOptions, setChartOptions]  = React.useState(dummyData.chartOptions)
        const [selectedOption, setSelectedOption] = React.useState(chartOptions[0])
        const [selectedCurrency, setSelectedCurrency] = React.useState('happiness')
        
        return (
            <Animated.FlatList  
                ref = {marketTabScrollViewRef}
                data = {TimingTabs}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                
                }}
                horizontal
                pagingEnabled
                scrollEventThrottle ={36}
                snapToAlignment = "center"
                showsHorizontalScrollIndicator = {false}
                keyExtractor = {item => item.id}
                onScroll = {
                  Animated.event([
                     {nativeEvent: {contentOffset: {x: scrollX}}}
                  
                  ], {
                     useNativeDriver: false
                  })
                }
                renderItem = {({item, index}) => {
                    return (
                        <View
                            style ={{
                                flex: 1,
                                width: SIZES.width
                            }}
                        >
                        
                        
                        <View
                style ={{
                     marginTop: SIZES.padding,
                    marginHorizontal: SIZES.radius,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                 
                   
                }}
             >
              {/* header */}
              <View
                  style={{
                      flexDirection: 'row',
                      marginTop: SIZES.padding,
                      paddingHorizontal: SIZES.padding
                  }}
              >
                  <View>
                      <Text style ={{ ...FONTS.h3 }}>mood tracker</Text>
                  </View>
              </View>
              {/* Chart */}
              <Animated.ScrollView
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              snapToAlignnment="center"
              snapToInterval={SIZES.width - 40}
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              onScroll = {Animated.event([
                  {nativeEvent: {contentOffset: {x: scrollX}}}
              ], {useNativeDriver: false})}

               >
              {
                  numberOfCharts.map((item, index) => (
                      <View
                          key={`chart-${index}`}
                          style={{
                              marginLeft: index == 0 ? SIZES.base : 0            
                          }}
                      >
                      
                      <View
                  style = {{
                      marginTop: -25
                    }}
                   >
                  <VictoryChart
                      theme = {VictoryCustomTheme}
                      height = {180}
                      width = {SIZES.width - 1}
                   >
                        <VictoryLine
                              style ={{
                                  data: {
                                      stroke: COLORS.secondary
                                  },
                                  parent: {
                                      border: "1px solid #ccc"
                                  }
                               }}
                              data = {selectedCurrency?.chartData}
                              categories ={{
                                    x: ["15 days", "30 days", "45 days", "60 days"],
                                    y: ["45", "90", "135"]
                              }}
                        />
                        <VictoryScatter
                            data = {selectedCurrency?.chartData}
                            size ={0.07}
                            style ={{
                                data:{
                                    fill: COLORS.black
                                }
                            }}
                        />
                        <VictoryAxis
                            style={{
                                grid: {
                                    stroke: "transparent"
                                }
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            style ={{
                                axis: {
                                    stroke: "transparent"
                                },
                                grid: {
                                    stroke: "grey"
                                }
                            }}
                        />
                  </VictoryChart>
                      </View>
                      </View>
                  
                  ))
              }
              
                  </Animated.ScrollView>
              {/* options */}
                  <View
                      style={{
                          width: "100%",
                          paddingHorizontal: SIZES.padding,
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                      }}
                   >
                       {
                           chartOptions.map((option) => {
                               return (
                                 <TextButton
                                     key ={`option-${option.id}`}
                                     label= {option.label}
                                     customContainerStyle={{
                                         height: 30,
                                         width: 60,
                                         borderRadius: 15,
                                         backgroundColor: selectedOption.id == option.id ? "#367588" : COLORS.lightGray

                                     }}
                                     customLabelStyle = {{
                                         color: selectedOption.id == option.id ? COLORS.white : COLORS.gray, ...FONTS.body5

                                     }}
                                     onPress = {() => console.log("button pressed")}
                                 />

                               )
                           })
                       }
                   </View>
              {/* Dots */}
              {renderDots()}
             </View> 
            </View> 
          )        
        }}
      />
     )
   }
   
   function renderCard(){
        return (
    <TouchableOpacity>
        <View style={{
          paddingTop: 10,
            paddingHorizontal:10
        }}>
      <ImageBackground
        style={{
          height:185,  
        }}
        imageStyle = {styles.imageStyle}
        source ={require("../assets/images/therapy.jpeg")} 
        //imageStyle = {styles.image}
      
      >
       <Text
          style={{
            paddingTop:10,
            paddingHorizontal:10,
            color: "white"
          }}
          >Talk to a therapist?</Text>    
     
        
      </ImageBackground>   
     </View>
     </TouchableOpacity>
     )
    }
    
    
    
    
    return (
        <View
            style ={{
            
                backgroundColor:"grey"
            }}
            
        >
          {/* Header */}
          <Header
              style ={{ justifyContent:"space-between"}}
              title="    4th AUGUST,2021"
              type ="arrow-left"
              navigation = {navigation}
          />
          
          {/*Tab Bar*/}
          {renderTabBar()}
          
          {/*Chart*/}
          {renderCharts()}
          {/* renderImage*/}
          {renderCard()}
        </View>
    )
}

export default StatisticsScreen;



const styles = StyleSheet.create({


imageStyle: {
     borderTopLeftRadius:5,
     borderTopRightRadius:5,
   },
   
 })  
