import axios from "axios";
import store from "@/app/apps/store";
import { RootState } from "@/app/apps/store";

const api = axios.create({
  baseURL: "http://localhost:3000/",

});

api.interceptors.request.use(
  (config) => {
    const state = store.getState() as RootState;
    const accessToken = state?.users?.token;
console.log("Token in request:", accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;