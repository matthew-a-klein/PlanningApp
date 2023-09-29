import React, {useEffect, useState} from 'react';

import {View, Text} from 'react-native';
import Button from '../components/Button';
import StyledScrollView from '../components/StyledScrollVIew';
import getCleaningList from '../api-requests/getCleaningList';
import deleteCleaningItem from '../api-requests/deleteCleaningItem';

import ListItem from '../components/ListItem';
import refreshDailyShoppingTasks from '../api-requests/refreshDailyShoppingTasks';
import refreshWeeklyShoppingTasks from '../api-requests/refreshWeeklyShoppingTasks';
import refreshMonthlyShoppingTasks from '../api-requests/refreshMonthlyShoppingTasks';

const CleaningScreen = () => {
  const [cleaningList, setCleaningList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateCleaningList();
    setLoading(false);
  }, []);

  const updateCleaningList = () => {
    getCleaningList().then(list => setCleaningList(list));
  };

  const handleLongPress = itemId => {
    deleteCleaningItem(itemId);
    updateCleaningList();
  };

  const handleDailyRefresh = () => {
    refreshDailyShoppingTasks();
    updateCleaningList();
  };
  const handleWeeklyRefresh = () => {
    refreshWeeklyShoppingTasks();
    updateCleaningList();
  };
  const handleMonthlyRefresh = () => {
    refreshMonthlyShoppingTasks();
    updateCleaningList();
  };

  return loading ? (
    <View></View>
  ) : (
    <StyledScrollView
      contentContainerStyle={{alignItems: 'center'}}
      className="flex-1  bg-blue-200 dark:bg-slate-800">
      <Text className="text-3xl  underline mt-4 text-blue-300">
        Daily Tasks
      </Text>
      {cleaningList
        .filter(listItem => listItem.frequency === 'D')
        .map(listItem => {
          return (
            <ListItem
              key={listItem.id}
              id={listItem.id}
              pressHandler={() => {}}
              longPressHandler={() => {
                handleLongPress(listItem.id);
              }}
              crossedOff={listItem.completed}
              name={listItem.name}
            />
          );
        })}
      <Button title="Refresh" onLongPressHandler={handleDailyRefresh} />
      <Text className="text-3xl underline mt-4 text-blue-300">
        Weekly Tasks
      </Text>
      {cleaningList
        .filter(listItem => listItem.frequency === 'W')
        .map(listItem => {
          return (
            <ListItem
              key={listItem.id}
              id={listItem.id}
              pressHandler={() => {}}
              longPressHandler={() => {
                handleLongPress(listItem.id);
              }}
              crossedOff={listItem.completed}
              name={listItem.name}
            />
          );
        })}
      <Button title="Refresh" onLongPressHandler={handleWeeklyRefresh} />
      <Text className="text-3xl underline mt-4 text-blue-300">
        Monthly Tasks
      </Text>
      {cleaningList
        .filter(listItem => listItem.frequency === 'M')
        .map(listItem => {
          return (
            <ListItem
              key={listItem.id}
              id={listItem.id}
              pressHandler={() => {}}
              longPressHandler={() => {
                handleLongPress(listItem.id);
              }}
              crossedOff={listItem.completed}
              name={listItem.name}
            />
          );
        })}
      <Button title="Refresh" onLongPressHandler={handleMonthlyRefresh} />
    </StyledScrollView>
  );
};

export default CleaningScreen;
