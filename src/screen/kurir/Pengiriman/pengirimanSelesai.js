import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoDriver from '../../../assets/image/logoDriver.png';
import {COLORS, FONTS} from '../../../constant';

const PengirimanSelesai = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoDriver} />
      <Text style={styles.text1}>Barang Berhasil Terkirim</Text>
      <Text style={styles.text2}>
        Barang telah berhasil diantar terima kasih atas kerja kerasnya.
      </Text>
    </View>
  );
};

export default PengirimanSelesai;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 188,
    height: 71,
    alignSelf: 'center',
    marginTop: 20,
  },
  text1: {
    ...FONTS.titleNormalMedium,
    color: COLORS.black,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  text2: {
    ...FONTS.titleNormalBold,
    color: COLORS.black,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
});
