import axios from "axios";
import { URL } from "../utils/constants";
import { authActions } from "../store/auth/authSlice";

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

  const data = store.getState().auth;
  if (data.token) {
    updatedConfig.headers.Authorization = `Bearer ${data.token}`;
  }
  return updatedConfig;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(authActions.logout());
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
