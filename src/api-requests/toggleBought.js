import axios from "axios";
import { backendServerAddress } from "../backendconfig";

const toggleBought = (itemId, itemBought) => {
  return axios
    .patch(`${backendServerAddress}/shoppinglist/${itemId}/`, {
      bought: itemBought ? false : true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default toggleBought;
