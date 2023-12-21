import axios from "axios";

export const httpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_SERVER,
  withCredentials: false,
});
