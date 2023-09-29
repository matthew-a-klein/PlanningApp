import React, {useEffect, useState, useCallback} from 'react';

import {View, TextInput, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import StyledScrollView from '../components/StyledScrollVIew';
import Button from '../components/Button';
import getTodoList from '../api-requests/getTodoList';
import createTodoItem from '../api-requests/createTodoItem';
import toggleCompleted from '../api-requests/toggleCompleted';
import exportTodoList from '../api-requests/exportTodoList';
import CustomModal from '../components/CustomModal';
import ListItem from '../components/ListItem';
import ExportToEmailForm from '../components/ExportToEmailForm';

const TodoScreen = ({navigation}) => {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [exportVisible, setExportVisible] = useState(false);

  useEffect(() => {
    updateTodoList();
    setLoading(false);
  }, []);

  const updateTodoList = () => {
    getTodoList().then(list => setTodoList(list));
  };

  useFocusEffect(
    useCallback(() => {
      updateTodoList();
    }, []),
  );

  const handleSubmit = () => {
    createTodoItem(newItem).then(() => {
      updateTodoList();
    });

    setNewItem('');
  };

  const handleLongPress = itemId => {
    navigation.navigate('EditTodoItem', {
      itemId: itemId,
    });
  };
  const handlePress = (itemId, itemCompleted) => {
    setClickCount(clickCount + 1);
    if (clickCount === 1) {
      toggleCompleted(itemId, itemCompleted).then(() => {
        updateTodoList();
      });
    }
    setTimeout(() => {
      setClickCount(0);
    }, 600);
  };

  return loading ? (
    <View></View>
  ) : (
    <StyledScrollView
      contentContainerStyle={{alignItems: 'center'}}
      className={`flex-1 bg-blue-200 dark:bg-slate-800 ${
        exportVisible ? 'opacity-30' : ''
      }`}>
      <View className="h-8"></View>
      {todoList.map(listItem => {
        return (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            pressHandler={() => {
              handlePress(listItem.id, listItem.completed);
            }}
            longPressHandler={() => {
              handleLongPress(listItem.id);
            }}
            crossedOff={listItem.completed}
            name={listItem.name}
          />
        );
      })}
      <TextInput
        className={
          'mt-8 p-3 bg-white text-black rounded-md border-2 border-blue-400 dark:border-blue-800'
        }
        value={newItem}
        placeholder="Type here to add something!"
        placeholderTextColor={'black'}
        onChangeText={text => setNewItem(text)}></TextInput>
      <Button title="submit" onPressHandler={handleSubmit} />
      <Button
        title="export to email"
        onPressHandler={() => {
          setExportVisible(true);
        }}
      />
      {/* This modal will show when we want to export to email */}
      <CustomModal
        visible={exportVisible}
        onClose={() => setExportVisible(false)}>
        <ExportToEmailForm
          onClose={() => setExportVisible(false)}
          exportFunction={email => exportTodoList(email)}
        />
      </CustomModal>
    </StyledScrollView>
  );
};

export default TodoScreen;
