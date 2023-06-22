import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {ProductCard, SearchBar} from '../../../components';
import useHome from './useHome';
import style from './style';
import Auth from '../../../services/Auth';
import {listProduct, listProductBySearch} from '../../../services';
import {COLORS, FONTS, SIZES} from '../../../constant';
import Icon from 'react-native-vector-icons/Feather';

const Home = ({navigation}) => {
  const [searchProduct, setSearchProduct, prouducts, setProduct] = useHome({
    navigation,
  });

  const getProductsBySearch = async () => {
    // const token = await Auth.getToken();
    // console.log('token', token);
    const response = await listProductBySearch(searchProduct);
    console.log('res', response?.data);
    setProduct(response?.data?.data?.barang);
  };

  return (
    <ScrollView style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: SIZES.padding5
        }}>
        <View style={{width: '85%', marginRight: 10}}>
          <SearchBar
            onChangeText={val => setSearchProduct(val)}
            value={searchProduct}
          />
        </View>
        <TouchableOpacity
          onPress={() => getProductsBySearch()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 10,
            marginTop: 15,
            marginRight: 50,
            backgroundColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="search" color={"white"} size={35} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 22,
          marginHorizontal: 19,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <FlatList
          data={prouducts}
          numColumns={2}
          initialNumToRender={7}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          maxToRenderPerBatch={1000}
          windowSize={60}
          updateCellsBatchingPeriod={60}
          ListEmptyComponent={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="alert-circle" color={COLORS.primaryColor} size={70} />
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.primaryColor, marginTop: 14 }}>No Product Found</Text>
          </View>
        }
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
        {/* <ProductCard onPress={() => navigation.navigate('DetailProduk')} />
        <ProductCard />
        <ProductCard /> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
