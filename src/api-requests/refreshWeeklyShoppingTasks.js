import axios from 'axios';
import {backendServerAddress} from '../backendconfig';

const refreshWeeklyShoppingTasks = () => {
  return axios
    .post(`${backendServerAddress}/cleaninglist/refresh_weekly_tasks/`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export default refreshWeeklyShoppingTasks;
