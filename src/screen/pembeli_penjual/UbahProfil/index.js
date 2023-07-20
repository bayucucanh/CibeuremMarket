import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {
  CustomButton,
  Headers,
  InputText,
  LoadingScreen,
  PhotoProfile,
} from '../../../components';
import {
  BASE_URL,
  COLORS,
  FONTS,
  showDanger,
  showSuccess,
} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {pengguna} from '../../../services';
import axios from 'axios';
import Auth from '../../../services/Auth';
import Geolocation from 'react-native-geolocation-service';

const UbahProfil = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState(null);
  const [nohp, setNohp] = useState(null);
  const [noktp, setNoktp] = useState(null);
  const [kelamin, setKelamin] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [fieldValue, setFieldValue] = useState(null);

  const getMe = async () => {
    const response = await pengguna();
    setProfile(response?.data?.data?.pengguna);
    setNama(response?.data?.data?.pengguna?.nama_pengguna);
    setNohp(response?.data?.data?.pengguna?.nomor_hp);
    setNoktp(response?.data?.data?.pengguna?.nomor_ktp);
    setKelamin(response?.data?.data?.pengguna?.jenis_kelamin);
    setFieldValue(response?.data?.data?.pengguna?.foto_pengguna)
    if (response?.data?.data?.pengguna?.alamat_pengguna !== null) {
      setAlamat("Tidak Ada alamat");
    } else {
      setAlamat(response?.data?.data?.pengguna?.alamat_pengguna);
    }
    // if (response?.data?.data?.pengguna?.latitude_pengguna !== null && response?.data?.data?.pengguna?.longitude_pengguna === null) {
    //   setLat(6.008812)
    //   setLong(6.112212)
    // } else {
    //   setLat(response?.data?.data?.pengguna?.latitude_pengguna)
    //   setLong(response?.data?.data?.pengguna?.longitude_pengguna)
    // }
    console.log('__res', response?.data);
  };

  const patchProfile = async () => {
    setLoading(true)
    // try {
      const formdata = new FormData();
      formdata.append('nama_pengguna', nama);
      formdata.append('nomor_hp', nohp);
      formdata.append('nomor_ktp', noktp);
      console.log("fieldValue", fieldValue !== profile?.foto_pengguna);
      if (fieldValue !== profile?.foto_pengguna) {
        formdata.append('foto_pengguna', {
          uri: fieldValue.uri,
          type: fieldValue.type,
          name: fieldValue.fileName,
        });
        console.log(formdata);
      }
      formdata.append('jenis_kelamin', kelamin);
      formdata.append('alamat_pengguna', alamat);
      formdata.append('latitude_pengguna', profile?.latitude_pengguna);
      formdata.append('longitude_pengguna', profile?.longitude_pengguna);
      const data = {
        nama_pengguna: nama,
        nomor_hp: nohp,
        nomor_ktp: noktp,
        foto_pengguna: {
          uri: fieldValue.uri,
          type: fieldValue.type,
          name: fieldValue.fileName,
        },
        jenis_kelamin: kelamin,
        alamat_pengguna: alamat,
        latitude_pengguna: profile?.latitude_pengguna,
        longitude_pengguna: profile?.longitude_pengguna
      }

   
      const token = await Auth.getToken();
      console.log(token);
      const res = await fetch(
        // 'https://2e5d-36-74-43-165.ngrok.io/api/v1/pengguna/toko',
        `${BASE_URL}/pengguna`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          },
          body: formdata,
        },
      );
      console.log('status', res.status);
      if (res.status === 200) {
        showSuccess('Profile Berhasil Diubah');
        setFieldValue(null);
        // navigation.navigate('MainApp');
      } else {
        showDanger('Profile Gagal Diubah');
      }
    // } catch (error) {
    //   // console.log('Gagal');
    //   showDanger('Profile Gagal Diubah');
    // }
    setLoading(false);
  };

  useEffect(() => {
    getMe();
    console.log('profile', profile);
  }, []);

   useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // alert(JSON.stringify(position));
        console.log(JSON.stringify(position));
        if (profile?.latitude_pengguna !== null && profile?.longitude_pengguna === null) {
          setLat(position.latitude)
          setLong(position.longitude)
        } else {
          setLat(profile.latitude_pengguna)
          setLong(profile.longitude_pengguna)
        }
      },
      error => {
        // See error code charts below.
        alert(error.message),
          {
            timeout: 20000,
            maximumAge: 1000,
          };
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <>
      <View style={style.container}>
        <Headers title="Ubah Akun" />

        <PhotoProfile
          name="image_url"
          image={{
            uri: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-file-icon-image_1128287.jpg',
          }}
          setFieldValue={setFieldValue}
          icon="camera"
          colorIcon={COLORS.primaryColor}
          // styleImage={{marginTop: 20}}
        />

        <View style={{marginTop: 20}}>
          <InputText
            placeholder="Masukan nama anda"
            // style={{ marginTop: 20 }}
            value={nama}
            onChangeText={val => setNama(val)}
            // error={touched.jenisKelamin && errors.jenisKelamin}
            keyboardType="email-address"
          />
          <InputText
            placeholder="Masukan nomor handphone anda"
            styleOutlined={{marginTop: 20}}
            value={nohp}
            onChangeText={val => setNohp(val)}
            keyboardType="email-address"
          />
          {/* <InputText
          name="jenisKelamin"
          placeholder="********"
          styleOutlined={{marginTop: 20}}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        /> */}
          <InputText
            placeholder="Masukan NIK anda"
            styleOutlined={{marginTop: 20}}
            onChangeText={val => setNoktp(val)}
            value={noktp}
          />
          <InputText
            placeholder={'Masukan alamat anda'}
            styleOutlined={{marginTop: 20}}
            onChangeText={val => setAlamat(val)}
            value={alamat}
          />
          <InputText
            name="jenisKelamin"
            placeholder="Masukan jenis kelamin anda"
            styleOutlined={{marginTop: 20}}
            onChangeText={val => setKelamin(val)}
            value={kelamin}
          />
          <CustomButton
            onPress={() => patchProfile()}
            title="Ubah Akun"
            enabled={true}
            buttonStyle={{marginTop: 20}}
          />
        </View>
      </View>
      {loading && <LoadingScreen />}
    </>
  );
};

export default UbahProfil;
