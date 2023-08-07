import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {registerPengguna} from '../../../../services';
import axios from 'axios';
import {showDanger, showSuccess} from '../../../../constant';

const useRegister = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  //   async function registerHandle(values) {

  //   };
  const onSubmit = async values => {
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append('nama_kurir', values.nama_kurir);
      formdata.append('nomor_hp', values.nomor_hp);
      formdata.append('password', values.password);
      formdata.append('nomor_ktp', values.nomor_ktp);
      formdata.append('jenis_kelamin', gender);
      formdata.append('plat_motor', values.plat_motor);
      formdata.append('foto_sim', {
        uri: photoSimDB.uri,
        type: photoSimDB.type,
        name: photoSimDB.fileName,
      });
      formdata.append('foto_stnk', {
        uri: photoStnkDB.uri,
        type: photoStnkDB.type,
        name: photoStnkDB.fileName,
      });

      const res = await fetch(
        'https://admin-pasar-server-bhczowagua-uc.a.run.app/api/v1/kurir/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formdata,
        },
      );
      console.log(values);
      const data = await res.json();
      console.log(data);
      console.log(res.status);
      console.log(formdata);
      if (res.status >= 200 && res.status <= 201) {
        // showMessage({
        //   message: 'Berhasil',
        //   type: 'success',
        //   backgroundColor: COLORS.lightGray,
        //   color: COLORS.alertSuccess,
        // });
        setLoading(false);
        showSuccess('Registrasi Berhasil');
        setPhotoSim(null);
        setPhotoStnk(null);
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      // showMessage({
      //   message: 'Gagal Register',
      //   type: 'warning',
      //   backgroundColor: COLORS.lightGray,
      //   color: COLORS.alertDanger,
      // });
      setLoading(false);
      showDanger('Registrasi Gagal');
    }
  };

  return [registerHandle, loading];
};

export default useRegister;
