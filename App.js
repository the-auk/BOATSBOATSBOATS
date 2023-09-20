import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import BookBoat from './bookBoat';
import MapHome from './mapHome';
import Drawer from './Drawer';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name="map" component={MapHome} /> */}
        {/* <Stack.Screen name="drawer" options={{ gestureEnabled: false }} component={Drawer} /> */}
        <Stack.Screen name="home" options={{ gestureEnabled: false }} component={Home} />
        <Stack.Screen name="book" component={BookBoat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
