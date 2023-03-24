import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {loginPengguna} from '../../../../services';
import { showDanger, showSuccess } from '../../../../constant';

const useLogin = ({navigation}) => {

  const [loading, setLoading] = useState(false);

  async function loginHandle(values) {
    const data = {
      nomor_hp: values.nomor_hp,
      password: values.password
    }
    console.log(data);
    try {
      setLoading(true)
      const response = await loginPengguna(data);
      if (response.status === 200) {
        console.log(response);
        setLoading(false)
        showSuccess('Login Berhasil')
        navigation.replace('MainApp');
      } else {
        setLoading(false)
        showDanger('Login Gagal')
        navigation.replace('MainApp');
      }
    } catch (error) {
      // alert('Login Gagal')
      showDanger('Login Gagal')
    }
    
    
  }

  return [loading, loginHandle];
};

export default useLogin;
