import axios from 'axios'

const http = axios.create()

// axios interceptors
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('token:', token);
      config.headers.authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export default http