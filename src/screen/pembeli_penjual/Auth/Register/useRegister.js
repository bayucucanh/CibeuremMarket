import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {registerPengguna} from '../../../../services';
import axios from 'axios';
import { showDanger, showSuccess } from '../../../../constant';

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
      console.log(response);
      if (response.status === 201) {
      setLoading(false);
      showSuccess('Registrasi Berhasil')
      navigation.navigate('LoginScreen')
      } else {
        showDanger('Registrasi Gagal')
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
