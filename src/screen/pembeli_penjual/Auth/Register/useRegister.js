import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {registerPengguna} from '../../../../services';
import axios from 'axios';

const useRegister = ({navigation}) => {

  const [loading, setLoading] = useState(false);

  async function registerHandle(values) {
    const data = {
      nama_pengguna: values.nama,
      nomor_hp: values.noHp,
      password: values.password,
      nomor_ktp: values.noKtp,
      jenis_kelamin: values.jenisKelamin
    }
    
    try {
      setLoading(true);
      const response = await registerPengguna(data);
      console.log('ini res___', response.status);
      if (response.status = 201) {
      navigation.navigate('LoginScreen')
      setLoading(false);
      } else {
        alert('Register Gagal');
        setLoading(false);
      }
    } catch (error) {
      console.log('Failed');
      setLoading(false);
    }
  };

  return [registerHandle, loading];
};

export default useRegister;
