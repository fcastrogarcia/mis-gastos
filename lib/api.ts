import axios from "axios";
import { Items } from "types/items";
import querystring from "query-string";

export const api = {
  GET_ITEMS: "/api/items?type=payment&type=expense",
  DELETE_ITEMS: "/api/items?",
};

export const deleteItems = (id: string | string[]): Promise<Items> => {
  if (!id) return Promise.reject(new Error("No id was provided"));

  const query = querystring.stringify({ id });

  return axios.delete(api.DELETE_ITEMS + query);
};
