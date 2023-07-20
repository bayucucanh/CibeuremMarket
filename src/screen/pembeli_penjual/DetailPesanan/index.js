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
import {BASE_URL, COLORS, FONTS, SIZES, formatRupiah, showSuccess} from '../../../constant';
import {Headers, Loading, LoadingScreen} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {changeStatusTrans, detailTransaction} from '../../../services';
import axios from 'axios';
import {RectButton} from 'react-native-gesture-handler';

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
      setTransaksi(response?.data?.data?.transaksi);
    }
  };

  const patchAccepted = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/transaksi/${id_transaksi}`,
      {status_transaksi: 'disetujui'},
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
      showSuccess('Status Berhasil Diubah (Dikemas)');
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
      showSuccess('Status Berhasil Diubah (Dikirim)');
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
      showSuccess('Status Berhasil Diubah (Dibayar)');
      order();
    }
    console.log(res);
    setLoading(false);
  };

  useEffect(() => {
    order();
    console.log(transaksi);
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
                  uri: transaksi?.tb_pengguna?.foto_pengguna === null ? "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=1200" : transaksi?.tb_pengguna?.foto_pengguna,
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
                Pemesan : {transaksi?.tb_pengguna?.nama_pengguna}
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
                uri: transaksi?.tb_barang?.gambar_barang,
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
                {transaksi?.nama_belanjaan}
              </Text>
              <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>Jumlah Pesanan : {transaksi?.jumlah_belanjaan}</Text>
              <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black}}>Total Harga : {formatRupiah(transaksi?.total_harga)}</Text>
            </View>
          </View>

          {/* Pengiriman */}
          <Text
            style={{
              ...FONTS.bodyLargeBold,
              color: COLORS.black,
              marginVertical: 10,
            }}>
            Pengiriman
          </Text>

          <View
            style={[{backgroundColor: COLORS.white, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: COLORS.primaryColor}]}>
            <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
              Penerima : {transaksi?.tb_pengguna?.nama_pengguna}
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              No. Kontak : {transaksi?.tb_pengguna?.nomor_hp}
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Alamat Lenkap : {transaksi?.tb_pengguna?.alamat_pengguna === null ? "Ambil ditoko" : transaksi?.tb_pengguna?.alamat_pengguna}
            </Text>
          </View>

          {transaksi?.status_transaksi !== 'menunggu' &&
            transaksi?.status_transaksi !== 'ditolak' && (
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
                      disabled={
                        transaksi?.status_transaksi === 'dikemas' ||
                        transaksi?.status_transaksi === 'dikirim' ||
                        transaksi?.status_transaksi === 'dibayar'
                      }
                      onPress={() => patchDikemas()}
                      style={{
                        width: 90,
                        height: 25,
                        backgroundColor:
                          transaksi?.status_transaksi === 'dikemas' ||
                          transaksi?.status_transaksi === 'dikirim' ||
                          transaksi?.status_transaksi === 'dibayar'
                            ? COLORS.lightGray
                            : COLORS.alertSuccess,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{...FONTS.bodySmallBold, color: COLORS.white}}>
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
                      disabled={
                        transaksi?.status_transaksi === 'accepted' ||
                        transaksi?.status_transaksi === 'dikirim' ||
                        transaksi?.status_transaksi === 'dibayar'
                      }
                      onPress={() => patchDikim()}
                      style={{
                        width: 90,
                        height: 25,
                        backgroundColor:
                          transaksi?.status_transaksi === 'accepted' ||
                          transaksi?.status_transaksi === 'dikirim' ||
                          transaksi?.status_transaksi === 'dibayar'
                            ? COLORS.lightGray
                            : COLORS.alertSuccess,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{...FONTS.bodySmallBold, color: COLORS.white}}>
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
                      disabled={
                        transaksi?.status_transaksi === 'accepted' ||
                        transaksi?.status_transaksi === 'dikemas' ||
                        transaksi?.status_transaksi === 'dibayar'
                      }
                      onPress={() => patchDibayar()}
                      style={{
                        width: 90,
                        height: 25,
                        backgroundColor:
                          transaksi?.status_transaksi === 'accepted' ||
                          transaksi?.status_transaksi === 'dikemas' ||
                          transaksi?.status_transaksi === 'dibayar'
                            ? COLORS.lightGray
                            : COLORS.alertSuccess,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                        Konfirmasi
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
        </ScrollView>

        {transaksi?.status_transaksi === 'menunggu' && (
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
