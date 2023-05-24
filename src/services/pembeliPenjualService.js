import {
  apiPost,
  apiGet,
  apiPut,
  apiDelete,
  apiPostMulti,
  apiPatch,
} from '../constant';
import {BASE_URL} from '../constant';

export const loginPengguna = data => {
  return apiPost(`${BASE_URL}/user/login`, data);
};

export const registerPengguna = data => {
  // console.log(`${BASE_URL}/pengguna/register`, data);
  return apiPost(`${BASE_URL}/pengguna/register`, data);
};

export const addCart = data => {
  // console.log(`${BASE_URL}/pengguna/register`, data);
  return apiPost(`${BASE_URL}/pengguna/belanjaan`, data);
};

export const listProduct = () => {
  return apiGet(`${BASE_URL}/pengguna/barang`);
};

export const listProductCart = () => {
  return apiGet(`${BASE_URL}/pengguna/belanjaan`);
};

export const buyProduct = data => {
  return apiPost(`${BASE_URL}/pengguna/transaksi`, data);
};

export const detailProduct = id => {
  return apiGet(`${BASE_URL}/pengguna/barang/${id}`);
};

export const pengguna = () => {
  return apiGet(`${BASE_URL}/pengguna/me`);
};

export const toko = () => {
  return apiGet(`${BASE_URL}/pengguna/toko`);
};

export const myProduct = () => {
  return apiGet(`${BASE_URL}/pengguna/barang/me`);
};

export const myTransaction = () => {
  return apiGet(`${BASE_URL}/pengguna/transaksi?role=pembeli`);
};

export const changeStatusTrans = (id, data) => {
  return apiPatch(`${BASE_URL}/pengguna/transaksi/${id}`, {data});
};

export const detailTransaction = id => {
  return apiGet(`${BASE_URL}/pengguna/transaksi/${id}`);
};

export const incomingsOrder = () => {
  return apiGet(`${BASE_URL}/pengguna/transaksi?role=penjual`);
};

export const createToko = data => {
  // console.log(`${BASE_URL}/pengguna/toko`, data);
  return apiPost(`${BASE_URL}/pengguna/toko`, data);
};

export const deleteProdukInCart = id_belanjaan => {
  return apiDelete(`${BASE_URL}/pengguna/belanjaan/${id_belanjaan}`);
};
