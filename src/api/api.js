import axios from 'axios';

// axios instance
const api = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

export default api;
