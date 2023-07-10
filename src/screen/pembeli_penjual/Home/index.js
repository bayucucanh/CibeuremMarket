import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {ProductCard, SearchBar} from '../../../components';
import useHome from './useHome';
import style from './style';
import Auth from '../../../services/Auth';
import {
  listProduct,
  listProductByCategory,
  listProductBySearch,
} from '../../../services';
import {COLORS, FONTS, SIZES} from '../../../constant';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  const [searchProduct, setSearchProduct, prouducts, setProduct, getProducts] =
    useHome({
      navigation,
    });

  const getProductsBySearch = async () => {
    // const token = await Auth.getToken();
    // console.log('token', token);
    const response = await listProductBySearch(searchProduct);
    console.log('res', response?.data);
    setProduct(response?.data?.data?.barang);
  };

  const getProductsByCategory = async value => {
    // const token = await Auth.getToken();
    // console.log('token', token);
    const response = await listProductByCategory(value);
    console.log('res', response?.data);
    setProduct(response?.data?.data?.barang);
  };

  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor={'#fe906e'} />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#fdc69d', '#ffb27a', '#fe906e']}
        style={{width: '100%', padding: 20}}>
        {/* <View style={{marginBottom: 10}}>
          <Text style={{...FONTS.bodyLargeBold, color: COLORS.white}}>
            Hallo, Bayu Cucan Herdian
          </Text>
          <Text style={{...FONTS.bodyLargeMedium, color: COLORS.white}}>Selamat Berbelanja di Cibeurem Market</Text>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            // marginHorizontal: SIZES.padding5
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
              // marginTop: 15,
              marginRight: 60,
              backgroundColor: COLORS.primaryColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="search" color={COLORS.white} size={35} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            ...FONTS.bodyLargeBold,
            color: COLORS.white,
            marginTop: 10,
            marginBottom: 15,
          }}>
          Pilih Sesuai Kategori
        </Text>
      </LinearGradient>

      <View
        style={[
          style.card,
          {
            width: '90%',
            marginHorizontal: 20,
            backgroundColor: COLORS.white,
            marginTop: -32,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <TouchableOpacity
          onPress={() => getProductsByCategory('Daging')}
          style={{
            height: 50,
            // width: 50,
            borderRadius: 10,
            // marginTop: 15,
            // marginRight: 60,
            // backgroundColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon2 name="cow" color={COLORS.primaryColor} size={35} />
          <Text style={{...FONTS.bodySmallBold, color: COLORS.primaryColor}}>
            Daging
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getProductsByCategory('Sembako')}
          style={{
            height: 50,
            // width: 50,
            borderRadius: 10,
            // marginTop: 15,
            // marginRight: 60,
            // backgroundColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon2 name="rice" color={COLORS.primaryColor} size={35} />
          <Text style={{...FONTS.bodySmallBold, color: COLORS.primaryColor}}>
            Sembako
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getProductsByCategory('Sandang')}
          style={{
            height: 50,
            // width: 50,
            borderRadius: 10,
            // marginTop: 15,
            // marginRight: 60,
            // backgroundColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon2
            name="tshirt-crew-outline"
            color={COLORS.primaryColor}
            size={35}
          />
          <Text style={{...FONTS.bodySmallBold, color: COLORS.primaryColor}}>
            Sandang
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getProducts()}
          style={{
            height: 50,
            // width: 50,
            borderRadius: 10,
            // marginTop: 15,
            // marginRight: 60,
            // backgroundColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon2
            name="sort-alphabetical-ascending-variant"
            color={COLORS.primaryColor}
            size={35}
          />
          <Text style={{...FONTS.bodySmallBold, color: COLORS.primaryColor}}>
            Semua
          </Text>
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
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="alert-circle" color={COLORS.primaryColor} size={70} />
              <Text
                style={{
                  ...FONTS.bodyLargeBold,
                  color: COLORS.primaryColor,
                  marginTop: 14,
                }}>
                No Product Found
              </Text>
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
              deskripsi_barang={item.jenis_barang}
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
