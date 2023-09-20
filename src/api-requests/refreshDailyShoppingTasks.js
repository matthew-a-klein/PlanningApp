import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const refreshDailyShoppingTasks = () => {
  return axios
    .post(`${backendServerAddress}/cleaninglist/refresh_daily_tasks/`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export default refreshDailyShoppingTasks;
