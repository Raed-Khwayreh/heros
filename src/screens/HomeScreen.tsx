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
import axios from 'axios';
import {QueryClient, useMutation} from 'react-query';
import MyFlatList from '../components/MyFlatList';
const queryClient = new QueryClient();
const HomeScreen: React.FC<navigate> = ({navigation}) => {
  const [heroName, setHeroName] = useState('');
  const [heroPower, setHeroPower] = useState('');
  const addData = (item: object) => {
    return axios.post(
      `https://6453582ce9ac46cedf22c25e.mockapi.io/heros`,
      item,
    );
  };
  const addMutation = useMutation(addData, {
    onSuccess: () => {
      queryClient.setQueryData('heros', {
        hero_name: 'hero',
        hero_power: 'hero',
      });
      queryClient.invalidateQueries('heros');
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
              const task = {
                id: Math.random(),
                hero_name: heroName,
                hero_power: heroPower,
                group: '',
              };
              addMutation.mutate(task);
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
