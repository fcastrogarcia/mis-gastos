import axios from "axios";

const endpoints = {
  GET_ITEMS: "/api/items?type=payment,expense",
};

export const getItems = () => {
  try {
    return axios(endpoints.GET_ITEMS);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
