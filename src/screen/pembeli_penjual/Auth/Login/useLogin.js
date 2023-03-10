import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {loginPengguna} from '../../../../services';

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
        setLoading(false)
        navigation.replace('MainApp');
      }
      setLoading(false)
    } catch (error) {
      alert('Login Gagal')
    }
    
    
  }

  return [loading, loginHandle];
};

export default useLogin;
