import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; version=1',
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
  try {
    const response = await instance.post('auth/token/refresh/');
    if (response.status === 204) {
      return { noRefreshNeeded: true };
    }
    return response.data;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
};

const requestWithoutInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json; version=1',
  },
  withCredentials: true,
});

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
      console.log(token);
      if (token?.access) {
        setAuthorHeader(token.access);
        localStorage.setItem('access_token', token.access);
        reqData.headers.Authorization = `Bearer ${token?.access}`;
        return requestWithoutInterceptor(reqData);
      } else if (token?.noRefreshNeeded) {
        return Promise.reject(error);
      } else {
        unsetAuthorHeader();
        localStorage.removeItem('pintalk_id');
        localStorage.removeItem('access_token');
        if (res?.data?.code === 'token_not_valid') {
          window.location.href = '/login';
        } else {
          window.location.href = '/404';
        }
      }
    }

    return Promise.reject(error);
  },
);

export { setAuthorHeader, unsetAuthorHeader };

export default instance;
