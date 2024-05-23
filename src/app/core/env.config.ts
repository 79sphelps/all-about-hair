// src/app/core/env.config.ts
const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
// const apiURI = _isDev ? 'http://localhost:8081/api/' : `/api/`;
const apiURI = "https://all-about-hair-backend.onrender.com/"

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};
