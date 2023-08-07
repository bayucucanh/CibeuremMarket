import {View, Text, FlatList} from 'react-native';
import React from 'react';
import style from './style';
import {Gap, HistoryDrive, ListButton, Separator} from '../../../components';
import {COLORS, FONTS, SIZES} from '../../../constant';
import uriRiwayat from './uriRiwayat';

const RiwayatPengiriman = ({navigation}) => {
  const [riwayat, setRiwayat] = uriRiwayat({navigation});
  return (
    <View style={style.container}>
      <View
        style={{
          marginTop: 27,
          alignItems: 'baseline',
        }}>
        <Text
          style={{
            ...FONTS.titleLargeBold,
            color: COLORS.primaryColor,
          }}>
          Riwayat Pengiriman
        </Text>
        <FlatList
          data={riwayat}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          style={{paddingTop: 20}}
          renderItem={({item}) => (
            <HistoryDrive
              uri={item.tb_transaksi.tb_pengguna.foto_pengguna}
              nama={item.tb_transaksi.tb_pengguna.nama_pengguna}
              jml_belanja={item.tb_transaksi.jumlah_belanjaan}
              toko={item.tb_transaksi.tb_toko.nama_toko}
              onPress={() =>
                navigation.navigate('DetailRiwayat', {
                  doneId: item.id_pengiriman,
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
};

export default RiwayatPengiriman;
