import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const getCleaningItem = itemId => {
  return axios
    .get(`${backendServerAddress}/cleaninglist/${itemId}/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default getCleaningItem;
