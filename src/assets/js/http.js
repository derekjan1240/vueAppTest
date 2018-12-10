import axios from 'axios'

const http = axios.create()

// axios interceptors
http.interceptors.request.use(
  config => {
    console.log('config.url:',config.url);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = token;
    }else{

      if(config.url != 'http://127.0.0.1:3000/auth/signin' && config.url != 'http://127.0.0.1:3000/auth/signup'){
        console.log('No token! Redire login page');
        window.location = "/login"
      }
    }
    return config;
  },
  error => {
    console.log('Interceptors.request error!');
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('response:', response);
    return response;
  }, function (error) {
    // Do something with response error
    console.log('Interceptors.response error:', error);
    return Promise.reject(error);
  });


export default http