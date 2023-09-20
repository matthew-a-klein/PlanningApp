import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const getShoppingItem = (itemId) => {
  return axios
    .get(`${backendServerAddress}/shoppinglist/${itemId}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export default getShoppingItem;
