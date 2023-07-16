import React, {useState} from 'react';
import {registerKurir} from '../../../../services';
import {showDanger, showSuccess} from '../../../../constant';

const useRegisterKurir = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function registerHandle(values) {
    const data = {
      nama_pengguna: values.nama,
      nomor_hp: values.noHp,
      password: values.password,
      nomor_ktp: values.noKtp,
      jenis_kelamin: values.jenisKelamin,
      plat_motor: values.plat_motor,
      foto_sim: values.foto_sim,
      foto_stnk: values.foto_stnk,
    };

    try {
      //   setLoading(true);
      const response = await registerKurir(data);
      console.log('ini res___', response.status);
      if ((response.status = 201)) {
        setLoading(false);
        showSuccess('Registrasi Berhasil');
        navigation.navigate('LoginScreen');
      } else {
        showDanger('Registrasi Gagal');
        setLoading(false);
      }
    } catch (error) {
      console.log('kesalahan');
      setLoading(false);
    }
  }

  //   return [registerHandle, loading];
  return [registerHandle, loading];
};

export default useRegisterKurir;
