import React, {useEffect, useState, useCallback} from 'react';

import {View, TextInput} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import Button from '../components/Button';
import CustomModal from '../components/CustomModal';
import ListItem from '../components/ListItem';
import ExportToEmailForm from '../components/ExportToEmailForm';

import getShoppingList from '../api-requests/getShoppingList';
import createShoppingItem from '../api-requests/createShoppingItem';
import toggleBought from '../api-requests/toggleBought';
import exportShoppingList from '../api-requests/exportShoppingList';

const ShoppingScreen = ({navigation}) => {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [exportVisible, setExportVisible] = useState(false);

  useEffect(() => {
    updateShoppingList();
    setLoading(false);
  }, []);

  const updateShoppingList = () => {
    getShoppingList().then(list => setShoppingList(list));
  };

  useFocusEffect(
    useCallback(() => {
      updateShoppingList();
    }, []),
  );

  const handleSubmit = () => {
    createShoppingItem(newItem).then(() => {
      updateShoppingList();
    });

    setNewItem('');
  };

  const handleLongPress = itemId => {
    navigation.navigate('EditShoppingItem', {
      itemId: itemId,
    });
  };
  const handlePress = (itemId, itemBought) => {
    setClickCount(clickCount + 1);
    if (clickCount === 1) {
      toggleBought(itemId, itemBought).then(() => {
        updateShoppingList();
      });
    }
    setTimeout(() => {
      setClickCount(0);
    }, 600);
  };

  return loading ? (
    <View></View>
  ) : (
    <View
      className={`flex-1 items-center bg-blue-200 dark:bg-slate-800 ${
        exportVisible ? 'opacity-30' : ''
      }`}>
      <View className="h-8"></View>
      {shoppingList.map(listItem => {
        return (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            name={listItem.name}
            crossedOff={listItem.bought}
            pressHandler={() => {
              handlePress(listItem.id, listItem.bought);
            }}
            longPressHandler={() => {
              handleLongPress(listItem.id);
            }}
          />
        );
      })}
      <TextInput
        className={
          'mt-6 p-3 rounded-md bg-white text-black border-2 border-blue-400'
        }
        placeholderTextColor={'black'}
        value={newItem}
        placeholder="Type here to add something!"
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
          exportFunction={email => exportShoppingList(email)}
        />
      </CustomModal>
    </View>
  );
};

export default ShoppingScreen;
