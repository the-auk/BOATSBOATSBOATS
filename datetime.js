import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const DateTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  const handleStartOpen = () => {
    setEndOpen(false);
    setStartOpen((prev)=> !prev);
  };
  const handleEndOpen = () => {
    setStartOpen(false);
    setEndOpen((prev)=> !prev);
  };

  return (
    <View style={styles.container}>
              <View style={styles.inputWrapper}>
        <Pressable onPress={handleStartOpen} style={styles.inputInnerWrapper}>
        <Text style={styles.dateLabel}>Check in</Text>
        <View style={{...styles.dateWrapper, borderWidth:startOpen?2:1}}>
          <Text style={styles.date}>
            {startDate.toString().substring(4, 21)}
          </Text>
        </View>
        </Pressable>
        <Pressable onPress={handleEndOpen} style={styles.inputInnerWrapper}>
        <Text style={styles.dateLabel}>Check out</Text>
        <View style={{...styles.dateWrapper, borderWidth:endOpen?2:1}} >
          <Text style={styles.date}>{endDate>startDate?endDate.toString().substring(4, 21):startDate.toString().substring(4, 21)}</Text>
        </View>
        </Pressable>
      </View>
      <View style={styles.modal}>
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    overflow:'hidden',
    borderColor:'black',
    borderWidth:1,
    width:160
  },
  dateLabel:{
    fontSize:16,
    marginBottom:5,
    paddingLeft:5,
    fontWeight:'bold',
  }
});
export default DateTime;
