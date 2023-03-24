import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Headers} from '../../../components';
import style from './style';
import {COLORS, FONTS, SIZES} from '../../../constant';
import {ScrollView} from 'react-native-gesture-handler';

const NotaPembelian = () => {
  return (
    <View style={[style.container, {flex: 1, paddingHorizontal: 15}]}>
      <ScrollView>
      <Headers title="Nota Pembelian" />
        <Text
          style={{
            ...FONTS.headingNormalMedium,
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
              uri: 'https://awsimages.detik.net.id/visual/2022/02/23/penjual-daging-sapi-di-pasar-kebayoran-lama-jakarta-rabu-2322022-cnbc-indonesiamuhammad-sabki-11.jpeg?w=650',
            }}
            style={{
              width: '50%',
              height: SIZES.height * 0.25,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Berat 3 Kg
            </Text>
            <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
              Daging Sapi
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Total Rp. 180.000.00
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalBold,
                color: COLORS.black,
                maxWidth: '50%',
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              Toko Jagal Abadi Blok C4 No 24
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
            Total Harga : Rp. 180.000.00
          </Text>
          <Text style={{...FONTS.bodyNormalMedium}}>
            Pembayaran Menggunakan Saldo
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Pembeli Bayu Cucan Herdian
          </Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 60,
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
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            width: '48%',
            height: 60,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.white}}>
            Lakukan Pengriman
          </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotaPembelian;

const styles = StyleSheet.create({});
