import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {CustomButton, Headers, InputText} from '../../../components';
import {COLORS, FONTS} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UbahAkunKurir = () => {
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
  return (
    <View style={style.container}>
      <Headers title="Ubah Akun Kurir" />

      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 30}}>
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
          <Icon name="id-card" size={54} color={COLORS.primaryColor} />
          <Text style={style.text}>Ubah Foto SIM</Text>
        </TouchableOpacity>
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
            marginLeft: 20,
          }}>
          <Image source={photoSim} style={style.userPhoto} />
          <Icon name="id-card" size={54} color={COLORS.primaryColor} />
          <Text style={style.text}>Ubah Foto STNK</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <InputText
          name="jenisKelamin"
          placeholder="Fahdy"
          // style={{ marginTop: 20 }}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <InputText
          name="jenisKelamin"
          placeholder="089321258994"
          styleOutlined={{marginTop: 20}}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <InputText
          name="jenisKelamin"
          placeholder="********"
          styleOutlined={{marginTop: 20}}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <InputText
          name="jenisKelamin"
          placeholder="999199577277"
          styleOutlined={{marginTop: 20}}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <InputText
          name="jenisKelamin"
          placeholder="Laki-laki"
          styleOutlined={{marginTop: 20}}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <CustomButton
          // onPress={handleSubmit}
          title="Ubah Akun"
          // enabled={isValid && !errors.email && !errors.password && dirty}
          enabled={true}
          buttonStyle={{marginTop: 30}}
        />
      </View>
    </View>
  );
};

export default UbahAkunKurir;
