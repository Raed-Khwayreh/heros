import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {QueryClient, useMutation, useQuery} from 'react-query';
import HeroImage from './HeroImage';
import {fetchData, deleteData} from '../api/api';
type Item = {
  id: string;
  hero_name: string;
  hero_power: string;
  group: string;
};
interface navigate {
  navigation: any;
}
const queryClient = new QueryClient();
const List: React.FC<navigate> = ({navigation}) => {
  const {data, isError, error} = useQuery<Item[]>('hero', fetchData);

  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries('hero');
    },
  });

  const Card = ({item}: {item: Item}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('DetailScreen', {item: item});
        }}>
        <View style={styles.card}>
          <HeroImage image={item.hero_name}></HeroImage>
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
              navigation.navigate('EditScreen', {item: item});
            }}>
            <View style={[styles.delete, styles.btn]}>
              <Text style={{color: 'white'}}>Edit</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              deleteMutation.mutate(item.id);
            }}>
            <View style={[styles.edit, styles.btn]}>
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
    <ScrollView>
      {data?.map(el => {
        return <Card item={el} key={el.id}></Card>;
      })}
    </ScrollView>
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
    backgroundColor: '#1C68A5',
  },
  edit: {
    backgroundColor: 'red',
  },
  btn: {
    justifyContent: 'center',
    padding: 7,
    marginLeft: 5,
    borderRadius: 15,
  },
});
export default List;
