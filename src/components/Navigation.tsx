import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import EditScreen from '../screens/EditScreen';
type RootStackParamList = {
  HomeScreen: any;
  DetailScreen: {
    item: {
      id: string;
      hero_name: string;
      hero_power: string;
      group: string;
    };
  };
  EditScreen: {
    item: {
      id: string;
      hero_name: string;
      hero_power: string;
      group: string;
    };
  };
};
const Stack = createStackNavigator<RootStackParamList>();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
