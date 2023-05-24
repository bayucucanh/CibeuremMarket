import React, {useState} from 'react';
import {registerKurir} from '../../../../services';

const useRegisterKurir = ({navigation}) => {
  //   const [loading, setLoading] = useState(false);

  async function registerHandle(values) {
    const data = {
      nama_pengguna: values.nama,
      nomor_hp: values.noHp,
      password: values.password,
      nomor_ktp: values.noKtp,
      jenis_kelamin: values.jenisKelamin,
      plat_motor: values.plat_motor,
      //   foto_sim: values.foto_sim,
    };

    try {
      //   setLoading(true);
      const response = await registerKurir(data);
      console.log('ini res___', response.status);
      if ((response.status = 201)) {
        navigation.navigate('LoginScreen');
        setLoading(false);
      } else {
        alert('Register Gagal');
        setLoading(false);
      }
    } catch (error) {
      console.log('kesalahan');
      //   setLoading(false);
    }
  }

  //   return [registerHandle, loading];
  return [registerHandle];
};

export default useRegisterKurir;
