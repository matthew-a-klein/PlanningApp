import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const refreshMonthlyShoppingTasks = () => {
  return axios
    .post(`${backendServerAddress}/cleaninglist/refresh_monthly_tasks/`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export default refreshMonthlyShoppingTasks;
