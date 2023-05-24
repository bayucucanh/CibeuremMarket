import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import style from './style';
import {LogoHomeKurir} from '../../../assets';
import CardKurir from './cardKurir';
const HomeKurir = () => {
  return (
    <View style={style.container}>
      <View style={style.Wrapper}>
        <Image
          source={LogoHomeKurir}
          style={[style.logo, {alignSelf: 'center'}]}
        />
        <Text style={style.textHighLight}>Selamat Datang, Fahdy</Text>
        <View style={{width: 320, height: 80}}>
          <Text style={style.text}>
            Kamu sudah mengirimkan 2 pesanan hari ini.
          </Text>
          <Text style={style.text}>
            Segera ambil permintaan pengiriman selanjutnya :)
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: '#000000',
          fontSize: 32,
          fontWeight: '600',
          textAlign: 'left',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Permintaan Pengiriman yang Tersedia
      </Text>
      <ScrollView
        style={{marginHorizontal: 25, marginTop: 10}}
        showsVerticalScrollIndicator={false}>
        <CardKurir tittle="Zikri" jmlToko={1} jarak={1} />
        <CardKurir tittle="Sidiq" jmlToko={2} jarak={2} />
        <CardKurir tittle="Farhan" jmlToko={4} jarak={3} />
        <CardKurir tittle="Jamil" jmlToko={2} jarak={4} />
        <CardKurir tittle="Lukman" jmlToko={9} jarak={5} />
      </ScrollView>
    </View>
  );
};

export default HomeKurir;

const styles = StyleSheet.create({});
