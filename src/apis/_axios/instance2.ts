import axios from 'axios';

const instance2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; version=1',
  },
  withCredentials: true,
});

export default instance2;
