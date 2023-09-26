import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Pressable, Text, Animated} from "react-native";

const DateTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
    width: 160,
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
    width: "100%",
    paddingTop:100,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    height: 400,
    backgroundColor: "#ffba08",
    left: 0,
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
