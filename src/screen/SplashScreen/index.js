import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import Swiper from 'react-native-swiper';
import {Logo} from '../../assets';
import { COLORS } from '../../constant';

var splashs = [
  require('../../assets/image/1.jpg'),
  require('../../assets/image/2.jpg'),
  require('../../assets/image/3.jpg'),
  require('../../assets/image/4.jpg'),
];

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 5000);
  }, []);

  return (
    <ImageBackground style={styles.container}>
      {/* <StatusBar backgroundColor={COLORS.W} /> */}
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        horizontal={true}
        bounces={true}
        autoplayTimeout={1.2}
        autoplay
        autoplayDirection={false}
        dotColor="transparent"
        activeDotColor="transparent">
        <Image source={splashs[0]} style={styles.sliderImage} />
        <Image source={splashs[1]} style={styles.sliderImage} />
        <Image source={splashs[2]} style={styles.sliderImage} />
        <Image source={splashs[3]} style={styles.sliderImage} />
      </Swiper>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryColor,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
});
