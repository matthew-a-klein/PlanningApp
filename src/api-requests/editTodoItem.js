import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const editTodoItem = (itemName, itemId) => {
  return axios
    .put(`${backendServerAddress}/todolist/${itemId}/`, {
      name: itemName,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default editTodoItem;
