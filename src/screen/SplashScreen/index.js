import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { Logo } from '../../assets'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, []);

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#ffffff" />
      <Image source={Logo} style={style.logo} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})