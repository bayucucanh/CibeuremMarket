import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Marker} from 'react-native-maps';
import {COLORS, BASE_URL, showSuccess} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import style from './style';
import PengirimanSelesai from './pengirimanSelesai';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {API_KEY} from '../../../constant/baseUrl';
import axios from 'axios';
import usePengiriman from './usePengiriman';

const Pengiriman = ({navigation, route}) => {
  const {idPengiriman} = route.params;
  const [pengiriman, setPengiriman] = usePengiriman({navigation, route});
  const [isSelesaiClicked, setIsSelesaiClicked] = useState(false);
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['37%', '70%'], []);

  //=============>
  const [state, setState] = useState({
    pickupCords: {
      latitude: -7.0986943,
      // pengiriman?.tb_transaksi?.tb_toko?.latitude_toko,

      longitude: 107.4678923,
      // pengiriman?.tb_transaksi?.tb_toko?.longitude_toko,

      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropCords: {
      latitude: -7.0975488,
      // pengiriman?.tb_transaksi?.tb_pengguna?.latitude_pengguna,
      // -7.0959358,
      longitude: 107.4661522,
      // pengiriman?.tb_transaksi?.tb_pengguna?.longitude_pengguna,
      // 107.4733964,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const mapRef = useRef();
  const {pickupCords, dropCords} = state;
  //=============>

  const handleSelesaiClick = async () => {
    const res = await axios.patch(
      `${BASE_URL}/kurir/pengiriman/${idPengiriman}`,
      {status_pengiriman: 'selesai'},
    );
    console.log(res);
    if (res.status === 200) {
      showSuccess('Barang Berhasil Dikirim');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        {isSelesaiClicked ? (
          <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
            <Icon name="arrow-left" size={26} color={COLORS.black} />
          </TouchableOpacity>
        ) : null}
        <Text style={style.textHeader}>Pengiriman</Text>
      </View>
      <GestureHandlerRootView style={{flex: 1}}>
        {isSelesaiClicked ? (
          <View style={{flex: 1}}>
            <PengirimanSelesai />
          </View>
        ) : (
          <MapView
            ref={mapRef}
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{height: 340}}
            initialRegion={pickupCords}

            // region={{
            //   latitude: -7.0988708,
            //   longitude: 107.4700574,
            //   latitudeDelta: 0.011,
            //   longitudeDelta: 0.0121,
            // }}
          >
            <Marker coordinate={pickupCords} />
            <Marker coordinate={dropCords} />
            <MapViewDirections
              origin={pickupCords}
              destination={dropCords}
              apikey={API_KEY}
              strokeWidth={4}
              strokeColor="red"
              optimizeWaypoints={true}
              onReady={result => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 200,
                    bottom: 20,
                    left: 200,
                    top: 20,
                  },
                });
              }}
            />
            {/* <Marker
              // key={index}
              coordinate={{latitude: -7.0986943, longitude: 107.4678923}}
              title={'Pasar Cibeureum'}
              description={'Pasar'}
            /> */}
          </MapView>
        )}
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
          enableContentPanningGesture={true}>
          <BottomSheetScrollView>
            <View>
              <View style={style.cardInfoBarang}>
                <Text style={style.textInfo}>Informasi Barang</Text>
                <View style={style.viewKonfir}>
                  <Icon name="motorcycle" size={60} color={COLORS.black} />
                  <Text style={style.konfirInfoBarang}>
                    {isSelesaiClicked
                      ? 'Barang Selesai Dikirim'
                      : 'Konfirmasi pesanan telah sampai selesai'}
                  </Text>
                </View>
                {!isSelesaiClicked && (
                  <View style={style.touchInfoBarang}>
                    <TouchableOpacity
                      onPress={() => {
                        setIsSelesaiClicked(true);
                        handleSelesaiClick();
                      }}
                      style={style.styleTouch}>
                      <Text style={{color: 'white'}}>Selesai</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={style.cardInfoPembeli}>
                <Text style={style.textInfo}>Informasi Pembeli</Text>
                <View style={style.viewInfPembeli}>
                  <Image
                    style={style.imagePembeli}
                    source={{
                      uri: pengiriman?.tb_transaksi?.tb_pengguna.foto_pengguna,
                    }}
                  />
                  <View>
                    <Text style={style.Pembeli}>
                      Nama:{' '}
                      {pengiriman?.tb_transaksi?.tb_pengguna.nama_pengguna}
                    </Text>
                    <Text style={style.Pembeli}>Alamat: Pagersari</Text>
                  </View>
                </View>
              </View>
              <Text style={style.textNota}>Nota Pembelian</Text>
              <View style={style.viewNota}>
                <Image
                  source={{
                    uri: pengiriman?.tb_transaksi?.tb_barang?.gambar_barang,
                  }}
                  style={style.imageNota}
                />

                <View style={{marginHorizontal: 15}}>
                  <Text style={style.text}>
                    {pengiriman?.tb_transaksi?.nama_belanjaan}
                  </Text>
                  <Text style={style.text}>
                    Jumlah: {pengiriman?.tb_transaksi?.jumlah_belanjaan}
                  </Text>
                  <Text style={style.text}>
                    Total harga {pengiriman?.tb_transaksi?.total_harga}
                  </Text>
                  <Text style={style.text2}>
                    {pengiriman?.tb_transaksi?.tb_toko?.nama_toko}
                  </Text>
                  <Text style={style.text2}>Blok B4 No 20</Text>
                </View>
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};
export default Pengiriman;
