import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {empty} from '../../../assets/image';
import {COLORS, FONTS, SIZES} from '../../../constant';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Empty, ProductCard} from '../../../components';
import {useIsFocused} from '@react-navigation/native';
import {toko} from '../../../services';
import Icon2 from 'react-native-vector-icons/Feather';

const Toko = ({navigation}) => {
  const isFocused = useIsFocused();

  const [registStoreCheck, setRegistStoreCheck] = useState(false);

  const getStore = async () => {
    const response = await toko();
    console.log(response?.data?.data?.toko.length === 0);
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
              Toko Jagal Abadi
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Icon name="location-pin" size={20} color="black" />
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  marginLeft: 20,
                  color: COLORS.black,
                }}>
                Alamat : Blok C4 No 24
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
                Jam Buka : Setiap Hari, 04.00-15.00
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
                No Hp : 085321227418
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
                Email : jagalabadi@gmail.com
              </Text>
            </View>
            <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
              Merupakan toko yang menjual berbagai macam daging seperti daging
              sapi, daging ayam, dan daging kambing.
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
              <TouchableOpacity
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
                onPress={() => navigation.navigate('TambahBarang')}
                >
                <Icon2 name="plus" size={30} style={{color: COLORS.neutral3}} />
                <Text
                  style={{...FONTS.bodyNormalRegular, color: COLORS.neutral3}}>
                  Tambah Barang
                </Text>
              </TouchableOpacity>
            </View>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Toko;
