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
import {Headers, InputText} from '../../../components';
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

const NotaPembelian = ({route, navigation}) => {
  const {product} = route.params;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('product', product);
  }, []);

  const buyNow = async () => {
    setLoading(true);
    const data = {
      nama_belanjaan: product?.tb_barang?.nama_barang,
      jumlah_belanjaan: product?.jumlah_belanjaan,
      harga_belanjaan: product?.harga_belanjaan,
      total_harga: product?.harga_belanjaan,
      metode_pembayaran: 'cod',
      status_transaksi: 'pending',
      id_pengguna: product?.id_pengguna,
      id_toko: product?.tb_barang?.tb_toko?.id_toko,
      id_belanjaan: product?.id_belanjaan,
    };
    console.log('Push___', data);
    const response = await buyProduct(data);
    console.log(response);
    if (response.status === 201) {
      showSuccess(response?.data?.message);
      const hapus = await deleteProdukInCart(product?.id_belanjaan);
      console.log(hapus);
      navigation.replace('RiwayatTransaksi');
    }
  };

  return (
    <View style={[style.container, {flex: 1}]}>
      <ScrollView>
        <Headers title="Pemesanan Barang" />
        {/* <GooglePlacesAutocomplete
        onFail={error => console.error(error)}
        placeholder="Enter Location"
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={{
          textInputContainer: {
            backgroundColor: 'grey',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        query={{
          key: 'AIzaSyAVMZMTtih_8UiN-qgnoL5fKwPF4qQkybE',
          language: 'en',
        }}
      /> */}
        <Text
          style={{
            ...FONTS.headingLargeBold,
            color: COLORS.black,
            marginTop: 10,
            marginLeft: 10,
          }}>
          Barang Belanjaan
        </Text>
        {/* <View
          style={[
            style.card,
            {padding: 10, backgroundColor: COLORS.white, position: 'relative'},
          ]}>
          <Image
            source={{
              uri: product?.tb_barang?.gambar_barang,
            }}
            style={{width: 100, height: 100}}
          />
          <View style={{marginLeft: 30, marginTop: 5}}>
            <Text style={{...FONTS.bodyLargeMedium, color: COLORS.black}}>
              {product?.tb_barang?.nama_barang}
            </Text>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.primaryColor,
                marginTop: 5,
              }}>
              {formatRupiah(product?.harga_belanjaan)}
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
            x 2
          </Text>
        </View> */}

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
                  uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1605524896/attached_image/mengolah-daging-sapi-dengan-benar.jpg',
                }}
                style={{width: 100, height: 100}}
              />
              <View style={{marginLeft: 30, marginTop: 5}}>
                <Text style={{...FONTS.bodyLargeMedium, color: COLORS.black}}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyLargeMedium,
                    color: COLORS.primaryColor,
                    marginTop: 5,
                  }}>
                  {formatRupiah(item.harga)}
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
                x {item.qty}
              </Text>
            </View>
          )}
        />

        <TouchableOpacity
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
              Penerima : Bayu Cucan Herdian
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalMedium,
                color: COLORS.black,
                // marginTop: 10,
              }}>
              Jln. Sukamulus No.17 RT001/RW0018
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
              Saldo Dompet Cibeurem
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
                {formatRupiah(product?.harga_belanjaan + 15000)}
              </Text>
            </View>
          </View>
        </View>
        {/* <View
          style={[
            style.card,
            {
              // height: SIZES.height * 0.08,
              backgroundColor: COLORS.white,
              // alignItems: 'center',
            },
          ]}>
          <Image
            source={{
              uri: product?.tb_barang?.gambar_barang              ,
            }}
            style={{
              width: '35%',
              height: SIZES.height * 0.25,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          <View style={{marginLeft: 15, marginTop: 5}}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Berat {product?.jumlah_belanjaan} {product?.tb_barang?.ukuran_barang}
            </Text>
            <Text style={{...FONTS.bodyLargeBold, color: COLORS.black, maxWidth: '90%',}} numberOfLines={2}
              ellipsizeMode="tail">
              {product?.tb_barang?.nama_barang}
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              {product?.harga_belanjaan}
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalBold,
                color: COLORS.black,
                maxWidth: '50%',
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              {product?.tb_barang?.tb_toko?.nama_toko}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  color: COLORS.primaryColor,
                  marginTop: 30,
                  textAlign: 'center',
                }}>
                Detail...
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[style.card, {backgroundColor: COLORS.white, padding: 20,}]}>
          <Text style={{...FONTS.bodyLargeMedium, color: COLORS.black}}>
            Total Harga : Rp. {product?.harga_belanjaan}
          </Text>
          <Text style={{...FONTS.bodyNormalMedium}}>
            Pembayaran COD (Dibayar ditempat)
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Pembeli Bayu Cucan Herdian
          </Text>
        </View> */}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* <TouchableOpacity
          style={{
            width: '48%',
            height: 40,
            backgroundColor: COLORS.white,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: COLORS.primaryColor
          }}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.primaryColor}}>
            Ambil Sendiri
          </Text>
          </TouchableOpacity> */}
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
  );
};

export default NotaPembelian;

const styles = StyleSheet.create({});
