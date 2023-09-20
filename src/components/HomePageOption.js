import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const HomePageOption = ({navigation, colour, children, navigateTo}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateTo);
      }}>
      <View
        className={` w-32 h-32 justify-center rounded-md bg-${colour}-700 dark:bg-${colour}-700`}>
        <View className="mx-auto">{children}</View>
      </View>
    </TouchableOpacity>
  );
};

export default HomePageOption;
