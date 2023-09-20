import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const createShoppingItem = (itemName) => {
  return axios
    .post(`${backendServerAddress}/shoppinglist/`, {
      name: itemName,
      bought: false,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default createShoppingItem;
