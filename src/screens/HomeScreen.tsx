import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
interface navigate {
  navigation: any;
}
import {QueryClient, useMutation} from 'react-query';
import MyFlatList from '../components/List';
import {addData} from '../api/api';
const queryClient = new QueryClient();

const HomeScreen: React.FC<navigate> = ({navigation}) => {
  const [heroName, setHeroName] = useState('');
  const [heroPower, setHeroPower] = useState('');

  const addMutation = useMutation(addData, {
    onSuccess: () => {
      queryClient.invalidateQueries('hero');
    },
  });
  return (
    <KeyboardAvoidingView behavior="position">
      <View>
        <View style={{height: 400}}>
          <MyFlatList navigation={navigation}></MyFlatList>
        </View>
        <View style={{marginHorizontal: 15, marginVertical: 5}}>
          <TextInput
            placeholder="Hero Name"
            style={styles.input}
            value={heroName}
            onChangeText={text => {
              setHeroName(text);
            }}
          />
          <TextInput
            placeholder="Hero Power"
            style={styles.input}
            value={heroPower}
            onChangeText={text => {
              setHeroPower(text);
            }}
          />
          <Pressable
            onPress={() => {
              const hero = {
                id: Math.random(),
                hero_name: heroName,
                hero_power: heroPower,
                group: 'marvel',
              };
              addMutation.mutate(hero);
              setHeroName('');
              setHeroPower('');
            }}>
            <View style={styles.btn}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Add Hero
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
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
