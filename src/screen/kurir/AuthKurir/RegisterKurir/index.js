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
import {
  COLORS,
  loginValidationSchema,
  registerValidationSchema,
} from '../../../../constant';

import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {showMessage} from 'react-native-flash-message';
import DropDownPicker from 'react-native-dropdown-picker';
import {showDanger, showSuccess} from '../../../../constant';

const RegisterKurir = ({navigation}) => {
  const [photoSim, setPhotoSim] = useState(null);
  const [photoSimDB, setPhotoSimDB] = useState(null);
  const [photoStnk, setPhotoStnk] = useState(null);
  const [photoStnkDB, setPhotoStnkDB] = useState(null);
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [items, setItems] = useState([
    {label: 'Laki - laki', value: 'laki-laki'},
    {label: 'Perempuan', value: 'perempuan'},
  ]);
  const [loading, setLoading] = useState(false);

  const handleJenisKelaminChange = value => {
    setGender(value);
    console.log(value);
  };

  const getImageSim = async values => {
    await launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Silahkan simpan foto SIM',
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

  const getImageStnk = async values => {
    await launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Silahkan simpan foto STNK',
            type: 'warning',
            backgroundColor: COLORS.primaryCream1,
            color: COLORS.black,
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setPhotoStnk(source);
          values.foto_stnk = source;
          setPhotoStnkDB(response.assets[0]);
        }
      },
    );
  };

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
        'https://pasar-bandung-api.cyclic.app/api/v1/kurir/register',
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

  return (
    <>
      <Headers title="Buat Akun" />
      <ScrollView
        style={style.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            nama_kurir: '',
            nomor_hp: '',
            password: '',
            nomor_ktp: '',
            jenis_kelamin: '',
            plat_motor: '',
            foto_sim: '',
            foto_stnk: '',
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
                    onPress={() => getImageSim(values)}
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
                    onPress={() => getImageStnk(values)}
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
                    <Text style={style.errorInput}>{errors.nama_kurir}</Text>
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
                    {touched.nomor_hp && errors.nomor_hp && (
                      <Text style={style.errorInput}>{errors.nomor_hp}</Text>
                    )}
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
                    {touched.password && errors.password && (
                      <Text style={style.errorInput}>{errors.password}</Text>
                    )}
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
                      <Text style={style.errorInput}>{errors.nomor_ktp}</Text>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <DropDownPicker
                      open={open}
                      value={gender}
                      items={items}
                      setOpen={setOpen}
                      setValue={setGender}
                      setItems={setItems}
                      listMode="SCROLLVIEW"
                      style={{
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: 'black',
                        justifyContent: 'space-between',
                        paddingHorizontal: 16,
                        flexDirection: 'row',
                      }}
                      placeholder="Jenis Kelamin"
                      dropDownContainerStyle={{borderColor: 'black'}}
                      dropDownStyle={{borderColor: 'black'}}
                      onChangeValue={value => handleJenisKelaminChange(value)}
                    />
                    {touched.jenis_kelamin && errors.jenis_kelamin && (
                      <Text style={style.errorInput}>
                        {errors.jenis_kelamin}
                      </Text>
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
                      <Text style={style.errorInput}>{errors.plat_motor}</Text>
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
      {loading && <LoadingScreen />}
    </>
  );
  return [loading];
};

export default RegisterKurir;
