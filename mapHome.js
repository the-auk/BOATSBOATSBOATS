import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapHome = () =>{
    return(
        <View style={styles.container}>
        <MapView style={{height:'100%', width:'100%'}} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%'
    }
})
export default MapHome;
