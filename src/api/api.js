import axios from 'axios';

// axios instance
const api = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

// auth에서 헤더 보내주는 부분 -> 반복되는 토큰
// 후에 도전기능으로 refactor
// api.interceptors.request.use();

export default api;
