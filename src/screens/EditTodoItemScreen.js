import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';

import Button from '../components/Button';
import getTodoItem from '../api-requests/getTodoItem';
import deleteTodoItem from '../api-requests/deleteTodoItem';
import editTodoItem from '../api-requests/editTodoItem';

const EditTodoItemScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const [itemName, setItemName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItem(itemId);
    setLoading(false);
  }, []);

  const handleDelete = () => {
    deleteTodoItem(itemId);
    navigation.navigate('Todo');
  };

  const handleSubmit = () => {
    editTodoItem(itemName, itemId);
    navigation.navigate('Todo');
  };

  fetchItem = () => {
    getTodoItem(itemId).then(item => {
      setItemName(item.name);
    });
  };
  return loading ? (
    <></>
  ) : (
    <View className="h-full w-full bg-blue-300 dark:bg-slate-700 ">
      <TextInput
        value={itemName}
        onChangeText={text => setItemName(text)}
        className=" w-48 bg-white h-14 text-center text-black text-xl mx-auto mt-8 rounded-md border-2 border-blue-400 dark:border-blue-900"></TextInput>
      <Button title={'Delete'} onPressHandler={handleDelete}></Button>
      <Button title={'Confirm Changes'} onPressHandler={handleSubmit}></Button>
    </View>
  );
};

export default EditTodoItemScreen;
