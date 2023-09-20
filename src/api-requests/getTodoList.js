import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const getTodoList = () => {
  return axios
    .get(`${backendServerAddress}/todolist/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export default getTodoList;
