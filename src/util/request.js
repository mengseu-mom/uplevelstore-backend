import { profileStore } from "../store/profileStore";
import config from "./config";
import axios from "axios";

export const request = (url = "", method = "", data = {}) => {
  let { access_token } = profileStore.getState();
  let headers = {
    "Content-Type": "application/json",
  };
  if (data instanceof FormData) {
    headers = {
      "Content-Type": "mulipart/form-data",
    };
  }
  return axios({
    url: config.base_url + url,
    method: method,
    data: data,

    headers: {
      ...headers,
      Accept: "application/json",
      Authorization: "Bearer " + access_token,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
