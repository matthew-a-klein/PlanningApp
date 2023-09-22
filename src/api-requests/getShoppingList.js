import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const getShoppingList = () => {
  console.log(backendServerAddress);
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
