import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, SIZES, formatRupiah} from '../../../constant';
import style from './style';
import Icon from 'react-native-vector-icons/Feather';
import {useIsFocused} from '@react-navigation/native';
import {listProductCart} from '../../../services';
import {ListProduct} from '../../../components';
import CheckBox from '@react-native-community/checkbox';

const Keranjang = ({navigation}) => {
  const isFocused = useIsFocused();

  const friendsArray = [
    {
      id: 1,
      name: 'Wagyu A5',
      harga: 1000000,
      qty: 3,
    },
    {
      id: 2,
      name: 'Ayam Pejantan',
      harga: 32000,
      qty: 1,
    },
    {
      id: 3,
      name: 'Ayam Negri',
      harga: 32000,
      qty: 3,
    },
  ];

  const [product, setProduct] = useState([]);
  const [checkbox, setCheckbox] = useState([]);
  const [barangCheckbox, setBarangCheck] = useState([]);
  const [pickProduct, setPickProduct] = useState([]);
  const [totalBelanja, setTotalBelanja] = useState(0);
  const [isSelected, setSelection] = useState(false);
  const [barangDiPilih, setBarangDiPilih] = useState({});

  const getListCartProduct = async () => {
    const response = await listProductCart();
    console.log(response);
    setProduct(response?.data?.data?.belanjaan);
  };

  function toggleChecked(idToToggle) {
    console.log('checkbox', idToToggle);
    setCheckbox(prev => {
      if (prev.includes(idToToggle)) {
        return prev.filter(id => id !== idToToggle);
      }
      return [...prev, idToToggle];
    });
  }

  useEffect(() => {
    if (isFocused) {
      getListCartProduct();
      console.log('product', product);
    }
  }, [isFocused]);

  useEffect(() => {
    console.log("Checkbox 2", checkbox);
    let totalHarga = 0
    for (const item of product) {
      setTotalBelanja((totalHarga += item.harga_belanjaan));
    }
  }, [checkbox]);

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
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                toggleChecked(item);
              }}
              style={[
                style.card,
                {
                  padding: 10,
                  backgroundColor: COLORS.white,
                  position: 'relative',
                },
              ]}>
              <CheckBox
                value={checkbox.includes(item) ? true : false}
                onValueChange={value => toggleChecked(item)}
                tintColor={COLORS.primaryColor}
                style={{alignSelf: 'center'}}
              />
              <Image
                source={{
                  uri: item?.tb_barang?.gambar_barang,
                }}
                style={{width: 80, height: 80, marginLeft: 10}}
              />
              <View style={{marginLeft: 20}}>
                <Text style={{...FONTS.bodyLargeBold, color: COLORS.black}}>
                  {item.tb_barang?.nama_barang} {console.log("checkbox chec",checkbox.includes(item))}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyNormalMedium,
                    color: COLORS.primaryColor,
                  }}>
                  {formatRupiah(item.harga_belanjaan)}
                </Text>
              </View>
              <Text
                style={{
                  ...FONTS.bodyLargeBold,
                  color: COLORS.primaryColor,
                  position: 'absolute',
                  right: 20,
                  alignSelf: 'center',
                }}>
                x {item.jumlah_belanjaan}
              </Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 2,
            marginHorizontal: 20,
            padding: 10,
            borderStyle: 'dashed',
            borderColor: COLORS.neutral2,
          }}>
          <Text style={{...FONTS.bodyLargeBold, color: COLORS.neutral2}}>
            Tambah Pesanan
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{backgroundColor: COLORS.white}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
            Total Harga :
          </Text>
          <Text
            style={{
              ...FONTS.bodyNormalRegular,
              color: COLORS.black,
              marginLeft: 10,
            }}>
            {checkbox.length === 0 && product.length === 0 ? "Rp. 0" : formatRupiah(totalBelanja)}
          </Text>
        </View>
        <TouchableOpacity
        disabled={checkbox.length === 0 ? true : false}
          onPress={() =>
            navigation.navigate('NotaPembelian', {product: checkbox})
          }
          style={{
            backgroundColor: checkbox.length === 0 ? COLORS.neutral2 : COLORS.primaryColor,
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
          <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>
            Bayar Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({});
