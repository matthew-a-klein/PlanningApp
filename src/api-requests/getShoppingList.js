import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const getShoppingList = () => {
  return axios
    .get(`${backendServerAddress}/shoppinglist/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export default getShoppingList;
