import axios from 'axios';

// axios instance
const axiosInstance = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

// auth에서 헤더 보내주는 부분 -> 반복되는 토큰
// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`AUTH\nmethod: ${config.method}\nbaseURL: ${config.baseURL}`);
    return config;
  },
  (error) => {
    console.log(`request error => ${error}`);
    return Promise.reject(error);
  }
);

export default axiosInstance;
