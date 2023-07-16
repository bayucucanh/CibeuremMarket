import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Headers} from '../../../components';
import CardHistory from './CardHistory';
import {COLORS} from '../../../constant';

const DetailRiwayat = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
      }}>
      <Headers title="Detail Riwayat Pengiriman" />
      <View
        style={{
          width: 350,
          height: 250,
          borderRadius: 20,
          borderColor: 'red',
          borderWidth: 2,
          padding: 20,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          marginBottom: 18,
          marginLeft: 6,
        }}>
        <Image
          source={{
            uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/14/1452578967.jpg',
          }}
          style={{
            width: 130,
            height: 247,
            marginLeft: -20,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            marginTop: -21,
          }}
        />

        <View style={{marginHorizontal: 15}}>
          <Text style={styles.text}>Sayur Kol</Text>
          <Text style={styles.text}>10 Ikat</Text>
          <Text style={styles.text}>Rp 20,000.00</Text>
          <Text style={styles.text2}>Toko Sayur Menyair </Text>
          <Text style={styles.text2}>Blok B4 No 20</Text>
        </View>
      </View>
      <View
        style={{
          width: 350,
          height: 150,
          borderRadius: 20,
          borderColor: 'red',
          borderWidth: 2,
          padding: 20,
          backgroundColor: '#FFFFFF',
          marginBottom: 18,
          marginLeft: 6,
          justifyContent: 'center',
          alignContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.text}>Total Harga : Rp. 20,000.00</Text>
          <Text style={styles.text}>Pembayaran Menggunakan Saldo</Text>
          <Text style={styles.text2}>Pembeli : Zikri</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailRiwayat;

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 8,
  },
  text2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
});
