import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../constant';
import style from './style';
import Icon from 'react-native-vector-icons/Feather';
import { useIsFocused } from '@react-navigation/native';
import { listProductCart } from '../../../services';
import { ListProduct } from '../../../components';

const Keranjang = ({navigation}) => {

  const isFocused = useIsFocused();

  const [product, setProduct] = useState([])
  const [totalBelanja, setTotalBelanja] = useState(0)
  const [barangDiPilih, setBarangDiPilih] = useState({})

  const getListCartProduct = async () => {
    const response = await listProductCart();
    console.log(response);
    setProduct(response?.data?.data?.belanjaan);
  }

  useEffect(() => {
    if (isFocused) {
      getListCartProduct()
      console.log('product', product);
    }
  }, [isFocused]);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView contentContainerStyle={[style.container]}>
        <Text
          style={{
            ...FONTS.headingNormalBold,
            color: COLORS.black,
            marginLeft: 20,
            marginTop: 20,
          }}>
          Pesanan
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
          ListEmptyComponent={<Text>Kerangjang osong</Text>}
          renderItem={({item}) => (
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
              <ListProduct onPress={() => {
                setTotalBelanja(item.harga_belanjaan)
                setBarangDiPilih(item)
                }} gambarBarang={item.tb_barang.gambar_barang} namaBarang={item.tb_barang.nama_barang} jumlahPesanan={item.jumlah_belanjaan} TotalHarga={item.harga_belanjaan}/>
            </View>
          )}
        />
        
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
              uri: 'https://awsimages.detik.net.id/visual/2022/02/23/penjual-daging-sapi-di-pasar-kebayoran-lama-jakarta-rabu-2322022-cnbc-indonesiamuhammad-sabki-11.jpeg?w=650',
            }}
            style={{
              width: '50%',
              height: SIZES.height * 0.25,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Berat 3 Kg
            </Text>
            <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
              Daging Sapi
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Total Rp. 180.000.00
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalBold,
                color: COLORS.black,
                maxWidth: '50%',
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              Toko Jagal Abadi Blok C4 No 24
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
        </View> */}

        <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              borderRadius: 100,
              width: 50,
              height: 50,
              backgroundColor: '#E6F537',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="plus" size={30} color={COLORS.black} />
          </View>
          <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
            Tambah Pesanan
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{backgroundColor: COLORS.white}}>
        <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 10}}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
            Total Harga : 
          </Text>
          <Text style={{...FONTS.bodyNormalRegular, color: COLORS.black, marginLeft: 10}}>
           {totalBelanja}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotaPembelian', {product: barangDiPilih})}
          style={{
            backgroundColor: COLORS.primaryColor,
            width: '90%',
            // alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
            borderRadius: 100,
            marginHorizontal: 14,
            marginBottom: 14,
          }}>
          <Text style={{color: 'white'}}>Bayar Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({});
