import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Headers} from '../../../components';
import useHistory from './useHistory';
import style from './style';

const DetailRiwayat = ({navigation, route}) => {
  const [data, setdata] = useHistory({navigation, route});
  return (
    <View style={style.container}>
      <Headers title="Detail Riwayat Pengiriman" />
      <View style={style.cardBox}>
        <Image
          source={{
            uri: data?.tb_transaksi?.tb_barang?.gambar_barang,
          }}
          style={style.image}
        />

        <View style={{marginHorizontal: 15}}>
          <Text style={style.text3}>
            Barang: {data?.tb_transaksi?.nama_belanjaan}
          </Text>
          <Text style={style.text3}>
            Jumlah: {data?.tb_transaksi?.jumlah_belanjaan}
          </Text>
          <Text style={style.text3}>
            Harga: {data?.tb_transaksi?.tb_barang?.harga_barang}
          </Text>
          <Text style={style.text3}>
            {data?.tb_transaksi?.tb_toko?.nama_toko}
          </Text>
          <Text style={style.text3}>
            {data?.tb_transaksi?.tb_toko?.alamat_toko}
          </Text>
        </View>
      </View>
      <View style={style.cardBoxInfo}>
        <View style={{marginHorizontal: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.text}>Total Harga : </Text>
            <Text style={style.text3}>
              {data?.tb_transaksi?.tb_barang?.harga_barang}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.text}>Pembeli : </Text>
            <Text style={style.text3}>
              {data?.tb_transaksi?.tb_pengguna?.nama_pengguna}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DetailRiwayat;
