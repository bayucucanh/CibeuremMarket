import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {
  CustomButton,
  Gap,
  Headers,
  InputText,
  LoadingScreen,
} from '../../../../components';
import style from './style';
import {Formik} from 'formik';
import {COLORS, loginValidationSchema} from '../../../../constant';
import useRegister from './useRegister';
import DropDownPicker from 'react-native-dropdown-picker';

const RegisterUser = ({navigation}) => {
  const [registerHandle, loading, open, setOpen, valueOpen, setValueOpen, items, setItems, gender, setGender] = useRegister({navigation});

  return (
    <>
      <ScrollView style={style.container}>
        <Headers title="Buat Akun" />
        <Formik
          alidationSchema={loginValidationSchema}
          initialValues={{
            nama: '',
            noHp: '',
            password: '',
            noKtp: '',
            jenisKelamin: '',
          }}
          onSubmit={values => registerHandle(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
            touched,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={{marginTop: 20,}}>
                <InputText
                  name="nama"
                  placeholder="Nama Lengkap"
                  // style={styles.textInput}
                  onChangeText={handleChange('nama')}
                  onBlur={handleBlur('nama')}
                  value={values.nama}
                  error={touched.nama && errors.nama}
                  keyboardType="email-address"
                />
                {touched.noHp && errors.noHp && <Text>Error</Text>}
                {/* <Gap height={20}/> */}
                <View style={{marginTop: 20}}>
                  <InputText
                    name="No Hp"
                    placeholder="Nomor HP"
                    // style={{ marginTop: 20 }}
                    onChangeText={handleChange('noHp')}
                    onBlur={handleBlur('noHp')}
                    value={values.noHp}
                    error={touched.noHp && errors.noHp}
                    keyboardType="email-address"
                  />
                  {touched.noHp && errors.noHp && <Text>Error</Text>}
                </View>
                <View style={{marginTop: 20}}>
                  <InputText
                    secureTextEntry
                    name="password"
                    placeholder="Kata Sandi"
                    // style={{ marginTop: 20 }}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={touched.password && errors.password}
                    keyboardType="email-address"
                  />
                  {touched.noHp && errors.noHp && <Text>Error</Text>}
                </View>
                <View style={{marginTop: 20}}>
                  <InputText
                    name="noKtp"
                    placeholder="Nomor KTP"
                    // style={{ marginTop: 20 }}
                    onChangeText={handleChange('noKtp')}
                    onBlur={handleBlur('noKtp')}
                    value={values.noKtp}
                    error={touched.noKtp && errors.noKtp}
                    keyboardType="email-address"
                  />
                  {touched.noHp && errors.noHp && <Text>Error</Text>}
                </View>
                <View style={{marginTop: 20}}>
                  <DropDownPicker
                    style={{
                      height: 30,
                      fontSize: 14,
                      paddingLeft: 15,
                      paddingTop: 5,
                      borderRadius: 10,
                      marginBottom: 10,
                      borderColor: COLORS.neutral2,
                      borderWidth: 2,
                      // alignSelf: 'flex-end'
                    }}
                    open={open}
                    value={valueOpen}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValueOpen}
                    setItems={setItems}
                    listMode="SCROLLVIEW"
                    onChangeValue={value => setGender(value)}
                  />
                  {/* <InputText
                    name="jenisKelamin"
                    placeholder="Jenis Kelamin"
                    // style={{ marginTop: 20 }}
                    onChangeText={handleChange('jenisKelamin')}
                    onBlur={handleBlur('jenisKelamin')}
                    value={values.jenisKelamin}
                    error={touched.jenisKelamin && errors.jenisKelamin}
                    keyboardType="email-address"
                  /> */}
                  {touched.jenisKelamin && errors.jenisKelamin && (
                    <Text>Error</Text>
                  )}
                </View>
                {/* <View style={{ marginTop: 20 }}> */}
                <CustomButton
                  onPress={handleSubmit}
                  title="Buat Akun"
                  // enabled={isValid && !errors.email && !errors.password && dirty}
                  enabled={true}
                  buttonStyle={{marginTop: 50, backgroundColor: 'red'}}
                />
                {/* </View> */}
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
      {loading && <LoadingScreen />}
    </>
  );
};

export default RegisterUser;
