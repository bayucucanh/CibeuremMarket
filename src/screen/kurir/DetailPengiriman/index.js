import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {CustomButton, Headers} from '../../../components';
import {BASE_URL, COLORS, showSuccess} from '../../../constant';
import {color} from 'react-native-reanimated';
import {useState} from 'react';
import useDetail from './useDetail';
import {ambilPengiriman, detailPesanan, kurir} from '../../../services';
import axios from 'axios';

const DetailPengiriman = ({navigation, route}) => {
  const {transaksiId} = route.params;
  const [idKirim, setIdKirim] = useState([]);
  const [pesanan, setPesanan, idKurir, setIdKurir] = useDetail({
    navigation,
    route,
  });

  const [status, setStatus] = useState('diambil');
  const [isClicked, setIsClicked] = useState(false);
  const handleStatusChange = async () => {
    try {
      // setLoading(true);

      if (status === 'diambil') {
        const data = {
          waktu_pengiriman: '01:00:00',
          status_pengiriman: 'diambil',
          id_transaksi: pesanan?.id_transaksi,
          id_kurir: idKurir,
        };

        const res = await axios.post(`${BASE_URL}/kurir/pengiriman`, data);
        console.log(res);
        console.log(res?.data);
        console.log(res?.data?.data?.pengiriman?.id_pengiriman);
        console.log(res?.status);
        setStatus('dikirim');
        setIdKirim(res?.data?.data?.pengiriman?.id_pengiriman);
        setIsClicked(true);
      }

      if (isClicked && status === 'dikirim') {
        const response = await axios.patch(
          `${BASE_URL}/kurir/pengiriman/${idKirim}`,
          {status_pengiriman: 'dikirim'},
        );
        console.log(response?.data);
        console.log(response?.data?.data?.pengiriman);
        console.log(response?.data?.data?.pengiriman?.id_pengiriman);
        console.log(response?.status);
        console.log(idKirim);

        navigation.navigate('Pengiriman', {
          idPengiriman: idKirim,
        });
      }

      // setLoading(false);
    } catch (error) {
      console.error(error);
      // setLoading(false);
    }
  };

  return (
    <>
      <Headers title="Detail Pengiriman" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <View>
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
                uri: pesanan?.tb_barang?.gambar_barang,
              }}
              style={{
                width: 130,
                height: 245,
                marginLeft: -22,
                paddingTop: -10,
                marginTop: -20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            />

            <View style={{marginHorizontal: 15}}>
              {/* <Text style={styles.text}>{pesanan?.id_transaksi}</Text> */}
              <Text style={styles.text}>
                {pesanan?.jumlah_belanjaan} {pesanan?.nama_belanjaan}
              </Text>
              <Text style={styles.text}>Rp {pesanan?.total_harga}</Text>
              <Text style={styles.text2}>{pesanan?.tb_toko?.nama_toko}</Text>
              <Text style={styles.text2}>{pesanan?.tb_toko?.alamat_toko}</Text>

              <CustomButton
                title="Denah Toko"
                size="small"
                enabled={true}
                buttonStyle={{
                  marginTop: 30,
                  paddingHorizontal: 20,
                  marginLeft: 25,
                }}
                textStyle={{marginHorizontal: 12}}
                onPress={() => navigation.navigate('DenahToko')}
              />
            </View>
          </View>
          {/* ===============================> */}
        </View>
        <View
          style={{
            width: 350,
            height: 100,
            borderRadius: 20,
            borderColor: 'red',
            borderWidth: 2,
            padding: 20,
            backgroundColor: '#FFFFFF',

            marginLeft: 6,
            justifyContent: 'center',
            alignContent: 'space-around',
            alignItems: 'flex-start',
          }}>
          <View style={{marginHorizontal: 2, flexDirection: 'row'}}>
            <View>
              <Image
                source={{
                  uri: pesanan?.tb_pengguna?.foto_pengguna,
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 20,
                  // marginLeft: -20,
                  // borderTopLeftRadius: 20,
                  // borderBottomLeftRadius: 20,
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.text2}>
                Total Harga : {pesanan?.total_harga}
              </Text>
              <Text style={styles.text2}>
                Pembeli : {pesanan?.tb_pengguna?.nama_pengguna}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleStatusChange}
          style={{marginHorizontal: 90}}>
          {/* {isClicked &&
            status === 'dikirim' &&
            navigation.navigate('Pengiriman')} */}
          <View style={styles.button}>
            <Text style={styles.textButton}>
              {/* {deliveryStatus?.status_pengiriman} */}
              {status}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default DetailPengiriman;

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
  button: {
    width: 180,
    height: 60,
    backgroundColor: '#8AAC00',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
});
