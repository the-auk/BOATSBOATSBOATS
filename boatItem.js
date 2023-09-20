import { useEffect } from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const BoatItem = (props) =>{
    const navigation = useNavigation();

    const handleNavigation=(e)=>{
        navigation.navigate('book', {
            id:props.id,
            name:props.name,
            image:props.image,
            bgColor:props.bgColor
        })
    }

    return (
        <Pressable onLongPress={()=>console.log("long")} onPress={handleNavigation} id={props.id} style={styles.boatWrapper}>
            <View style={styles.boatImageWrapper}>
                <Animated.Image sharedTransitionTag={props.id} style={styles.boatImage} source={props.image} />
            </View>
            <View style={{...styles.boatData, backgroundColor:props.bgColor}}>
                <Text style={styles.boatName}>{props?.name}</Text>
            </View>
        </Pressable>
    )
}
const styles=StyleSheet.create({
    boatWrapper:{
        width:"100%",
        padding:10,
        justifyContent:'center',
        alignItems:'center',  
    }, 
    boatImageWrapper:{
        height:100,
        width:'100%',
        position:'relative',
        zIndex:2,
    },
    boatImage:{
        position:'absolute',
        height:275,
        width:200,
        right:0,
        top:-25,
    },
    boatData:{
        borderRadius:16,
        width:'100%',
        height:150,
        justifyContent:'flex-end',
        padding:10,
        position:'relative',
        zIndex:1
    },
    boatName:{
        color:"black",
        fontSize:30,
    }
})
export default BoatItem;