import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'Multipart/form-data',
    Accept: 'Multipart/form-data; version=1',
  },
  withCredentials: true,
});

const setAuthorHeader = (token: string) => {
  if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const unsetAuthorHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};

const refreshToken = async () => {
  const token = await instance.post('/auth/token/refresh').then((res) => res.data);
  console.log(token);
  return token;
};

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setAuthorHeader(token as string);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const { response: res, config: reqData } = error || {};
    const { status } = res || {};
    const isExpiredToken = status === 401;

    if (isExpiredToken) {
      const token = await refreshToken();
      if (token?.access) {
        setAuthorHeader(token.access);
        localStorage.setItem('access_token', token.access);
        reqData.headers.Authorization = `Bearer ${token?.access}`;
        return instance(reqData);
      } else {
        unsetAuthorHeader();
        localStorage.removeItem('id');
        window.location.href = '/404';
      }
    }

    return Promise.reject(error);
  },
);

export { setAuthorHeader, unsetAuthorHeader };

export default instance;
