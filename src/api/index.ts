import axios from "axios";
import { IDataArguments } from "./types";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const api = {
  post: async (url: string, data: IDataArguments, params?: object) => {
    return await instance.post(url, data, params);
  },
  get: async (url: string, params = {}) => {
    return await instance.get(url, params)
  },
  patch: async (url: string, data: IDataArguments) => {
    return await instance.patch(url, data);
  }
}

export const {
  post,
  get,
  patch,
} = api;
