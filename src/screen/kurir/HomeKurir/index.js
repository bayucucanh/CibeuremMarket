import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
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
          fontSize: 22,
          fontWeight: '600',
          textAlign: 'left',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Permintaan Pengiriman yang Tersedia
      </Text>
      <FlatList
        data={pesanan}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + index.toString()}
        style={{marginHorizontal: 20}}
        renderItem={({item}) => (
          <CardKurir
            customerName={item.customerName}
            quantityStoreBuy={item.quantityStoreBuy}
            distance={item.distance}
            onPress={() => navigation.navigate('DetailPengiriman')}
          />
        )}
      />
    </View>
  );
};

export default HomeKurir;

const styles = StyleSheet.create({});
