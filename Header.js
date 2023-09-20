import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import {SvgXml} from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import { useRef } from "react";

const Header = (props) => {
    const SvgMarkup = `<svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M491,240h-46.591c-3.208-40.883-19.419-78.163-44.48-107.716l32.848-32.848c5.858-5.857,5.858-15.355,0-21.213  c-5.856-5.857-15.354-5.858-21.213,0l-32.765,32.764C349.317,85.609,311.988,69.114,271,65.68V20c0-8.284-6.716-15-15-15  s-15,6.716-15,15v45.517c-41.274,3.021-78.922,19.289-108.715,44.554l-31.848-31.848c-5.857-5.858-15.355-5.858-21.213,0  c-5.858,5.858-5.858,15.355,0,21.213l31.764,31.764c-25.586,29.722-42.15,67.418-45.397,108.8H21c-8.284,0-15,6.716-15,15  s6.716,15,15,15h44.591c3.248,41.382,19.812,79.078,45.397,108.8l-31.764,31.764c-5.858,5.857-5.858,15.355,0,21.213  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l31.847-31.848c29.793,25.266,67.441,41.533,108.715,44.554V490  c0,8.284,6.716,15,15,15s15-6.716,15-15v-45.68c40.988-3.435,78.318-19.929,107.799-45.309l32.765,32.765  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-32.848-32.848  c25.062-29.553,41.272-66.833,44.48-107.716H491c8.284,0,15-6.716,15-15S499.284,240,491,240z M414.291,240H313.102  c-1.357-5.255-3.426-10.224-6.07-14.82l71.614-71.614C398.365,177.561,411.243,207.374,414.291,240z M255,285  c-6.785,0-13.049-2.267-18.08-6.079c-0.597-0.961-1.298-1.875-2.132-2.709c-0.948-0.948-1.999-1.727-3.107-2.368  c-3.291-4.063-5.544-8.999-6.35-14.403c0.435-1.403,0.669-2.895,0.669-4.44s-0.235-3.037-0.669-4.44  c0.806-5.405,3.06-10.341,6.351-14.406c1.108-0.641,2.158-1.419,3.106-2.367c0.833-0.833,1.534-1.746,2.13-2.706  C241.95,227.268,248.214,225,255,225c16.542,0,30,13.458,30,30S271.542,285,255,285z M357.522,132.264l-71.435,71.435  c-4.652-2.83-9.724-5.028-15.088-6.515V95.798C303.732,99.063,333.587,112.237,357.522,132.264z M241,95.62v101.046  c-5.621,1.35-10.934,3.491-15.818,6.302l-71.614-71.614C177.806,111.433,207.983,98.496,241,95.62z M132.265,152.477l71.435,71.435  c-3.006,4.942-5.318,10.351-6.801,16.089H95.708C98.803,206.876,112.034,176.656,132.265,152.477z M95.708,270h101.19  c1.482,5.738,3.794,11.146,6.8,16.088l-71.434,71.436C112.034,333.344,98.803,303.124,95.708,270z M153.567,378.646l71.614-71.614  c4.885,2.811,10.198,4.952,15.819,6.302v101.047C207.983,411.505,177.806,398.566,153.567,378.646z M271,414.202V312.816  c5.365-1.486,10.437-3.686,15.089-6.515l71.435,71.435C333.587,397.764,303.732,410.938,271,414.202z M378.646,356.434  l-71.614-71.614c2.645-4.597,4.712-9.564,6.069-14.819h101.189C411.243,302.626,398.365,332.439,378.646,356.434z"/></svg>`
    const SvgWheel = () => <SvgXml style={styles.svg} xml={SvgMarkup} width="40px" />
    const rotateWheel = useRef(new Animated.Value(0)).current

    const drawerHandler=()=>{
      Animated.timing(
        rotateWheel,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true
      }
    ).start()
    setTimeout(()=>{
      props.openDrawerHandler()
    },301)
    setTimeout(()=>{
      rotateWheel.setValue(0)
    }, 701)
    }
    return (
    <View style={styles.headerWrapper}>
      <Animated.View style={{transform:[{rotate:rotateWheel.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )}]}}>
      <Pressable onPress={drawerHandler} style={styles.menuButton}>
        <SvgWheel />
      </Pressable></Animated.View>
      <View style={styles.appImage}>
        <Text>BOATSBOATSBOATS</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerWrapper: {
    paddingTop: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 110,
    boxSizing: "border-box",
  },
  menuButton: {
    height: "100%",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  svg:{
    height:'100%',
  },
  appImage: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;
