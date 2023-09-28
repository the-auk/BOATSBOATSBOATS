import { FlatList, View, StyleSheet, Animated } from "react-native";
import BoatItem from "./boatItem";
import boat1 from "./assets/boat1.png";
import boat2 from "./assets/boat2.png";
import { State, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { useState, useEffect, useRef } from "react";

const BoatList = () => {
  const skew = useRef(new Animated.Value(0)).current;

  const boats = [
    {
      name: "Kraken",
      id: "A",
      bgColor:'#c9f2c7',
      image:boat1
    },
    {
      name: "Unsinkable II",
      id: "B",
      bgColor:'#aceca1',
      image:boat2
    },
    {
      name: "Titanic",
      id: "C",
      bgColor:'#96BE8C',
      image:boat1
    },
    {
      name: "Amazonite",
      id: "D",
      bgColor:'#629460',
      image:boat2
    },
    {
      name: "Gypsea",
      id: "E",
      bgColor:'#c9f2c7',
      image:boat1
    },
    {
      name: "Fantasea",
      id: "F",
      bgColor:'#aceca1',
      image:boat2
    },
    {
      name: "Knot Today",
      id: "G",
      bgColor:'#96BE8C',
      image:boat1
    },
    {
      name: "Catalina",
      id: "H",
      bgColor:'#629460',
      image:boat2
    },
    {
      name: "Scylla Whette",
      id: "I",
      bgColor:'#c9f2c7',
      image:boat1
    },
  ];

  const handleStateChange=({nativeEvent})=>{
    if(nativeEvent.state==State.ACTIVE || nativeEvent.state==State.BEGAN || nativeEvent.state=='long'){
      Animated.timing(skew,{
        toValue:1,
        duration:200,
        useNativeDriver:false
      }).start();
    }
    if(nativeEvent.state==State.FAILED || nativeEvent.state==State.CANCELLED || nativeEvent.state==State.END){
      setTimeout(()=>{
        Animated.timing(skew,{
          toValue:0,
          duration:200,
          useNativeDriver:false
        }).start();
      }, 200)
    }
  }

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onHandlerStateChange={handleStateChange}>
    <FlatList
      snapToInterval={270}
      snapToAlignment="top"
      decelerationRate={"fast"}
      data={boats}
      renderItem={(item) =>
        <Animated.View style={{shadowOpacity:skew,shadowRadius:10, shadowColor:'rgba(0,0,0,0.4)', shadowOffset:{width: 0,height: 0}, perspective:1000, transform:[{rotateX:skew.interpolate(
          {
            inputRange: [0, 1],
            outputRange: ['0deg', '20deg'],
          }
        )}]}}>
          <BoatItem image={item.item.image} bgColor={item.item.bgColor} name={item.item.name} id={item.item.id} /></Animated.View>}
      contentContainerStyle={styles.list}
    ></FlatList>
            
            </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  list: {
    width: window.innerWidth,
    paddingBottom:200
    },
  testBox: {
    height: 200,
    backgroundColor: "red",
    marginVertical: 10,
  },
});
export default BoatList;
