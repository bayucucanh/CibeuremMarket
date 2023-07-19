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
import {CardOrder, CustomModal, LoadingScreen} from '../../../components';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';

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
    const res = await axios.patch(`${BASE_URL}/pengguna/transaksi/${id}`, {
      status_transaksi: 'disetujui',
    });
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
    console.log('id__', id);
    getTransaksiDetail();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // alert(JSON.stringify(position));
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
      <View style={styles.wrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.8399029455469496,
            longitude: 107.58471953955168,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}></MapView>
        <CustomModal
          visibleModal={true}
          content={
            <View>
              <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
                Informasi Pengiriman
              </Text>
              {data?.tb_pengirimans[0].length !== 0 ? (
                <View
                  style={[
                    style.card,
                    {backgroundColor: COLORS.white, flexDirection: 'row'},
                  ]}>
                  <Image
                    source={{
                      uri: 'https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=1200',
                    }}
                    style={{width: 50, height: 50}}
                  />
                  <View style={{marginLeft: 15}}>
                    <Text
                      style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
                      Suhendani
                    </Text>
                    <Text style={{...FONTS.bodySmallMedium}}>
                      No. Telp: 08621212131
                    </Text>
                  </View>
                </View>
              ) : (
                <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>
                  Pesanan ada kurir yang mengambil pesanan{' '}
                </Text>
              )}

              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  color: COLORS.black,
                  marginTop: 10,
                }}>
                Informasi Barang
              </Text>
              <CardOrder
                gambar={data?.tb_barang?.gambar_barang}
                namaBarang={data?.tb_barang?.nama_barang}
                jumlahBarang={data?.jumlahBarang}
                totalHarga={data?.total_harga}
              />

              <View
                style={{
                  backgroundColor: COLORS.white,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 14
                }}>
                <TouchableOpacity
                  disabled={
                    data?.status_transaksi !== 'dikirim' ||
                    data?.status_transaksi !== 'selesai'
                  }
                  onPress={() => patchDone()}
                  style={{
                    backgroundColor:
                      data?.status_transaksi === 'dikirim' ||
                      data?.status_transaksi !== 'selesai'
                        ? COLORS.lightGray
                        : COLORS.primaryColor,
                    width: '48%',
                    // alignSelf: 'flex-end',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 0,
                    borderRadius: 100,
                    // marginHorizontal: 14,
                    marginBottom: 14,
                  }}>
                  <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>
                    Batalkan
                  </Text>
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
                    width: '48%',
                    // alignSelf: 'flex-end',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 0,
                    borderRadius: 100,
                    // marginHorizontal: 14,
                    marginBottom: 14,
                  }}>
                  <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>
                    Selesai
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </View>

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

      {loading && <LoadingScreen />}
    </>
  );
};

export default DetailTransaksi;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buble: {
    // width: 200,
    // height: 100,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
});
