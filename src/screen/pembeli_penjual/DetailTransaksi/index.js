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
import MapView, {
  Marker,
  Callout,
  PROVIDER_GOOGLE,
  Overlay,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon2 from 'react-native-vector-icons/AntDesign';

const DetailTransaksi = ({route}) => {
  const {id} = route.params;

  const origin = {latitude: -7.098560, longitude: 107.468391};
  const destination = {latitude: -7.025993, longitude: 107.517036};
  const GOOGLE_MAPS_API = 'AIzaSyAOSCS_We7u6ImZU9dhwvvTLnD01i2PTm8';

  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
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
      status_transaksi: 'selesai',
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

  return (
    <>
      {/* <View style={styles.wrapper}> */}
      <MapView
        style={[styles.map]}
        initialRegion={{
          latitude: -7.098560,
          longitude: 107.468391,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}>
        <MapViewDirections
          origin={origin}
          optimizeWaypoints={true}
          destination={destination}
          apikey={GOOGLE_MAPS_API}
          strokeWidth={3}
          strokeColor={COLORS.primaryColor}
          mode="DRIVING"
          precision="high"
        />
        
        <Marker
            coordinate={{
              latitude: -7.098560,
              longitude: 107.468391,
            }}>
              <View>
                <Image
                  source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vUvbMHnxrCpKKMoAwcVhguMYYIPQF6fzXUpYkCI&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vUvbMHnxrCpKKMoAwcVhguMYYIPQF6fzXUpYkCI&s" }}
                  style={{ width: "100%",
                    height: 31,
                    aspectRatio: 2 / 3, }}
                />
                {/* <FastImage
                  source={require('../assets/car.png')}
                  // source={{ uri: 'https://t4.ftcdn.net/jpg/03/32/56/67/360_F_332566713_q0QLBQ0BWkG5ed7DGRiuFIjvZNwEL9k2.jpg' }}
                  style={styles.car}
                /> */}
              </View>
          </Marker>

      </MapView>

      {/* <Callout style={{ position: 'absolute', bottom: 5 }} onPress={() => setVisible(!visible)}>
        
      </Callout> */}
      {/* <CustomModal 
        visibleModal={true}
        content={ */}

      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={{
          backgroundColor: COLORS.primaryColor,
          // alignSelf: 'flex-end',
          width: '90%',
          position: 'absolute',
          bottom: 5,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          left: 0,
          borderRadius: 100,
          marginHorizontal: 14,
          marginBottom: 14,
        }}>
        <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>
          Lihat Informasi Transaksi
        </Text>
      </TouchableOpacity>
      {/* }
      /> */}

      <CustomModal
        visibleModal={visible}
        content={
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // marginBottom: 20,
              }}>
              <Text
                style={{
                  ...FONTS.bodyLargeBold,
                  color: COLORS.primaryColor,
                }}>
                Informasi Pengiriman
              </Text>
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Icon2
                  name="closecircleo"
                  size={20}
                  color={COLORS.neutral3}
                  style={{alignSelf: 'center'}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
              Informasi Kurir
            </Text>
            {data?.tb_pengirimans.length !== 0 ? (
              <View
                style={[
                  style.card,
                  {backgroundColor: COLORS.white, flexDirection: 'row'},
                ]}>
                <Image
                  source={{
                    uri: data?.tb_pengirimans[0]?.tb_kurir?.foto_kurir,
                  }}
                  style={{width: 50, height: 50}}
                />
                <View style={{marginLeft: 15}}>
                  <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
                    {data?.tb_pengirimans[0]?.tb_kurir?.nama_kurir}
                  </Text>
                  <Text style={{...FONTS.bodySmallMedium}}>
                    No. Telp: {data?.tb_pengirimans[0]?.tb_kurir?.nomor_hp}
                  </Text>
                </View>
              </View>
            ) : (
              <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>
                Belum ada kurir yang mengambil pesanan{' '}
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
              jumlahBarang={data?.jumlah_belanjaan}
              totalHarga={data?.total_harga}
            />

            <View
              style={{
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 14,
              }}>
              <TouchableOpacity
                disabled={
                  data?.status_transaksi !== 'menunggu' ||
                  data?.status_transaksi !== 'selesai'
                }
                onPress={() => patchDone()}
                style={{
                  backgroundColor:
                    data?.status_transaksi === 'menunggu' ||
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
      {/* </View> */}

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
    // position: 'relative'
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
