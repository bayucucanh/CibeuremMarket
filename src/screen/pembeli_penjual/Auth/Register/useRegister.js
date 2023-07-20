import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {registerPengguna} from '../../../../services';
import axios from 'axios';
import { showDanger, showSuccess } from '../../../../constant';

const useRegister = ({navigation}) => {

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [valueOpen, setValueOpen] = useState(null);
  const [gender, setGender] = useState(null);
  const [items, setItems] = useState([
    {label: 'Laki-Laki', value: 'Laki-Laki'},
    {label: 'Perempuan', value: 'Perempuan'},
  ]);

  async function registerHandle(values) {
    console.log("values", values);
    console.log("gender", gender);
    const data = {
      nama_pengguna: values.nama,
      nomor_hp: values.noHp,
      password: values.password,
      nomor_ktp: values.noKtp,
      jenis_kelamin: gender
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

  return [registerHandle, loading, open, setOpen, valueOpen, setValueOpen, items, setItems, gender, setGender];
};

export default useRegister;
