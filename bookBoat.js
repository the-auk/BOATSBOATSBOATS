import {View, Text, Image, StyleSheet} from 'react-native';
import boat1 from "./assets/boat1.png";
const BookBoat = ({route, navigation}) =>{
    const {id} = route.params
    return(
        <View style={styles.container}>
            <Image sharedTransitionTag="imageTag" source={boat1} style={styles.boatImage} />
            <View style={styles.boatData}>
                <Text>{id}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
boatImage:{

},
boatData:{

}
})
export default BookBoat;
