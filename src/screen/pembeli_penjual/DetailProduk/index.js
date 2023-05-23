import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import useDetailProduk from './useDetailProduk';
import style from './style';
import {COLORS, FONTS, SIZES} from '../../../constant';
import {userAvatar} from '../../../assets';
import DropDownPicker from 'react-native-dropdown-picker';
import {InputText, LoadingScreen} from '../../../components';
import Icon from 'react-native-vector-icons/Feather';

const DetailProduk = ({navigation, route}) => {
  const [loading, product, setProduct, buyProduct, qty, setQty] = useDetailProduk({navigation, route});

  return (
    <>
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <ScrollView
          contentContainerStyle={style.container}
          showsVerticalScrollIndicator>
          <Image
            source={{
              uri: product?.gambar_barang,
            }}
            style={{width: '100%', height: SIZES.height * 0.3}}
          />

          <View
            style={[
              style.card,
              {
                // height: SIZES.height * 0.08,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              },
            ]}>
            <View>
              <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
                {product?.nama_barang}
              </Text>
              <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
                Rp. {product?.harga_barang}
              </Text>
            </View>
          </View>

          <View
            style={[
              style.card,
              {
                // height: SIZES.height * 0.08,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              },
            ]}>
            <View>
              <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
                Deskripsi
              </Text>
              <Text style={{...FONTS.bodySmallMedium, color: COLORS.black}}>
                {product?.deskripsi_barang}
              </Text>
            </View>
          </View>

          <View
            style={[
              style.card,
              {
                // height: SIZES.height * 0.08,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              },
            ]}>
            <View>
              <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
                Informasi Produk
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{...FONTS.bodySmallMedium, color: COLORS.black}}>
                  Pemesanan Minimal
                </Text>
                <Text
                  style={{
                    ...FONTS.bodySmallMedium,
                    color: COLORS.black,
                    marginLeft: 5,
                  }}>
                  1 Kg
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{...FONTS.bodySmallMedium, color: COLORS.black}}>
                  Estimasi Pengiriman
                </Text>
                <Text
                  style={{
                    ...FONTS.bodySmallMedium,
                    color: COLORS.black,
                    marginLeft: 5,
                  }}>
                  5 Jam
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              style.card,
              {height: SIZES.height * 0.23, backgroundColor: COLORS.thirdColor},
            ]}>
            <Image source={userAvatar} />
            <View
              style={{
                width: '60%',
                height: '70%',
                paddingVertical: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
                {product?.tb_toko?.nama_toko}
              </Text>
              <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
              {product?.tb_toko?.alamat_toko}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primaryColor,
                  width: 120,
                  // alignSelf: 'flex-end',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: 0,
                  borderRadius: 100,
                  marginTop: 14,
                }}>
                <Text style={{color: 'white'}}>Lihat Toko</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <Text>DetailProduk</Text> */}
        </ScrollView>
        <View style={{backgroundColor: COLORS.white}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
              Jumlah Pesanan
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setQty(qty - 1)}>
                <Icon name="minus" size={20} />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.bodySmallMedium,
                  color: COLORS.black,
                  marginHorizontal: 10,
                }}>
                {qty}
              </Text>
              <TouchableOpacity onPress={() => setQty(qty + 1)}>
                <Icon name="plus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => buyProduct()}
            style={{
              backgroundColor: COLORS.primaryColor,
              width: '90%',
              // alignSelf: 'flex-end',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              left: 0,
              borderRadius: 100,
              marginHorizontal: 14,
              marginBottom: 14,
            }}>
            <Text style={{color: 'white'}}>Masukan Keranjang</Text>
          </TouchableOpacity>
        </View>
        {/* {
        loading && (
          <Loading
        )
      } */}
      </View>
      {loading && <LoadingScreen />}
    </>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({});
