import { API, HOST, ORIGIN, SERVICES, BACKEND_ENDPOINTS } from "./../config";
import { version } from "./../../package.json";

let defaultHeaders = {
  "Accept": "application/json, text/plain, */*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "X-UA-Source": ORIGIN,
  "X-UA-Version": version
};

const callAPI = (method, url, data, config = {}, headers = defaultHeaders) => {
  const options = {
    method,
    headers,
    body: JSON.stringify(data)
  };
  return fetch(HOST + API + SERVICES.SAMPLE + url, { ...options, ...config });
};

export const fetchOkrs = () => callAPI("GET", BACKEND_ENDPOINTS.DB_JSON);