import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import style from './style';
import {Logo} from '../../../../assets';
import {Formik} from 'formik';
import {COLORS, loginValidationSchema} from '../../../../constant';
import {CustomButton, InputText, LoadingScreen} from '../../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import useLogin from './useLogin';
import { useSelector } from 'react-redux';

const Login = ({navigation}) => {
  const [loading, loginHandle] = useLogin({navigation});
  const isLoading = useSelector(state => state.global.isLoading);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading])

  return (
    <>
      <ScrollView contentContainerStyle={style.container}>
        <Image source={Logo} style={[style.logo, {alignSelf: 'center'}]} />

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{nomor_hp: '', password: ''}}
          onSubmit={values => loginHandle(values)}>
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
              <View style={{marginTop: 50}}>
                <InputText
                  name="nomor_hp"
                  placeholder="No Hp"
                  style={styles.textInput}
                  onChangeText={handleChange('nomor_hp')}
                  onBlur={handleBlur('nomor_hp')}
                  value={values.nomor_hp}
                  error={touched.nomor_hp && errors.nomor_hp}
                  keyboardType="numeric"
                />
                {touched.nomor_hp && errors.nomor_hp && <Text>Error</Text>}

                <View style={{marginTop: 21}}>
                  <InputText
                    secureTextEntry
                    name="password"
                    placeholder="Password"
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={touched.password && errors.password}
                    // keyboardType="email-address"
                  />
                  {touched.password && errors.password && <Text>Error</Text>}
                </View>

                <CustomButton
                  onPress={handleSubmit}
                  title="Masuk"
                  // enabled={isValid && !errors.email && !errors.password && dirty}
                  enabled={true}
                  buttonStyle={{marginTop: 20}}
                />

                <View style={{marginTop: 30}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '500',
                      lineHeight: 20,
                      color: COLORS.black,
                    }}>
                    Buat Akun Sebagai
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginTop: 27,
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('RegisterUser')}
                      style={{
                        borderWidth: 3,
                        borderColor: COLORS.primaryColor,
                        borderRadius: 20,
                        width: 105,
                        height: 98,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon
                        name="user-plus"
                        size={36}
                        color={COLORS.primaryColor}
                      />
                      <Text
                        style={{
                          color: COLORS.secondaryColor,
                          fontWeight: '700',
                        }}>
                        Pembeli/Penjual
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 3,
                        borderColor: COLORS.primaryColor,
                        borderRadius: 20,
                        width: 105,
                        height: 98,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 38,
                      }}>
                      <Icon
                        name="motorcycle"
                        size={36}
                        color={COLORS.primaryColor}
                      />
                      <Text
                        style={{
                          color: COLORS.secondaryColor,
                          fontWeight: '700',
                        }}>
                        Kurir
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
      {isLoading && <LoadingScreen />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
