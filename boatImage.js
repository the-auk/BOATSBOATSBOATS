import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";
const BoatImage = (props) =>{
    return (
        <Animated.Image style={styles.boatImage} source={props.image} sharedTransitionTag={props.id} />
    )
}
const styles=StyleSheet.create({
    boatImage: {
        position:'relative',
        height: 500,
        left: -10,
        top: -150,
      },
})
export default BoatImage;