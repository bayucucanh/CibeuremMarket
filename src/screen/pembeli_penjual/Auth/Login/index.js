import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import style from './style';
import {Logo} from '../../../../assets';
import {Formik} from 'formik';
import {COLORS, loginValidationSchema} from '../../../../constant';
import {CustomButton, InputText} from '../../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const loginHandle = value => {
    console.log(value);
  };

  return (
    <View style={style.container}>
      <Image source={Logo} style={[style.logo, {alignSelf: 'center'}]} />

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
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
                name="email"
                placeholder="No Hp"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email && errors.email}
                keyboardType="email-address"
              />
              {touched.email && errors.email && <Text>Error</Text>}

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
                {touched.email && errors.email && <Text>Error</Text>}
              </View>

              <View style={{marginTop: 21}}>
                <CustomButton
                  onPress={handleSubmit}
                  title="Login"
                  // enabled={isValid && !errors.email && !errors.password && dirty}
                  enabled={true}
                  buttonStyle={{marginTop: 10}}
                  // isLoading={isLoading}
                />
              </View>

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
                      style={{color: COLORS.secondaryColor, fontWeight: '700'}}>
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
                      style={{color: COLORS.secondaryColor, fontWeight: '700'}}>
                      Kurir
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
