import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomModal, Headers, InputText, LoadingScreen, Separator} from '../../../components';
import style from './style';
import {
  COLORS,
  FONTS,
  SIZES,
  formatRupiah,
  showSuccess,
} from '../../../constant';
// import {ScrollView} from 'react-native-gesture-handler';
import {buyProduct, deleteProdukInCart} from '../../../services';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Auth from '../../../services/Auth';
import {Logo} from '../../../assets';

const NotaPembelian = ({route, navigation}) => {
  const {product} = route.params;

  const [loading, setLoading] = useState(false);
  const [saldo, setSaldo] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visiblePayment, setVisiblePayment] = useState(false);
  const [alamat, setAlamat] = useState(null);
  const [namaPenerima, setNamaPenerima] = useState(null);
  const [noHpPenerima, setNoHpPenerima] = useState(null);
  const [nama, setNama] = useState(null);
  const [nohp, setNohp] = useState(null);
  const [payment, setPayment] = useState(null);

  const getSaldo = async () => {
    const saldoKu = await Auth.getSaldo();
    setSaldo(saldoKu);
  };

  useEffect(() => {
    console.log('product', product);
    getSaldo();
    console.log('saldo', saldo);
    let totalHarga = 0;
    for (const item of product) {
      setTotalHarga((totalHarga += item.harga_belanjaan));
    }
  }, []);

  function contentAddress() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginBottom: 20,
          }}>
          <Text style={{...FONTS.bodyLargeBold, color: COLORS.primaryColor}}>
            Tambahkan Alamat
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

        <Text
          style={{
            ...FONTS.bodyNormalMedium,
            color: COLORS.black,
            marginTop: 20,
            marginBottom: 5,
          }}>
          Rincian Alamat
        </Text>
        <InputText
          placeholder={'Masukan Alamatmu'}
          value={alamat}
          onChangeText={val => setAlamat(val)}
        />
        <Text
          style={{
            ...FONTS.bodyNormalMedium,
            color: COLORS.black,
            marginTop: 10,
            marginBottom: 5,
          }}>
          Nama Lengkap
        </Text>
        <InputText
          placeholder={'Masukan Nama Lengkapmu'}
          value={namaPenerima}
          onChangeText={val => setNamaPenerima(val)}
        />
        <Text
          style={{
            ...FONTS.bodyNormalMedium,
            color: COLORS.black,
            marginTop: 10,
            marginBottom: 5,
          }}>
          No. Handphone
        </Text>
        <InputText
          placeholder={'Masukan No. Handphonemu'}
          value={noHpPenerima}
          onChangeText={val => setNoHpPenerima(val)}
        />

        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={{
            width: '100%',
            height: 40,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            // marginHorizontal: 10
          }}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.white}}>
            Simpan Alamat
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function contentPayment() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginBottom: 20,
          }}>
          <Text style={{...FONTS.bodyLargeBold, color: COLORS.primaryColor}}>
            Pilih Metode Pembayaran
          </Text>
          <TouchableOpacity onPress={() => setVisiblePayment(!visiblePayment)}>
            <Icon2
              name="closecircleo"
              size={20}
              color={COLORS.neutral3}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setPayment('Saldo Dompet Cibeureum')}
          style={{flexDirection: 'row', marginTop: 20}}
          disabled={saldo === null || saldo < totalHarga}>
          <Icon2
            name="wallet"
            size={20}
            color={
              saldo === null || saldo < totalHarga
                ? COLORS.neutral3
                : COLORS.primaryColor
            }
          />
          <Text
            style={{
              ...FONTS.bodyNormalMedium,
              color:
                saldo === null || saldo < totalHarga
                  ? COLORS.neutral3
                  : COLORS.black,
              marginLeft: 20,
            }}>
            Dompet Cibeurem (
            {saldo === null || saldo < totalHarga
              ? 'Saldo Kurang'
              : formatRupiah(saldo === null ? 0 : saldo)}
            )
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 20}}
          onPress={() => setPayment('cod')}>
          <Icon2 name="gift" size={20} color={COLORS.primaryColor} />
          <Text
            style={{
              ...FONTS.bodyNormalMedium,
              color: COLORS.black,
              marginLeft: 20,
            }}>
            COD (Bayar di Tempat)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 20}}
          disabled={true}>
          <Icon2 name="creditcard" size={20} color={COLORS.neutral3} />
          <Text
            style={{
              ...FONTS.bodyNormalMedium,
              color: COLORS.neutral3,
              marginLeft: 20,
            }}>
            Bank Transfer (Belum Tersedia)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setVisiblePayment(!visiblePayment)}
          style={{
            width: '100%',
            height: 40,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            // marginHorizontal: 10
          }}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.white}}>
            Simpan Metode Pembayaran
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const buyNow = async () => {
    setLoading(true);
    for (const item of product) {
      const data = {
        nama_belanjaan: item?.tb_barang?.nama_barang,
        jumlah_belanjaan: item?.jumlah_belanjaan,
        harga_belanjaan: item?.harga_belanjaan,
        total_harga: item?.harga_belanjaan,
        metode_pembayaran: payment,
        status_transaksi: 'pending',
        id_pengguna: item?.id_pengguna,
        id_toko: item?.tb_barang?.tb_toko?.id_toko,
        id_belanjaan: item?.id_belanjaan,
        id_barang: item?.tb_barang?.id_barang,
      };
      const response = await buyProduct(data);
      if (response.status === 201) {
        showSuccess(response?.data?.message);
        const hapus = await deleteProdukInCart(item?.id_belanjaan);
        console.log(hapus);
        // navigation.replace('RiwayatTransaksi');
      }
    }
    setLoading(false);
    navigation.replace('RiwayatTransaksi', {status: "pending"});
  };

  return (
    <>
    <View style={[style.container, {flex: 1}]}>
      <ScrollView>
        <Headers title="Pemesanan Barang" />
        <Text
          style={{
            ...FONTS.headingLargeBold,
            color: COLORS.black,
            marginTop: 10,
            marginLeft: 10,
          }}>
          Barang Belanjaan
        </Text>

        <FlatList
          data={product}
          numColumns={1}
          initialNumToRender={7}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          maxToRenderPerBatch={1000}
          windowSize={60}
          updateCellsBatchingPeriod={60}
          renderItem={({item}) => (
            <View
              style={[
                style.card,
                {
                  padding: 10,
                  backgroundColor: COLORS.white,
                  position: 'relative',
                },
              ]}>
              <Image
                source={{
                  uri: item?.tb_barang?.gambar_barang,
                }}
                style={{width: 100, height: 100}}
              />
              <View style={{marginLeft: 30, marginTop: 5}}>
                <Text style={{...FONTS.bodyLargeMedium, color: COLORS.black}}>
                  {item.tb_barang?.nama_barang}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyLargeMedium,
                    color: COLORS.primaryColor,
                    marginTop: 5,
                  }}>
                  {formatRupiah(item.harga_belanjaan)}
                </Text>
              </View>
              <Text
                style={{
                  ...FONTS.bodyLargeBold,
                  position: 'absolute',
                  color: COLORS.black,
                  marginTop: 5,
                  right: 15,
                  alignSelf: 'center',
                }}>
                x {item.jumlah_belanjaan}
              </Text>
            </View>
          )}
        />

        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={[
            style.card,
            {
              backgroundColor: COLORS.white,
              padding: 10,
              marginTop: 2,
              justifyContent: 'space-between',
            },
          ]}>
          <View>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                // marginTop: 20,
                // marginLeft: 10,
              }}>
              Alamat Pengiriman
            </Text>
            <Text
              style={{
                ...FONTS.bodySmallMedium,
                color: COLORS.black,
                // marginTop: 10,
              }}>
              Penerima : {namaPenerima === null ? "Tidak ada nama penerima" : namaPenerima}
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalMedium,
                color: COLORS.black,
                // marginTop: 10,
              }}>
              {alamat === null ? 'Tidak ada alamat' : alamat}
            </Text>
          </View>

          <Icon
            name="chevron-right"
            size={35}
            color={COLORS.neutral2}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisiblePayment(!visiblePayment)}
          style={[
            style.card,
            {
              backgroundColor: COLORS.white,
              padding: 10,
              marginTop: 2,
              justifyContent: 'space-between',
            },
          ]}>
          <View>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                // marginTop: 20,
                // marginLeft: 10,
              }}>
              Metode Pembayaran
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalMedium,
                color: COLORS.black,
                // marginTop: 10,
              }}>
              {payment === null ? 'Metode Pembayaran Kosong' : payment}
            </Text>
          </View>

          <Icon
            name="chevron-right"
            size={35}
            color={COLORS.neutral2}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>

        <View
          style={[
            style.card2,
            {padding: 10, backgroundColor: COLORS.white, marginTop: 2},
          ]}>
          <Text
            style={{
              ...FONTS.bodyLargeMedium,
              color: COLORS.black,
              // marginTop: 20,
              // marginLeft: 10,
            }}>
            Sub Total
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                }}>
                Ongkir
              </Text>
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                }}>
                Sub Total
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                  textAlign: 'right',
                }}>
                {formatRupiah(15000)}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeBold,
                  color: COLORS.primaryColor,
                }}>
                {formatRupiah(totalHarga + 15000)}
              </Text>
            </View>
          </View>
        </View>

        <CustomModal visibleModal={visible} content={contentAddress()} />
        <CustomModal visibleModal={visiblePayment} content={contentPayment()} />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => buyNow()}
          style={{
            width: '100%',
            height: 40,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            // marginHorizontal: 10
          }}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.white}}>
            Pesan Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    {loading && (<LoadingScreen />)}
    </>
  );
};

export default NotaPembelian;

const styles = StyleSheet.create({});
