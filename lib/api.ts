import axios from "axios";
import { Items, Item } from "types/items";
import querystring from "query-string";
import { getNextValues } from "lib/validations";

export const api = {
  GET_ITEMS: "/api/items?type=payment&type=expense",
  DELETE_ITEMS: "/api/items?",
  UPDATE_ITEMS: "/api/items?",
  CREATE_ITEM: "/api/items",
};

export const deleteItems = (id: string | string[]): Promise<Items> => {
  if (!id) return Promise.reject(new Error("No id was provided"));

  const query = querystring.stringify({ id });

  return axios.delete(api.DELETE_ITEMS + query);
};

export const updateItems = (
  id: string | string[],
  body: Partial<Item>
): Promise<Items> => {
  if (!id) return Promise.reject(new Error("No id was provided"));

  const query = querystring.stringify({ id });

  return axios.put(api.UPDATE_ITEMS + query, body);
};

export const createItem = (values: Item) => {
  if (!values) return Promise.reject(new Error("No id was provided"));

  return axios.post(api.CREATE_ITEM, getNextValues(values));
};
