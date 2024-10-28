<<<<<<< HEAD
import axios, { AxiosRequestConfig } from "axios";
import { ErrorStatus } from "@/constants/error-status";
import {
  deleteAuthTokenFromInternalServer,
  getAuthTokenFromInternalServer,
} from "./api/internal-auth-api";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000, // nếu vượt quá timeout thì sẽ ngừng request (throw về error)
=======
import Cookies from "js-cookie";
import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4444",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000, // nếu vượt quá timeout thì sẽ ngừng request (throw về error)
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3
});

apiClient.interceptors.request.use(
  (config) => {
<<<<<<< HEAD
      const token = getAuthTokenFromInternalServer();
=======
    const token = Cookies.get("token");
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
<<<<<<< HEAD
    if (error.response && error.response.data) {
      const status = error.response.status;
      switch (status) {
        case ErrorStatus.BAD_REQUEST:
          throw new Error(error.response.data.message);
        case ErrorStatus.UNAUTHORIZED:
          deleteAuthTokenFromInternalServer();
          // window.location.href = "/login";
          throw new Error(error.response.data.message);
        case ErrorStatus.NOT_FOUND:
          window.location.href = "/not_found";
          break;
        case ErrorStatus.SERVER_ERROR:
          window.location.href = "/error";
          break;
      }
    }
    if (error.request) {
      console.log(error);
      console.log(error.request);
      throw new Error("Could not connect");
    }
=======
    // if (error.response.status === 404) {
    //   window.location.replace("/404");
    // }
    console.log(error);

    return Promise.reject(error);
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3
  },
);

export const get = <T>({
  url,
  params,
  config,
}: {
  url: string;
  params?: AxiosRequestConfig["params"];
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.get(url, { url, params, ...config });

<<<<<<< HEAD
export const post = <T>({
=======
export const post = ({
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3
  url,
  data,
  config,
}: {
  url: string;
<<<<<<< HEAD
  data?: unknown;
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.post(url, data, config);
=======
  data: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.post(url, data, config);
>>>>>>> 770cbee95062780d17344edad099c68177b6ace3

export const update = ({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.put(url, data, config);

export const remove = ({ url }: { url: string }) => apiClient.delete(url);
