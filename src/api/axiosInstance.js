import axios from 'axios';
import { toast } from 'react-toastify';

// axios instance
const axiosInstance = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

// auth에서 헤더 보내주는 부분 -> 반복되는 토큰
// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`AUTH\nmethod: ${config.method}\nbaseURL: ${config.baseURL}`);
    return config;
  },
  (error) => {
    console.log(`request error => ${error}`);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 세션 만료는 401
    if (error.response?.status === 401) {
      toast.error('세션이 만료되었습니다. 다시 로그인해주세요');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
