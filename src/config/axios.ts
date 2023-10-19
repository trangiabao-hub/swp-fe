import axios from "axios";

// Add a request interceptor

const api = axios.create({
    baseURL: 'http://localhost:8080/'
  });

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization =  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdXN0b21lciIsImlhdCI6MTY5NzcyNzI2OSwiZXhwIjoxNjk3ODEzNjY5fQ.oa8frw8JhuTP8dsNYb6yeAp-_Oz-s2VTmd-bCthlfuA01yolARW_M2cPMqulfz2EedkhuKdt2SxrB9czuMNF9g';
    return config;
}, null);

export default api;