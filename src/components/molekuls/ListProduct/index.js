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
        <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
          {namaBarang}
        </Text>
        <Text>{jumlahPesanan}</Text>
        <Text>{TotalHarga}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
