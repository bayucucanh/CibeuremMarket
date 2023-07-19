import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, formatRupiah } from '../../../constant'

const CardOrder = ({gambar, namaBarang, jumlahBarang, totalHarga}) => {
  return (
    <View
            style={{
              borderWidth: 2,
              borderColor: COLORS.primaryColor,
              padding: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={{
                // uri: transaksi?.tb_barang?.gambar_barang,
                uri: gambar
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
                {/* {transaksi?.nama_belanjaan} */}
                {namaBarang}
              </Text>
              <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>Jumlah Pesanan :{jumlahBarang}</Text>
              <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>Total Harga : {formatRupiah(totalHarga)}</Text>
            </View>
          </View>
  )
}

export default CardOrder

const styles = StyleSheet.create({})