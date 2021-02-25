import axios from 'axios';

import { store } from '~/store';

export const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : '/api';

const api = axios.create({
  baseURL,
});

// INTERCEPTOR FOR AUTH
api.interceptors.request.use(
  async (config) => {
    const { token } = store.getState().auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default api;
