import {View, Text, StyleSheet, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
type RootStackParamList = {
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
const DetailScreen: React.FC<screenProp> = ({route}) => {
  const object = route.params.item;
  const image =
    route.params.item.group === 'marvel'
      ? require('../../assets/images/marvel.jpg')
      : route.params.item.group === 'marvel'
      ? require('../../assets/images/spiderman.png')
      : require('../../assets/images/aveng.jpg');
  return (
    <View style={styles.card}>
      <Image
        style={{
          borderRadius: 15,
          width: '100%',
          height: 200,
        }}
        source={image}></Image>

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
export default DetailScreen;
