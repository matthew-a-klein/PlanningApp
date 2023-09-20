import {Pressable, Text} from 'react-native';
import toCapitalised from '../utils/toCapitalised';

const ListItem = ({pressHandler, longPressHandler, id, name, crossedOff}) => {
  return (
    <Pressable key={id} onLongPress={longPressHandler} onPress={pressHandler}>
      <Text
        className={`mt-4 w-3/4 text-xl  text-black dark:text-white ${
          crossedOff ? 'line-through' : ''
        }`}>
        {toCapitalised(name)}
      </Text>
    </Pressable>
  );
};

export default ListItem;
