import axios from "axios";
import { useRouter } from "next/navigation";

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  }
});

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = sessionStorage.getItem('token');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function (error) {
  // Do something with request error
  console.log('Erro no interceptor do axios');
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const router = useRouter();

  router.push('/');

  return Promise.reject(error);
});

export default http;
