import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const exportTodoList = emailAddress => {
  return axios
    .post(`${backendServerAddress}/todolist/export_to_email/`, {
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

export default exportTodoList;
