import { FlatList, View, StyleSheet } from "react-native";
import BoatItem from "./boatItem";
import boat1 from "./assets/boat1.png";
import boat2 from "./assets/boat2.png";
const BoatList = () => {
  const boats = [
    {
      name: "Kraken",
      id: "A",
      bgColor:'#a20021',
      image:boat1
    },
    {
      name: "Unsinkable II",
      id: "B",
      bgColor:'#f52f57',
      image:boat2
    },
    {
      name: "Titanic",
      id: "C",
      bgColor:'#f79d5c',
      image:boat1
    },
    {
      name: "Amazonite",
      id: "D",
      bgColor:'#f3752b',
      image:boat2
    },
    {
      name: "Gypsea",
      id: "E",
      bgColor:'#a20021',
      image:boat1
    },
    {
      name: "Fantasea",
      id: "F",
      bgColor:'#f52f57',
      image:boat2
    },
    {
      name: "Knot Today",
      id: "G",
      bgColor:'#f79d5c',
      image:boat1
    },
    {
      name: "Catalina",
      id: "H",
      bgColor:'#f3752b',
      image:boat2
    },
    {
      name: "Scylla Whette",
      id: "I",
      bgColor:'#a20021',
      image:boat1
    },
  ];
  return (
    <FlatList
      snapToInterval={270}
      snapToAlignment="top"
      decelerationRate={"fast"}
      data={boats}
      renderItem={(item) =>
          <BoatItem image={item.item.image} bgColor={item.item.bgColor} name={item.item.name} id={item.item.id} />}
      contentContainerStyle={styles.list}
    ></FlatList>
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
