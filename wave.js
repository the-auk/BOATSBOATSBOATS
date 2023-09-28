import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Wave = () =>{
    return (
        <View style={styles.container}>
            <Svg 
          viewBox="0 0 1440 320"
          style={{ position:'absolute',transform:[{scale:2}] }} ><Path fill="#0099ff" fill-opacity="1" d="M0,64L60,154.7C120,181,240,235,360,256C480,277,600,267,720,229.3C840,192,960,128,1080,106.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></Path></Svg>
        <Svg 
          viewBox="0 0 1440 320"
          style={{ position:'absolute',opacity:0.5, transform:[{scale:2}] }} ><Path fill="red" fill-opacity="1" d="M0,64L60,154.7C120,64,240,64,360,90.7C480,117,600,171,720,192C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></Path></Svg>
        
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        flex:1
    },
    svg:{
        backgroundColor:'white'
    }
})
export default Wave;
