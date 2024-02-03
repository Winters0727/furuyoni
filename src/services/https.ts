import axios from "axios";

export const https = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
