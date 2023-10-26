import axios from "axios";
import { URL } from "../utils/constants";

const logoutAction = () => {};
const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: URL,
  headers,
});

let store;
export const injectStore = (_store) => {
  store = _store;
};

axiosInstance.interceptors.request.use((config) => {
  const updatedConfig = { ...config };

  const { token } = store.getState().auth;
  if (token) {
    updatedConfig.headers.Authorization = `Bearer ${token}`;
  }
  return updatedConfig;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(logoutAction());
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
