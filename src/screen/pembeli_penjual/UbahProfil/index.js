import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './style';
import {CustomButton, Headers, InputText} from '../../../components';
import {COLORS, FONTS} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const UbahProfil = () => {
  return (
    <View style={style.container}>
      <Headers title="Ubah Akun" />

      <TouchableOpacity
        style={{
          width: 150,
          height: 150,
          borderWidth: 3,
          borderColor: COLORS.primaryColor,
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="file-picture-o" size={90} color={COLORS.primaryColor} />
        <Text
          style={{
            ...FONTS.bodyNormalBold,
            color: COLORS.primaryColor,
            marginTop: 8,
          }}>
          Tambah Foto Profil
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: 20}}>
        <InputText
          name="jenisKelamin"
          placeholder="Bayu Cucan"
          // style={{ marginTop: 20 }}
          // onChangeText={handleChange('jenisKelamin')}
          // onBlur={handleBlur('jenisKelamin')}
          // value={values.jenisKelamin}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <InputText
          name="jenisKelamin"
          placeholder="0895401053741"
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
          placeholder="9999102771288828"
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
          buttonStyle={{marginTop: 20}}
        />
      </View>
    </View>
  );
};

export default UbahProfil;
