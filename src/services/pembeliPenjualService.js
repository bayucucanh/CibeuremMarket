import { apiPost, apiGet, apiPut, apiDelete, apiPostMulti } from "../constant";
import { BASE_URL } from "../constant";

export const loginPengguna = data => {
  return apiPost(`${BASE_URL}/user/login`, data);
}

export const registerPengguna = data => {
  // console.log(`${BASE_URL}/pengguna/register`, data);
  return apiPost(`${BASE_URL}/pengguna/register`, data);
}

export const listProduct = () => {
  return apiGet(`${BASE_URL}/pengguna/barang`)
}

export const detailProduct = id => {
  return apiGet(`${BASE_URL}/pengguna/barang/${id}`)
}

export const pengguna = () => {
  return apiGet(`${BASE_URL}/pengguna/me`)
}

export const toko = () => {
  return apiGet(`${BASE_URL}/pengguna/toko`)
}

export const myProduct = () => {
  return apiGet(`${BASE_URL}/pengguna/barang/me`)
}

export const createToko = data => {
  // console.log(`${BASE_URL}/pengguna/toko`, data);
  return apiPost(`${BASE_URL}/pengguna/toko`, data);
}
