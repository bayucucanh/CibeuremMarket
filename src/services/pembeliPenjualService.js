import { apiPost, apiGet, apiPut, apiDelete } from "../constant";
import { BASE_URL } from "../constant";

export const loginPengguna = data => {
  console.log(`${BASE_URL}/pengguna/login`, data);
  return apiPost(`${BASE_URL}/pengguna/login`, data);
}

export const registerPengguna = data => {
  // console.log(`${BASE_URL}/pengguna/register`, data);
  return apiPost(`${BASE_URL}/pengguna/register`, data);
}