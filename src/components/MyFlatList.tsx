import {View, Pressable, StyleSheet, FlatList, Text} from 'react-native';
import axios from 'axios';
import {QueryClient, useMutation, useQuery} from 'react-query';
type Item = {
  id: string;
  hero_name: string;
  hero_power: string;
  image: string;
};
interface navigate {
  navigation: any;
}
const queryClient = new QueryClient();
const MyFlatList: React.FC<navigate> = ({navigation}) => {
  const fetchData = () => {
    return axios.get('https://6453582ce9ac46cedf22c25e.mockapi.io/heros');
  };

  const deleteData = (id: string) => {
    return axios.delete(
      `https://6453582ce9ac46cedf22c25e.mockapi.io/heros/${id}`,
    );
  };

  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries('heros');
    },
  });

  const {data, isError, error} = useQuery('heros', fetchData);
  const result: Item[] = data?.data;

  const Card = ({item}: {item: Item}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('DetailScreen', {item: item});
        }}>
        <View style={styles.card}>
          <View
            style={{
              marginLeft: 15,
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              {item.hero_name}
            </Text>
            <Text
              style={{
                fontSize: 13,
              }}>
              {item.hero_power}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              deleteMutation.mutate(item.id);
              
            }}>
            <View style={styles.delete}>
              <Text style={{color: 'white'}}>Delete</Text>
            </View>
          </Pressable>
        </View>
      </Pressable>
    );
  };
  return isError ? (
    <View style={styles.errorMessage}>
      <Text style={{color: 'red', fontSize: 20}}>{`Error 404\n${error}`}</Text>
    </View>
  ) : (
    <FlatList<Item>
      scrollEnabled
      data={result}
      renderItem={Card}
      keyExtractor={item => item.id}
    />
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
  },
  delete: {
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 15,
  },
});
export default MyFlatList;
