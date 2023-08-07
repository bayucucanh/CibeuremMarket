import {Profiler} from 'react';
import {
  apiPost,
  apiGet,
  apiPut,
  apiDelete,
  apiPostMulti,
  apiPatch,
} from '../constant';
import {API_PASAR, URL_Fake, BASE_URL} from '../constant';

export const listPesanan = () => {
  console.log(`${BASE_URL}/kurir/transaksi`);
  return apiGet(`${BASE_URL}/kurir/transaksi`);
};
export const loginKurir = data => {
  console.log(`${BASE_URL}/user/login`, data);
  return apiPost(`${BASE_URL}/user/login`, data);
};

export const kurir = () => {
  // console.log(`${BASE_URL}/kurir/me`);
  return apiGet(`${BASE_URL}/kurir/me`);
};
// export const registerKurir = data => {
//   // console.log(`${BASE_URL}/pengguna/register`, data);
//   return apiPost(`${API_PASAR}/register`, data);
// };
export const detailPesanan = id => {
  return apiGet(`${BASE_URL}/kurir/transaksi/${id}`);
};

export const riwayatPengiriman = () => {
  return apiGet(`${BASE_URL}/kurir/pengiriman?status_pengiriman=selesai`);
};

export const riwayatPengirimanSelesai = id => {
  return apiGet(`${BASE_URL}/kurir/pengiriman/${id}`);
};

export const ambilPengiriman = () => {
  return apiPost(`${BASE_URL}/kurir/pengiriman/`);
};

export const detailPengiriman = id => {
  return apiGet(`${BASE_URL}/kurir/pengiriman/${id}`);
};
