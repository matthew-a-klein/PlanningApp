import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const getTodoItem = itemId => {
  return axios
    .get(`${backendServerAddress}/todolist/${itemId}/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default getTodoItem;
