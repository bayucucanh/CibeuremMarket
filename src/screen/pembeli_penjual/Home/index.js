import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {ProductCard, SearchBar} from '../../../components';
import useHome from './useHome';
import style from './style';
import Auth from '../../../services/Auth';
import {listProduct} from '../../../services';
import {SIZES} from '../../../constant';

const Home = ({navigation}) => {
  const [searchProduct, setSearchProduct, prouducts, setProduct] = useHome({
    navigation,
  });

  return (
    <ScrollView style={style.container}>
      <SearchBar onChangeText={setSearchProduct} value={searchProduct} />
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
        {/* <ProductCard onPress={() => navigation.navigate('DetailProduk')} />
        <ProductCard />
        <ProductCard /> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
