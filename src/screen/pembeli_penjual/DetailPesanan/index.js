import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {BASE_URL, COLORS, FONTS, SIZES, showSuccess} from '../../../constant';
import {Headers, Loading, LoadingScreen} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {changeStatusTrans, detailTransaction} from '../../../services';
import axios from 'axios';
import { RectButton } from 'react-native-gesture-handler';

const DetailPesanan = ({navigation, route}) => {
  const {id_transaksi} = route.params;

  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dikemas, setDikemas] = useState(true);
  const [dikirim, setDikirim] = useState(false);
  const [dibayar, setDibayar] = useState(false);

  const order = async () => {
    const response = await detailTransaction(id_transaksi);
    if (response?.status === 200) {
      setTransaksi(response?.data?.data);
    }
  };

  const patchAccepted = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'accepted'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      order();
    }
    console.log(res);
    setLoading(false);
  };

  const patchRejected = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'rejected'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      order();
    }
    console.log(res);
    setLoading(false);
  };

  const patchDikemas = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'dikemas'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      order();
    }
    console.log(res);
    setLoading(false);
  };

  const patchDikim = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'dikirim'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      order();
    }
    console.log(res);
    setLoading(false);
  };

  const patchDibayar = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'dibayar'},
    );
    if (res.status === 200) {
      showSuccess('Status Berhasil Diubah');
      order();
    }
    console.log(res);
    setLoading(false);
  };

  useEffect(() => {
    order();
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <ScrollView
          contentContainerStyle={[
            style.container,
            {paddingHorizontal: 20, paddingTop: 10},
          ]}>
          <Headers title="Detail Pesanan" />
          <View
            style={[
              style.card,
              {
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://pict.sindonews.net/dyn/850/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
                }}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  color: COLORS.black,
                  textAlign: 'left',
                  marginLeft: 20,
                }}>
                Pemesan : Bayu
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#FFA36E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="chatbubble-ellipses-outline"
                size={40}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...FONTS.bodyLargeBold,
              color: COLORS.black,
              marginVertical: 10,
            }}>
            Pesanan
          </Text>

          {/* Barang */}
          <View
            style={{
              borderWidth: 2,
              borderColor: COLORS.primaryColor,
              padding: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/14/1452578967.jpg',
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
                {transaksi?.nama_belanjaan}
              </Text>
              <Text>{transaksi?.jumlah_belanjaan}</Text>
              <Text>{transaksi?.total_harga}</Text>
            </View>
          </View>

          {transaksi?.status_transaksi !== 'pending' && transaksi?.status_transaksi !== 'rejected' && (
            <>
              <Text
                style={{
                  ...FONTS.bodyLargeBold,
                  color: COLORS.black,
                  marginVertical: 10,
                }}>
                Pengiriman
              </Text>

              <View
                style={{
                  borderWidth: 2,
                  borderColor: COLORS.primaryColor,
                  padding: 10,
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
                    Konfirmasi Barang Sudah Dikemas
                  </Text>
                  <TouchableOpacity
                    disabled={transaksi?.status_transaksi === "dikemas" || transaksi?.status_transaksi === "dikirim" || transaksi?.status_transaksi === "dibayar"}
                    onPress={() => patchDikemas()}
                    style={{
                      width: 90,
                      height: 25,
                      backgroundColor:  transaksi?.status_transaksi === "dikemas" || transaksi?.status_transaksi === "dikirim" || transaksi?.status_transaksi === "dibayar"? COLORS.lightGray :  COLORS.alertSuccess,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Text style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                      Konfirmasi
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 16,
                  }}>
                  <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
                    Konfirmasi Barang Sudah Dikirim
                  </Text>
                  <TouchableOpacity
                    disabled={transaksi?.status_transaksi === "accepted" || transaksi?.status_transaksi === "dikirim" || transaksi?.status_transaksi === "dibayar"}
                    onPress={() => patchDikim()}
                    style={{
                      width: 90,
                      height: 25,
                      backgroundColor: transaksi?.status_transaksi === "accepted" || transaksi?.status_transaksi === "dikirim" || transaksi?.status_transaksi === "dibayar" ? COLORS.lightGray : COLORS.alertSuccess,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Text style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                      Konfirmasi
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
                    Konfirmasi Barang Sudah Dibayar
                  </Text>
                  <TouchableOpacity
                    disabled={transaksi?.status_transaksi === "accepted" || transaksi?.status_transaksi === "dikemas" || transaksi?.status_transaksi === "dibayar"}
                    onPress={() => patchDibayar()}
                    style={{
                      width: 90,
                      height: 25,
                      backgroundColor: transaksi?.status_transaksi === "accepted" || transaksi?.status_transaksi === "dikemas" || transaksi?.status_transaksi === "dibayar" ? COLORS.lightGray : COLORS.alertSuccess,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Text style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                      Konfirmasi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </ScrollView>

        {transaksi?.status_transaksi === 'pending' && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => patchRejected()}
              style={{
                width: '48%',
                height: 35,
                backgroundColor: COLORS.white,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: COLORS.primaryColor,
              }}>
              <Text
                style={{...FONTS.bodyNormalMedium, color: COLORS.primaryColor}}>
                Tolak Pesanan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                patchAccepted();
              }}
              style={{
                width: '48%',
                height: 35,
                backgroundColor: COLORS.primaryColor,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.bodyNormalMedium, color: COLORS.white}}>
                Terima Pesanan
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {loading && <LoadingScreen />}
    </>
  );
};

export default DetailPesanan;

const styles = StyleSheet.create({});
