import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Animated
} from "react-native";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { useEffect , useRef} from "react";

const BookBoat = ({ route, navigation }) => {
  const { id, name, image, bgColor } = route.params;
  const SvgMarkup = `<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M90.131,71.704l-1.46-12.61l-2.261,0.913c-0.026,0.009-0.051,0.021-0.077,0.031l-9.48,3.827   c-0.981,0.396-1.455,1.512-1.058,2.493c0.396,0.98,1.513,1.455,2.493,1.058l4.589-1.853c-6.662,10.721-18.234,17.602-30.963,18.235   V38.911h10.937c1.057,0,1.915-0.857,1.915-1.915c0-1.057-0.857-1.915-1.915-1.915H51.914V24.305   c4.462-0.892,7.834-4.837,7.834-9.556C59.748,9.373,55.375,5,50,5s-9.748,4.373-9.748,9.748c0,4.719,3.372,8.663,7.833,9.556   v10.777H37.147c-1.057,0-1.915,0.857-1.915,1.915c0,1.057,0.857,1.915,1.915,1.915h10.937v44.888   c-12.729-0.633-24.301-7.515-30.964-18.236l4.591,1.854c0.981,0.396,2.097-0.079,2.493-1.058c0.396-0.981-0.078-2.097-1.058-2.493   l-11.818-4.771l-1.46,12.61c-0.122,1.05,0.631,2,1.682,2.122c0.075,0.009,0.149,0.013,0.223,0.013c0.958,0,1.787-0.719,1.899-1.695   l0.473-4.09c7.399,11.571,20.058,18.97,33.939,19.597v5.435c0,1.057,0.857,1.915,1.915,1.915s1.915-0.857,1.915-1.915V87.65   c13.883-0.627,26.542-8.027,33.94-19.599l0.474,4.093c0.112,0.976,0.941,1.695,1.899,1.695c0.074,0,0.149-0.004,0.223-0.013   C89.5,73.704,90.253,72.754,90.131,71.704z M44.081,14.748c0-3.263,2.655-5.919,5.919-5.919s5.919,2.655,5.919,5.919   S53.263,20.666,50,20.666S44.081,18.012,44.081,14.748z"/></g></svg>`;
  const SvgAnchor = () => (
    <SvgXml style={styles.svg} xml={SvgMarkup} width="40px" />
  );
  const [direction, setDirection] = useState("down");
  const moveContainer = useRef(new Animated.Value(0)).current;

  const moveUp = () =>{
    Animated.timing(moveContainer,{
      toValue:-550,
      duration:500,
      useNativeDriver:false
    }).start();
  }

  const moveDown = () =>{
    Animated.timing(moveContainer,{
      toValue:0,
      duration:500,
      useNativeDriver:false
    }).start();
  }
  const onGestureEvent = ({ nativeEvent }) => {
    const dy = nativeEvent.translationY;
    const dx = nativeEvent.translationX;
    if(dx>50){
      navigation.goBack();
    }
    if (dy > 0) {
      setDirection("down");
    } else if (dy < 0) {
      setDirection("up");
    }
  };

  useEffect(()=>{
    if(direction=="up"){
      moveUp();
    }
    else if(direction=="down"){
      moveDown(); 
    }
  }, [direction])

  return (

    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backArrow}>
        <SvgAnchor />
      </Pressable>
      <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.boatData, {backgroundColor: bgColor}, {top:moveContainer} ]}>
          <Image source={image} style={styles.boatImage} />
          <View style={styles.dataHeading}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>$149.99/hr</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionHeading}>Description</Text>
            <Text style={styles.descriptionText}>
              This is a boat with like 6 poeple capacity or something idk,
              making this a long text so it goes to two lines hehe.
            </Text>
          </View>
          <View style={styles.bookingSection}>
            <View style={styles.calendarWrapper}></View>
            <Pressable style={styles.bookButton}>
              <Text>Reserve</Text>
            </Pressable>
          </View>
        </Animated.View>
      </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 244,
  },
  backArrow: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 20,
    top: 50,
    zIndex: 99,
  },
  svg: {
    height: "100%",
    transform: [{ rotate: "90deg" }],
  },
  boatData: {
    width: 390,
    position: "relative",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingBottom:500,
  },
  boatImage: {
    height: 500,
    left: -10,
    top: -150,
  },
  dataHeading: {
    marginTop: -70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5f5f5",
  },
  price: {
    fontSize: 16,
    color: "#f5f5f5",
  },
  calendarWrapper: {
    height: 100,
  },
  bookButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#ffba08",
  },
  descriptionWrapper: {
    paddingVertical: 50,
  },
  descriptionHeading: {
    color: "white",
    fontSize: 18,
    paddingBottom: 5,
  },
  descriptionText: {
    color: "white",
    opacity: 0.8,
    fontSize: 14,
  },
});
export default BookBoat;
