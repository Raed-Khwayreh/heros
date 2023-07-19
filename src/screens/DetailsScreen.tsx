import {View, Text, StyleSheet, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
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
};
type screenProp = {
  route: RouteProp<RootStackParamList, 'DetailScreen'>;
};
const DetailsScreen: React.FC<screenProp> = ({route}) => {
  const object = route.params.item;

  return (
    <View style={styles.card}>
      <Image
        style={{
          borderRadius: 15,
          width: '100%',
          height: 200,
        }}
        source={require('../../assets/images/marvel.jpg')}></Image>

      <View
        style={{
          marginTop: 15,
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Text style={styles.text}>{`${object.hero_name}`}</Text>
        <Text
          style={styles.text_power}>{`Hero Power: ${object.hero_power}`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  text_power: {
    color: 'red',
    fontSize: 20,
  },
});
export default DetailsScreen;
