import { View, Text, Animated, StyleSheet, Pressable } from "react-native";
import Header from "./Header";
import BoatList from "./boatList";
import Drawer from "./customDrawer";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { useState, useRef } from "react";
const Home = () => {
  const moveContainer = useRef(new Animated.Value(0)).current;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawerHandler = () =>{
    setDrawerOpen(true)
    Animated.timing(moveContainer,{
      toValue:250,
      duration:250,
      useNativeDriver:false
    }).start();
  }

  const closeDrawerHandler = () =>{
    if(drawerOpen){
    Animated.timing(moveContainer,{
      toValue:0,
      duration:250,
      useNativeDriver:false
    }).start();
    setDrawerOpen(false)}
  }

  const onGestureEvent = ({ nativeEvent }) => {
    const dx = nativeEvent.translationX;
    if(dx<-25){
      closeDrawerHandler()
    }
  };

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
    <Animated.View style={[styles.container, {left:moveContainer}]}>
      {drawerOpen && <Pressable onPress={closeDrawerHandler} style={styles.absoluteContainer} />}
      <Drawer style={styles.drawer} />
      <Header openDrawerHandler={openDrawerHandler} />
      <BoatList />
    </Animated.View>
    </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    position:'relative'
  },
  absoluteContainer:{
    position:'absolute',
    height:'100%',
    width:'100%',
    left:0,
    top:0,
    backgroundColor:'#0a0a0a80',
    zIndex:99
  }
})
export default Home;
