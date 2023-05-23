import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../../constant';
import CustomButton from '../CustomButton';

const ProductCard = ({
  onPress,
  nama_barang,
  deskripsi_barang,
  harga_barang,
  gambarBarang
}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 12,
        paddingBottom: 12,
        backgroundColor: 'white',
        elevation: 4,
        marginBottom: 10,
        maxWidth: SIZES.width * 0.43,
        borderWidth: 1,
        borderColor: COLORS.primaryColor,
        width: 192,
      }}
      onPress={onPress}>
      <Image
        style={{
          width: '100%',
          height: 113,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
        source={{
          uri: gambarBarang,
        }}
      />
      <View style={{marginHorizontal: 10}}>
        <Text
          style={[
            FONTS.bodyNormalBold,
            {color: '#1C1B1F', fontWeight: '400', marginTop: 9},
          ]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {nama_barang}
        </Text>
        <Text
          style={[
            FONTS.bodyNormalRegular,
            {color: '#49454F', fontWeight: '400'},
          ]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {deskripsi_barang}
        </Text>
        <Text
          style={[
            FONTS.bodyNormalRegular,
            {color: '#49454F', fontWeight: '400'},
          ]}>
          Rp. {harga_barang}
        </Text>
      </View>
      {/* <CustomButton
        onPress={() => alert('detail')}
        title="Detail barang"
        size="small"
        // enabled={isValid && !errors.email && !errors.password && dirty}
        enabled={true}
        buttonStyle={{marginTop: 10, marginHorizontal: 3}}
        // isLoading={isLoading}
      /> */}
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
