import React, {useEffect, useState} from 'react';
import {TextInput, StyleSheet, View, Text, Pressable} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {QueryClient, useMutation} from 'react-query';
import {updateData} from '../api/api';
const queryClient = new QueryClient();

type RootStackParamList = {
  EditScreen: {
    item: {
      id: string;
      hero_name: string;
      hero_power: string;
      group: string;
    };
  };
};
type screenProp = {
  route: RouteProp<RootStackParamList, 'EditScreen'>;
  navigation: any;
};
const EditScreen: React.FC<screenProp> = ({navigation, route}) => {
  const updateMutation = useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries('hero');
    },
  });
  const item = route.params.item;

  const [heroName, setHeroName] = useState(item.hero_name);
  const [heroPower, setHeroPower] = useState(item.hero_power);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}>
      <TextInput
        placeholder="Task title"
        style={[styles.input]}
        onChangeText={text => {
          setHeroName(text);
        }}
        defaultValue={item.hero_name}
        cursorColor={'#f5b324'}></TextInput>
      <TextInput
        multiline={true}
        cursorColor={'#f5b324'}
        placeholder="Task descroption"
        style={[styles.input]}
        onChangeText={text => {
          setHeroPower(text);
        }}
        defaultValue={item.hero_power}></TextInput>
      <Pressable
        onPress={() => {
          const hero = {
            id: item.id,
            data: {
              id: Math.random(),
              hero_name: heroName,
              hero_power: heroPower,
              group: '',
            },
          };
          updateMutation.mutate(hero);
          navigation.goBack();
        }}>
        <View style={styles.btn}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Edit task
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    padding: 18,
    borderRadius: 15,
    backgroundColor: '#1C68A5',
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

export default EditScreen;
