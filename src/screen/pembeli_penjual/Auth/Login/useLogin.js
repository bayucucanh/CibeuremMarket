import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {loginKurir, loginPengguna} from '../../../../services';
import {showDanger, showSuccess} from '../../../../constant';
import Auth from '../../../../services/Auth';
import {loginUser, setUser} from '../../../../redux/state/setUser';
import {useDispatch} from 'react-redux';

const useLogin = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  async function loginHandle(values) {
    dispatch(loginUser(values.nomor_hp, values.password, navigation));

    //   try {
    //     setLoading(true);
    //     const response = await loginKurir(data);
    //     console.log(response.status);
    //     if (response.status === 200 || 201) {
    //       console.log(response.status);
    //       console.log(response?.data);
    //       setLoading(false);
    //       showSuccess('Login Berhasil');

    //       if (response.data) {
    //         // navigation.replace('MainApp');
    //         Auth.setAccount(response.data);
    //         dispatch(setUser(response.data));
    //       }
    //       // else {
    //       //
    //       //   alert('Kurir Main App');
    //       // }
    //     } else {
    //       setLoading(false);
    //       showDanger('Login Gagal');
    //       // navigation.replace('MainApp');
    //     }
    //   } catch (error) {
    //     // alert('Login Gagal')
    //     // showDanger('Login tidak berhasil');
    //   }
    // }

    // try {
    //   setLoading(true);
    //   const response = await loginKurir(data);
    //   // console.log(response.status);
    //   if (response.status === 200 || 201) {
    //     setLoading(false);
    //     showSuccess('Login Berhasil');
    //     console.log(response);
    //     if (response.data) {
    //       // navigation.replace('MainApp');
    //       Auth.setAccount(response.data);
    //       dispatch(setUser(response.data));
    //     }
    //     // else {
    //     //   // Dani isi navigasi nya disini
    //     //   alert('Kurir Main App');
    //     // }
    //   } else {
    //     setLoading(false);
    //     showDanger('Login Gagal');
    //     navigation.replace('MainApp');
    //   }
    // } catch (error) {
    //   alert('Login Gagal');
    //   showDanger('Login Gagal');
  }

  return [loading, loginHandle];
};

export default useLogin;
