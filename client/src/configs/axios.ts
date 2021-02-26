import { AxiosRequestConfig } from "axios";
import { cookie } from "../lib/cookies";
import env from "./env";
export const axiosConfigs:AxiosRequestConfig = {
  baseURL: env.ENDPOINT,
  headers: {
    'Authorization': 'Bearer ' + cookie.get('X-TOKEN'),
    'Content-Type': 'application/json'
  }
}