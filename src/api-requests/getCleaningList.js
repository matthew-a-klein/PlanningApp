import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const getCleaningList = () => {
  return axios
    .get(`${backendServerAddress}/cleaninglist/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default getCleaningList;
