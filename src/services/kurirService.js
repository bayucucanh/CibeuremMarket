import {Profiler} from 'react';
import {
  apiPost,
  apiGet,
  apiPut,
  apiDelete,
  apiPostMulti,
  apiPatch,
} from '../constant';
import {API_PASAR, URL_Fake} from '../constant';

export const listPesanan = data => {
  console.log(`${URL_Fake}`, data);
  return apiGet(`${URL_Fake}/orders`, data);
};
export const loginKurir = data => {
  console.log(`${API_PASAR}/login`, data);
  return apiPost(`${API_PASAR}/login`, data);
};

// export const kurir = () => {
//   console.log(`${API_PASAR}`);
//   return apiGet(`${API_PASAR}/update/${id_kurir}`);
// };
export const registerKurir = data => {
  // console.log(`${BASE_URL}/pengguna/register`, data);
  return apiPost(`${API_PASAR}/register`, data);
};
