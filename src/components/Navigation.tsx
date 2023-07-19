import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
type RootStackParamList = {
  HomeScreen: any;
  DetailScreen: {name: string};
};
const Stack = createStackNavigator<RootStackParamList>();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
