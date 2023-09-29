import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const getShoppingList = () => {
  console.log(`${backendServerAddress}/shoppinglist/`);
  return axios
    .get(`${backendServerAddress}/shoppinglist/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default getShoppingList;
