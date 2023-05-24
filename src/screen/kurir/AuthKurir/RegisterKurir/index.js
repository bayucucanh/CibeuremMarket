import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  CustomButton,
  Headers,
  InputText,
  LoadingScreen,
} from '../../../../components';
import style from './style';
import {Formik} from 'formik';
import {COLORS, loginValidationSchema} from '../../../../constant';

import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {showMessage} from 'react-native-flash-message';

const RegisterKurir = ({navigation}) => {
  const [photoSim, setPhotoSim] = useState(null);
  const [photoSimDB, setPhotoSimDB] = useState(null);
  const [photoStnk, setPhotoStnk] = useState();

  const getImageSim = async values => {
    await launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'fotonya mana?',
            type: 'warning',
            backgroundColor: COLORS.primaryCream1,
            color: COLORS.black,
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setPhotoSim(source);
          values.foto_sim = source;
          setPhotoSimDB(response.assets[0]);
        }
      },
    );
  };
  // ==========================================>
  const onSubmit = async values => {
    try {
      const formdata = new FormData();
      formdata.append('nama_kurir', values.nama_kurir);
      formdata.append('nomor_hp', values.nomor_hp);
      formdata.append('password', values.password);
      formdata.append('nomor_ktp', values.nomor_ktp);
      formdata.append('jenis_kelamin', values.jenis_kelamin);
      formdata.append('plat_motor', values.plat_motor);
      formdata.append('foto_sim', {
        uri: photoSimDB.uri,
        type: photoSimDB.type,
        name: photoSimDB.fileName,
      });

      const res = await fetch(
        'https://2fba-36-74-43-37.ngrok.io/api/v1/kurir/register',
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
      if (res.status >= 200 || 201) {
        showMessage({
          message: 'Berhasil Terbitkan Produk',
          type: 'success',
          backgroundColor: COLORS.lightGray,
          color: COLORS.alertSuccess,
        });
        // resetForm({});
        setPhotoSim(null);
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      showMessage({
        message: 'Gagal Terbitkan foto',
        type: 'warning',
        backgroundColor: COLORS.lightGray,
        color: COLORS.alertDanger,
      });
    } finally {
      console.log('error');
    }
  };
  // ==========================================>
  const getImageStnk = () => {
    launchImageLibrary({}, response => {
      console.log('response:', response);
      const source = {uri: response.assets[0].uri};
      setPhotoStnk(source);
    });
  };
  return (
    <>
      <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <Headers title="Buat Akun" />
        <Formik
          alidationSchema={loginValidationSchema}
          initialValues={{
            nama_kurir: '',
            nomor_hp: '',
            password: '',
            nomor_ktp: '',
            jenis_kelamin: '',
            plat_motor: '',
            foto_sim: '',
          }}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
          }) => (
            <>
              <View style={{marginTop: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginBottom: 30,
                  }}>
                  <TouchableOpacity
                    onPress={getImageSim}
                    style={{
                      borderWidth: 3,
                      borderColor: COLORS.primaryColor,
                      borderRadius: 14,
                      width: 108,
                      height: 108,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={photoSim} style={style.userPhoto} />
                    <Icon
                      name="id-card"
                      size={54}
                      color={COLORS.primaryColor}
                    />
                    <Text style={style.text}>Tambah Foto SIM</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={getImageStnk}
                    style={{
                      borderWidth: 3,
                      borderColor: COLORS.primaryColor,
                      borderRadius: 14,
                      width: 108,
                      height: 108,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 20,
                    }}>
                    <Image source={photoStnk} style={style.userPhoto} />
                    <Icon
                      name="id-card"
                      size={54}
                      color={COLORS.primaryColor}
                    />
                    <Text style={style.text}>Tambah Foto STNK</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <InputText
                    name="nama_kurir"
                    placeholder="Nama Lengkap"
                    onChangeText={handleChange('nama_kurir')}
                    onBlur={handleBlur('nama_kurir')}
                    value={values.nama_kurir}
                    error={touched.nama_kurir && errors.nama_kurir}
                    keyboardType="email-address"
                  />
                  {touched.nama_kurir && errors.nama_kurir && (
                    <Text>Error</Text>
                  )}
                  <View style={{marginTop: 20}}>
                    <InputText
                      name="nomor_hp"
                      placeholder="Nomor HP"
                      onChangeText={handleChange('nomor_hp')}
                      onBlur={handleBlur('nomor_hp')}
                      value={values.nomor_hp}
                      error={touched.nomor_hp && errors.nomor_hp}
                      keyboardType="email-address"
                    />
                    {touched.nomor_hp && errors.nomor_hp && <Text>Error</Text>}
                  </View>
                  <View style={{marginTop: 20}}>
                    <InputText
                      secureTextEntry
                      name="password"
                      placeholder="Kata Sandi"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      error={touched.password && errors.password}
                      keyboardType="email-address"
                    />
                    {touched.password && errors.password && <Text>Error</Text>}
                  </View>
                  <View style={{marginTop: 20}}>
                    <InputText
                      name="nomor_ktp"
                      placeholder="Nomor KTP"
                      onChangeText={handleChange('nomor_ktp')}
                      onBlur={handleBlur('nomor_ktp')}
                      value={values.nomor_ktp}
                      error={touched.nomor_ktp && errors.nomor_ktp}
                      keyboardType="email-address"
                    />
                    {touched.nomor_ktp && errors.nomor_ktp && (
                      <Text>Error</Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <InputText
                      name="jenis_kelamin"
                      placeholder="Jenis Kelamin"
                      // style={{ marginTop: 20 }}
                      onChangeText={handleChange('jenis_kelamin')}
                      onBlur={handleBlur('jenis_kelamin')}
                      value={values.jenis_kelamin}
                      error={touched.jenis_kelamin && errors.jenis_kelamin}
                      keyboardType="email-address"
                    />
                    {touched.jenis_kelamin && errors.jenis_kelamin && (
                      <Text>Error</Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <InputText
                      name="plat_motor"
                      placeholder="D 1900 ABB"
                      onChangeText={handleChange('plat_motor')}
                      onBlur={handleBlur('plat_motor')}
                      value={values.plat_motor}
                      error={touched.plat_motor && errors.plat_motor}
                      keyboardType="email-address"
                    />
                    {touched.plat_motor && errors.plat_motor && (
                      <Text>Error</Text>
                    )}
                  </View>
                  <CustomButton
                    onPress={handleSubmit}
                    title="Daftar Akun"
                    enabled={true}
                    buttonStyle={{marginTop: 20}}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
      {/* {loading && <LoadingScreen />} */}
    </>
  );
};

export default RegisterKurir;
