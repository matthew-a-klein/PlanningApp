import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';

import Button from '../components/Button';
import getShoppingItem from '../api-requests/getShoppingItem';
import deleteShoppingItem from '../api-requests/deleteShoppingItem';
import editShoppingItem from '../api-requests/editShoppingItem';

const EditShoppingItemScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const [itemName, setItemName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItem(itemId);
    setLoading(false);
  }, []);

  const handleDelete = () => {
    deleteShoppingItem(itemId);
    navigation.navigate('Shopping');
  };

  const handleSubmit = () => {
    editShoppingItem(itemName, itemId);
    navigation.navigate('Shopping');
  };

  fetchItem = () => {
    getShoppingItem(itemId).then(item => {
      setItemName(item.name);
    });
  };
  return loading ? (
    <></>
  ) : (
    <View className="h-full bg-blue-200 dark:bg-slate-800">
      <TextInput
        value={itemName}
        onChangeText={text => setItemName(text)}
        className=" w-48 bg-white h-14 text-center text-black text-xl mx-auto mt-8 rounded-md"></TextInput>
      <Button title={'Delete'} onPressHandler={handleDelete}></Button>
      <Button title={'Confirm Changes'} onPressHandler={handleSubmit}></Button>
    </View>
  );
};

export default EditShoppingItemScreen;
