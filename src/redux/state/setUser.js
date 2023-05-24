import {showDanger, showSuccess} from '../../constant';
import {loginPengguna} from '../../services';
import Auth from '../../services/Auth';
import {LOGIN_FAILED, LOGIN_SUCCESS} from '../types';
import {setLoading} from './globalAction';

export const setUser = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failedLogin = () => ({
  type: LOGIN_FAILED,
});

export const loginUser = (nomor_hp, password, navigation) => async dispatch => {
  dispatch(setLoading(true));
  const data = {
    nomor_hp: nomor_hp,
    password: password,
  };
  try {
    const response = await loginPengguna(data);
    console.log(response.status);
    if (response.status === 200) {
      dispatch(setLoading(false));
      showSuccess('Login Berhasil');
      if (response?.data?.data?.user?.role === 'penjual&pembeli') {
        navigation.replace('MainApp');
        Auth.setAccount(response.data);
        Auth.setToken(response?.data?.data?.user?.token);
        dispatch(setUser(response?.data?.data));
      } else {
        // Dani isi navigasi nya disini
        alert('Kurir Main App');
      }
    } else {
      dispatch(setLoading(false));
      showDanger('Login Gagal');
    }
  } catch (error) {
    // alert('Login Gagal')
    showDanger('Login Gagal');
  }
};
