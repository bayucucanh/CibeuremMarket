import {Text, View, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {empty} from '../../../assets/image';
import {COLORS, FONTS, SIZES} from '../../../constant';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Empty, ProductCard} from '../../../components';
import {useIsFocused} from '@react-navigation/native';
import {myProduct, toko} from '../../../services';
import Icon2 from 'react-native-vector-icons/Feather';
import Auth from '../../../services/Auth';

const Toko = ({navigation}) => {
  const isFocused = useIsFocused();

  const [registStoreCheck, setRegistStoreCheck] = useState(false);
  const [dataToko, setDataToko] = useState({});
  const [allProduct, setAllProduct] = useState([]);
  const getMyProduct = async () => {
    const response = await myProduct();

    console.log(response);
    setAllProduct(response?.data?.data?.barang)
    console.log('allProduct', allProduct);
  }

  const getStore = async () => {
    const response = await toko();
    
    setDataToko(response?.data?.data?.toko[0]);
    const token = await Auth.getToken();
    console.log(dataToko);
    console.log(token);
    if (response?.data?.data?.toko.length === 0) {
      setRegistStoreCheck(true);
    } else {
      setRegistStoreCheck(false);
    }
    // setProfile(response?.data?.data?)
  };

  useEffect(() => {
    if (isFocused) {
      getStore();
      getMyProduct()
    }
  }, [isFocused]);

  return (
    <>
      {registStoreCheck ? (
        <View
          style={[
            style.container,
            {flex: 1, justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Empty
            header="Kelihatannya kamu tidak memiliki toko"
            body="Apakah kamu pedagang di Pasar Cibeureum Ciwidey? Daftarkan tokomu agar kamu dapat berjualan diaplikasi Cibeureum Market!"
            onPress={() => navigation.navigate('DaftarToko')}
          />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[
            style.container,
            {paddingHorizontal: 20, paddingTop: 10},
          ]}>
          <View style={{borderWidth: 2, padding: 20, borderRadius: 20}}>
            <Image
              source={{
                uri: 'https://mmc.tirto.id/image/otf/500x0/2021/03/16/header-src_ratio-16x9.jpeg',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                ...FONTS.bodyNormalBold,
                color: COLORS.primaryColor,
                textAlign: 'center',
                marginVertical: 11,
              }}>
              {dataToko?.nama_toko}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Icon name="location-pin" size={20} color="black" />
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  marginLeft: 20,
                  color: COLORS.black,
                }}>
                Alamat : {dataToko?.alamat_toko}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Icon name="clock" size={20} color="black" />
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  marginLeft: 20,
                  color: COLORS.black,
                }}>
                Jam Buka : {dataToko?.jam_buka}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Icon name="screen-smartphone" size={20} color="black" />
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  marginLeft: 20,
                  color: COLORS.black,
                }}>
                No Hp : {dataToko?.nomor_hp_toko}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <Icon name="envelope" size={20} color="black" />
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  marginLeft: 20,
                  color: COLORS.black,
                }}>
                Email : {dataToko?.email_toko}
              </Text>
            </View>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              {dataToko?.deskripsi_toko}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PemesananMasuk')}
            style={[
              style.card,
              {
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
              {' '}
              Pesanan Masuk
            </Text>
            <Icon name="arrow-right-circle" size={25} color="black" />
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <View style={{maxWidth: SIZES.width * 0.42}}>
              {/* <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderRadius: SIZES.radius1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 170,
                  height: SIZES.height * 0.28,
                  borderStyle: 'dashed',
                  borderColor: COLORS.neutral2,
                }}
                onPress={() => navigation.navigate('TambahBarang', {idToko: dataToko?.id_toko})}
                >
                <Icon2 name="plus" size={30} style={{color: COLORS.neutral3}} />
                <Text
                  style={{...FONTS.bodyNormalRegular, color: COLORS.neutral3}}>
                  Tambah Barang
                </Text>
              </TouchableOpacity> */}
            </View>
            <FlatList
          data={allProduct}
          numColumns={2}
          initialNumToRender={7}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          maxToRenderPerBatch={1000}
          windowSize={60}
          updateCellsBatchingPeriod={60}
          ListEmptyComponent={<Text>Kosong</Text>}
          columnWrapperStyle={{
            marginBottom: SIZES.padding4,
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.base,
          }}
          renderItem={({item}) => (
            <ProductCard
              nama_barang={item.nama_barang}
              deskripsi_barang={item.deskripsi_barang}
              harga_barang={item.harga_barang}
              gambarBarang={item.gambar_barang}
              onPress={() =>
                navigation.navigate('DetailProduk', {productId: item.id_barang})
              }
            />
          )}
        />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Toko;
