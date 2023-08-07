import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import style from './style';
import {LogoHomeKurir} from '../../../assets';
import CardKurir from './cardKurir';
import uriHome from './uriHome';
const HomeKurir = ({navigation}) => {
  const [pesanan, setPesanan] = uriHome({navigation});
  return (
    <View style={style.container}>
      <View style={style.Wrapper}>
        <Image
          source={LogoHomeKurir}
          style={[style.logo, {alignSelf: 'center'}]}
        />
        <Text style={style.textHighLight}>Selamat Datang, Fahdy</Text>
        <View style={{width: 320, height: 80}}>
          {/* <Text style={style.text}>
            Kamu sudah mengirimkan 2 pesanan hari ini.
          </Text> */}
          <Text style={style.text}>
            Segera ambil permintaan pengiriman selanjutnya :)
          </Text>
        </View>
      </View>
      <Text style={style.textJudul}>Permintaan Pengiriman yang Tersedia</Text>
      <FlatList
        data={pesanan}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + index.toString()}
        style={{marginHorizontal: 20}}
        renderItem={({item}) => (
          <CardKurir
            uri={item.tb_pengguna.foto_pengguna}
            nama={item.tb_pengguna.nama_pengguna}
            barang={item.nama_belanjaan}
            toko={item.tb_toko.nama_toko}
            onPress={() =>
              navigation.navigate('DetailPengiriman', {
                transaksiId: item.id_transaksi,
              })
            }
          />
        )}
      />
    </View>
  );
};
export default HomeKurir;
