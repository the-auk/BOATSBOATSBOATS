import { View, Text} from "react-native";
import Header from "./Header";
import BoatList from "./boatList";

const Home = ()=>{
    return (
        <View>
           <Header />
           <BoatList />
        </View>
    )
}
export default Home;