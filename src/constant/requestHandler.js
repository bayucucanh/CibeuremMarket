import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '../services/Auth';

Axios.interceptors.request.use(
  async config => {
    const token = await Auth.getToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const apiGet = async (url, config = null) => {
  return Axios.get(url, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiPost = (url, data, config = null) => {
  return Axios.post(url, data, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiPostMulti = (url, data) => {
  return Axios.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiPut = (url, data, config = null) => {
  return Axios.put(url, data, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiPatch = (url, data, config = null) => {
  return Axios.patch(url, data, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiDelete = (url, config = null) => {
  return Axios.delete(url, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
