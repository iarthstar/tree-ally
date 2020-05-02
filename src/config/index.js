/**
 * @file index.js
 * @description Configuration for App
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 * @version 1.0
 */


const DEVELOPMENT = "development";
const LOCALHOST   = "localhost";
const STAGING     = "staging";
const PRODUCTION  = "production";
const REQRES      = "reqres";

const Environments = {
  [LOCALHOST]  : LOCALHOST,
  [DEVELOPMENT]: DEVELOPMENT,
  [STAGING]    : STAGING,
  [PRODUCTION] : PRODUCTION,
  [REQRES]     : REQRES,
};

const BASE_URL = {
  [LOCALHOST]  : "https://okrcentral.github.io",
  [DEVELOPMENT]: "",
  [STAGING]    : "",
  [PRODUCTION] : "",
  [REQRES]     : "https://reqres.in",
};

export const HOST = BASE_URL[Environments[process.env.REACT_APP_CURRENT_ENV] || Environments[LOCALHOST]];

// export const API = "/network_api";
export const API = "";
export const ORIGIN = "WEB";

export const SERVICES = {
  SAMPLE: "/sample-okrs",
  DELTA: ""
};

export const BACKEND_ENDPOINTS = {
  DB_JSON: "/db.json",
  DELTA: ""
};

export const DEFAULTS = {
  localhost: {}
};