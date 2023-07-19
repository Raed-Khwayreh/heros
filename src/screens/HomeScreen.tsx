import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';
import {useState} from 'react';
interface navigate {
  navigation: any;
}

import MyFlatList from '../components/MyFlatList';
const HomeScreen: React.FC<navigate> = ({navigation}) => {
  const [heroName, setHeroName] = useState('');
  const [heroPower, setHeroPower] = useState('');
  return (
    <View>
      <View style={{height: 400}}>
        <MyFlatList navigation={navigation}></MyFlatList>
      </View>
      <View style={{marginHorizontal: 15, marginVertical: 5}}>
        <TextInput
          placeholder="Hero Name"
          style={styles.input}
          onChangeText={text => {
            setHeroName(text);
          }}
        />
        <TextInput
          placeholder="Hero Power"
          style={styles.input}
          onChangeText={text => {
            setHeroPower(text);
          }}
        />
        <Pressable
          onPress={() => {
            const newTask = {
              id: Math.random(),
              hero_name: heroName,
              hero_power: heroPower,
              group: '',
            };
            console.log(newTask);
          }}>
          <View style={styles.btn}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Add task
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1C68A5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15,
  },
  input: {
    borderColor: '#1C68A5',
    borderWidth: 2,
    backgroundColor: 'white',
    marginBottom: 15,
    color: 'black',
    padding: 15,
    borderRadius: 15,
  },
});
export default HomeScreen;
