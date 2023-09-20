import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const createTodoItem = (itemName) => {
  return axios
    .post(`${backendServerAddress}/todolist/`, {
      name: itemName,
      completed: false,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default createTodoItem;
