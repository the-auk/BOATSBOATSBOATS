import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Pressable, Text, Animated} from "react-native";
import { State, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";

const DateTime = () => {
  const [startDate, setStartDate] = useState(()=>{
    let d = new Date()
    d.setHours(d.getHours()+1)
    d.setMinutes(0)
    return d
  })
  const [endDate, setEndDate] = useState(()=>{
    let d = new Date()
    d.setHours(d.getHours()+2)
    d.setMinutes(0)
    return d
  });
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const moveModal = useRef(new Animated.Value(-1000)).current;

  useEffect(()=>{
    if(startOpen || endOpen){
      setModalOpen(true)
    }
    else{
      setModalOpen(false)
    }
  }, [startOpen, endOpen])

  useEffect(()=>{
    if(modalOpen){
      Animated.timing(moveModal,{
        toValue:-510,
        duration:500,
        useNativeDriver:false
      }).start();
    }
    else{
      Animated.timing(moveModal,{
        toValue:-1000,
        duration:500,
        useNativeDriver:false
      }).start();
    }
  },[modalOpen])

  const handleStartOpen = () => {
    setEndOpen(false);
    setStartOpen((prev) => !prev);
  };
  const handleEndOpen = () => {
    setStartOpen(false);
    setEndOpen((prev) => !prev);
  };

  const onGestureEvent = ({ nativeEvent }) => {
    const dy = nativeEvent.translationY;
    if(dy>0 && nativeEvent.state==State.ACTIVE){
      Animated.timing(moveModal,{
        toValue:-510-dy,
        duration:1,
        useNativeDriver:false
      }).start();
    }
    if(nativeEvent.state==State.END){
      console.log("true")
    }
  };

  const handleSnap = ({nativeEvent}) =>{
    const dy = nativeEvent.translationY;
    const vy = nativeEvent.velocityY;
    if(nativeEvent.state==State.END){
      if(dy+vy>=200){
        if(vy>100){
          Animated.timing(moveModal,{
            toValue:-1000,
            duration:(500-dy)/100,
            useNativeDriver:false
          }).start();
        }
        else{
          Animated.timing(moveModal,{
            toValue:-1000,
            duration:(500-dy)/vy,
            useNativeDriver:false
          }).start();
        }
        setModalOpen(false)
        setStartOpen(false)
        setEndOpen(false)
      }
      else{
        Animated.timing(moveModal,{
          toValue:-510,
          duration:dy/vy,
          useNativeDriver:false
        }).start();
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Pressable onPress={handleStartOpen} style={styles.inputInnerWrapper}>
          <Text style={styles.dateLabel}>Check in</Text>
          <View
            style={{ ...styles.dateWrapper, borderWidth: startOpen ? 2 : 1 }}
          >
            <Text style={styles.date}>
              {startDate.toString().substring(4, 21)}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={handleEndOpen} style={styles.inputInnerWrapper}>
          <Text style={styles.dateLabel}>Check out</Text>
          <View style={{ ...styles.dateWrapper, borderWidth: endOpen ? 2 : 1 }}>
            <Text style={styles.date}>
              {endDate > startDate
                ? endDate.toString().substring(4, 21)
                : startDate.toString().substring(4, 21)}
            </Text>
          </View>
        </Pressable>
      </View>
      {modalOpen && (
        <GestureHandlerRootView>
          <PanGestureHandler onHandlerStateChange={handleSnap} onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.modal, {bottom:moveModal}]}>
            <View style={styles.closer}></View>
            {startOpen && (
              <RNDateTimePicker
                style={{ justifyContent: "space-between" }}
                minuteInterval={30}
                onChange={(event, date) => setStartDate(date)}
                themeVariant="light"
                accentColor="#ffba08"
                display="spinner"
                value={startDate}
                minimumDate={new Date()}
                mode="datetime"
              />
            )}
            {endOpen && (
              <RNDateTimePicker
                style={{ justifyContent: "space-between" }}
                minuteInterval={30}
                onChange={(event, date) => setEndDate(date)}
                themeVariant="light"
                accentColor="#ffba08"
                display="spinner"
                value={endDate}
                minimumDate={startDate}
                mode="datetime"
              />
            )}
          </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
        )}
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    position:'relative',
    width:'100%',
    zIndex:99
  },
  inputWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dateWrapper: {
    height: 50,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    width: 165,
  },
  dateLabel: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  modal: {
    position: "absolute",
    zIndex:99,
    width: 390,
    left:-10,
    paddingTop:100,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    height: 400,
    backgroundColor: "#ffba08",
    alignItems:'center'
  },
  closer:{
    width:50,
    height:5,
    backgroundColor:'#0a0a0a',
    position:'absolute',
    top:20,
    borderRadius:'50%'
  }
});
export default DateTime;
