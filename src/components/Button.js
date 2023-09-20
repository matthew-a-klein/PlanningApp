import React from 'react';
import {Pressable, Text} from 'react-native';

const Button = ({title, onPressHandler, onLongPressHandler}) => {
  return (
    <Pressable
      className="py-3 px-6 mt-3 rounded-md bg-blue-400 dark:bg-black "
      onPress={onPressHandler}
      onLongPress={onLongPressHandler ? onLongPressHandler : () => {}}>
      <Text className=" text-blue-900 dark:text-white">{title}</Text>
    </Pressable>
  );
};

export default Button;
