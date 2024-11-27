import axios from 'axios';

// axios instance
const testAxiosInstance = axios.create({
  baseURL: 'https://gigantic-handsome-way.glitch.me/testResults',
  timeout: 5000,
});

// 요청 인터셉터
testAxiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `TEST_RESULTS\nmethod: ${config.method}\nbaseURL: ${config.baseURL}`
    );
    return config;
  },
  (error) => {
    console.log(`request error => ${error}`);
    return Promise.reject(error);
  }
);

export default testAxiosInstance;
