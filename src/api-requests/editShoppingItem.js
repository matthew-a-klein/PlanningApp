import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const editShoppingItem = (itemName, itemId) => {
  return axios
    .put(`${backendServerAddress}/shoppinglist/${itemId}/`, {
      name: itemName,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default editShoppingItem;
