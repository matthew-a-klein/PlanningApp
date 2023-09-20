import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const toggleCompleted = (itemId, itemCompleted) => {
  return axios
    .patch(`${backendServerAddress}/todolist/${itemId}/`, {
      completed: itemCompleted ? false : true,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default toggleCompleted;
