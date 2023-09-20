import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const exportShoppingList = emailAddress => {
  return axios
    .post(`${backendServerAddress}/shoppinglist/export_to_email/`, {
      recipient: emailAddress,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default exportShoppingList;
