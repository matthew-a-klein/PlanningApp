import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const deleteTodoItem = (itemId) => {
  axios
    .delete(`${backendServerAddress}/todolist/${itemId}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export default deleteTodoItem;
