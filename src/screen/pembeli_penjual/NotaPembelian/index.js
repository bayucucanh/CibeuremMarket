import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Headers} from '../../../components';
import style from './style';
import {COLORS, FONTS, SIZES, showSuccess} from '../../../constant';
import {ScrollView} from 'react-native-gesture-handler';
import { buyProduct, deleteProdukInCart } from '../../../services';

const NotaPembelian = ({route, navigation}) => {
  const {product} = route.params;

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(product);
  }, [])

  const buyNow = async () => {
    setLoading(true);
    const data = {
      nama_belanjaan: product?.tb_barang?.nama_barang,
      jumlah_belanjaan: product?.jumlah_belanjaan,
      harga_belanjaan: product?.harga_belanjaan,
      total_harga: product?.harga_belanjaan,
      metode_pembayaran: "cod",
      status_transaksi: "pending",
      id_pengguna: product?.id_pengguna,
      id_toko: product?.tb_barang?.tb_toko?.id_toko,
      id_belanjaan: product?.id_belanjaan
    }
    console.log('Push___', data);
    const response = await buyProduct(data);
    console.log(response);
    if (response.status === 201) {
      showSuccess(response?.data?.message)
      const hapus = await deleteProdukInCart(product?.id_belanjaan);
      console.log(hapus);
      navigation.replace('RiwayatTransaksi')
    }
  }
  
  return (
    <View style={[style.container, {flex: 1, paddingHorizontal: 15}]}>
      <ScrollView>
      <Headers title="Nota Pembelian" />
        <Text
          style={{
            ...FONTS.bodyLargeBold,
            color: COLORS.black,
            marginTop: 10,
          }}>
          Barang Belanjaan
        </Text>

        <View
          style={[
            style.card,
            {
              // height: SIZES.height * 0.08,
              backgroundColor: COLORS.white,
              // alignItems: 'center',
            },
          ]}>
          <Image
            source={{
              uri: product?.tb_barang?.gambar_barang              ,
            }}
            style={{
              width: '35%',
              height: SIZES.height * 0.25,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          <View style={{marginLeft: 15, marginTop: 5}}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Berat {product?.jumlah_belanjaan} {product?.tb_barang?.ukuran_barang}
            </Text>
            <Text style={{...FONTS.bodyLargeBold, color: COLORS.black, maxWidth: '90%',}} numberOfLines={2}
              ellipsizeMode="tail">
              {product?.tb_barang?.nama_barang}
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              {product?.harga_belanjaan}
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalBold,
                color: COLORS.black,
                maxWidth: '50%',
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              {product?.tb_barang?.tb_toko?.nama_toko}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  color: COLORS.primaryColor,
                  marginTop: 30,
                  textAlign: 'center',
                }}>
                Detail...
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[style.card, {backgroundColor: COLORS.white, padding: 20,}]}>
          <Text style={{...FONTS.bodyLargeMedium, color: COLORS.black}}>
            Total Harga : Rp. {product?.harga_belanjaan}
          </Text>
          <Text style={{...FONTS.bodyNormalMedium}}>
            Pembayaran COD (Dibayar ditempat)
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Pembeli Bayu Cucan Herdian
          </Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        {/* <TouchableOpacity
          style={{
            width: '48%',
            height: 40,
            backgroundColor: COLORS.white,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: COLORS.primaryColor
          }}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.primaryColor}}>
            Ambil Sendiri
          </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
          onPress={() => buyNow()}
          style={{
            width: '100%',
            height: 40,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.white}}>
            Pesan Sekarang
          </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotaPembelian;

const styles = StyleSheet.create({});
