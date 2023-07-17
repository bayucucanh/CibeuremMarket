import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {detailTransaction} from '../../../services';
import {
  BASE_URL,
  COLORS,
  FONTS,
  SIZES,
  formatRupiah,
  showSuccess,
} from '../../../constant';
import axios from 'axios';
import style from './style';
import {formatDate} from '../../../constant/formatDate';
import { LoadingScreen } from '../../../components';
import Geolocation from 'react-native-geolocation-service';

const DetailTransaksi = ({route}) => {
  const {id} = route.params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTransaksiDetail = async () => {
    setLoading(true);
    const response = await detailTransaction(id);
    console.log('response___', response.data.data);
    setData(response?.data?.data?.transaksi);
    setLoading(false);
  };

  const patchDone = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id}`,
      {status_transaksi: 'diterima'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      // order();
    }
    console.log(res);
    setLoading(false);
  };

  const patchCanceled = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'selesai'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      // order();
    }
    console.log(res);
    setLoading(false);
  };

  useEffect(() => {
    console.log("id__", id);
    getTransaksiDetail();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        alert(JSON.stringify(position));
      },
      error => {
        // See error code charts below.
        alert(error.message),
          {
            timeout: 20000,
            maximumAge: 1000,
          };
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });


  return (
    <>
      {/* <ScrollView contentContainerStyle={[style.container, {flex: 1}]}>
        <Image
          source={{uri: data?.tb_barang?.gambar_barang}}
          style={{width: '100%', height: SIZES.height * 0.3}}
        />
        <View style={[style.card, {backgroundColor: COLORS.white}]}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
            {data?.tb_barang?.nama_barang}
          </Text>
          <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>
            Total harga : {formatRupiah(data?.harga_belanjaan)}
          </Text>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
            Tanggal Pemesanan
          </Text>
          <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>
            {formatDate(data?.tanggal_transaksi)}
          </Text>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
            Status Pemesanan
          </Text>
          <Text
            style={{
              ...FONTS.bodyNormalRegular,
              color: COLORS.black,
              textTransform: 'capitalize',
            }}>
            {data?.status_transaksi}
          </Text>
        </View>
      </ScrollView> */}
      {/* <View style={{backgroundColor: COLORS.white, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          disabled={
            data?.status_transaksi === 'dikirim' ||
            data?.status_transaksi === 'dikemas'
          }
          onPress={() => patchDone()}
          style={{
            backgroundColor:
              data?.status_transaksi === 'dikirim' ||
              data?.status_transaksi === 'dikemas'
                ? COLORS.lightGray
                : COLORS.primaryColor,
            width: '43%',
            // alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
            borderRadius: 100,
            marginHorizontal: 14,
            marginBottom: 14,
          }}>
          <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>Batalkan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            data?.status_transaksi === 'menunggu' ||
            data?.status_transaksi === 'dikemas'
          }
          onPress={() => patchDone()}
          style={{
            backgroundColor:
              data?.status_transaksi === 'menunggu' ||
              data?.status_transaksi === 'dikemas'
                ? COLORS.lightGray
                : COLORS.primaryColor,
            width: '43%',
            // alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
            borderRadius: 100,
            marginHorizontal: 14,
            marginBottom: 14,
          }}>
          <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>Selesai</Text>
        </TouchableOpacity>
      </View> */}
      {loading && (<LoadingScreen />)}
    </>
  );
};

export default DetailTransaksi;

const styles = StyleSheet.create({});
