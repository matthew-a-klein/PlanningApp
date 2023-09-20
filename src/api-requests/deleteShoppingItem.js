import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const deleteShoppingItem = (itemId) => {
  axios
    .delete(`${backendServerAddress}/shoppinglist/${itemId}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export default deleteShoppingItem;
