import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShoppingScreen from './src/screens/ShoppingScreen';
import TodoScreen from './src/screens/TodoScreen';
import CleaningScreen from './src/screens/CleaningScreen';
import EditShoppingItemScreen from './src/screens/EditShoppingItemScreen';
import EditTodoItemScreen from './src/screens/EditTodoItemScreen';
import LocationsScreen from './src/screens/LocationsScreen';
import CatsScreen from './src/screens/CatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shopping"
          component={ShoppingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditShoppingItem"
          component={EditShoppingItemScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditTodoItem"
          component={EditTodoItemScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cleaning"
          component={CleaningScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Cats"
          component={CatsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Locations"
          component={LocationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
