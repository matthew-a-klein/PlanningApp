import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';
import HomePageOption from '../components/HomePageOption';
import getShoppingList from '../api-requests/getShoppingList';

const HomeScreen = ({navigation}) => {
  return (
    <View className="flex-1 items-center bg-blue-200 dark:bg-slate-800 ">
      <HomePageOption
        navigation={navigation}
        navigateTo={'Shopping'}
        colour="green">
        <Icon name="basket-shopping" color="#ffffff" size={80} />
      </HomePageOption>

      <HomePageOption navigation={navigation} navigateTo={'Todo'} colour="blue">
        <Icon name="clipboard-list" color="#ffffff" size={80} />
      </HomePageOption>

      <HomePageOption
        navigation={navigation}
        navigateTo={'Cleaning'}
        colour="green">
        <Icon name="broom" color="#ffffff" size={80} />
      </HomePageOption>

      <HomePageOption
        navigation={navigation}
        navigateTo={'Cats'}
        colour="purpls">
        <Icon name="cat" color="#ffffff" size={80} />
      </HomePageOption>

      <HomePageOption
        navigation={navigation}
        navigateTo={'Locations'}
        colour="pink">
        <Icon name="map-location-dot" color="#ffffff" size={80} />
      </HomePageOption>
    </View>
  );
};

export default HomeScreen;
