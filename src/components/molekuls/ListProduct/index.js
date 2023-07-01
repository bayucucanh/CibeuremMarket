import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../../constant';

const ListProduct = ({gambarBarang, namaBarang, jumlahPesanan, TotalHarga, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 2,
        borderColor: COLORS.primaryColor,
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
      }}>
      <Image
        source={{
          uri: gambarBarang,
        }}
        style={{width: 100, height: 100}}
      />
      <View style={{marginLeft: 20}}>
        <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
          {namaBarang}
        </Text>
        <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.black }}>Total Pesanan : {jumlahPesanan}</Text>
        <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.black }}>Jumlah Harga : Rp.{TotalHarga}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
