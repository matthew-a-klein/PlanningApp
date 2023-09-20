import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const deleteCleaningItem = itemId => {
  axios
    .delete(`${backendServerAddress}/cleaninglist/${itemId}/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
export default deleteCleaningItem;
