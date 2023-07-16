import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {COLORS, SIZES, FONTS} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Headers} from '../../../components';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Pengiriman = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['30%', '58%'], []);

  //calback
  // const handleSheetChanges = useCallback(index => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  return (
    <View style={styles.container}>
      <Headers title="Pengiriman" color={COLORS.black} />
      <GestureHandlerRootView style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{flex: 1}}
          region={{
            latitude: -7.0988708,
            longitude: 107.4700574,
            latitudeDelta: 0.011,
            longitudeDelta: 0.0121,
          }}></MapView>

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
          enableContentPanningGesture={true}>
          {/* <BottomSheetView> */}
          <BottomSheetScrollView>
            <View>
              {/* //=================Card Info Barang=======================> */}
              <View
                style={{
                  width: 371,
                  height: SIZES.height * 0.25,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 15,
                  marginHorizontal: 10,
                  justifyContent: 'space-between',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}>
                <Text
                  style={{
                    color: COLORS.primaryColor,
                    fontWeight: '500',
                    fontSize: 20,
                  }}>
                  Informasi Barang
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 30,
                    alignItems: 'center',
                  }}>
                  <Icon name="motorcycle" size={60} color={COLORS.black} />
                  <Text
                    style={{
                      ...FONTS.titleNormalRegular,
                      paddingHorizontal: 20,
                      color: COLORS.black,
                    }}>
                    Konfirmasi pesanan telah sampai selesai
                  </Text>
                </View>
                <View
                  style={{
                    width: '60%',
                    height: '70%',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.alertSuccess,
                      width: 170,
                      alignSelf: 'flex-end',
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 100,
                      marginTop: 14,
                      marginHorizontal: -55,
                    }}>
                    <Text style={{color: 'white'}}>Selesai</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* //=================Card Info Barang=======================> */}
              {/* //=================Card Info Pembeli=======================> */}
              <View
                style={{
                  marginTop: 20,
                  width: 371,
                  height: SIZES.height * 0.16,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 19,
                  marginHorizontal: 10,
                  justifyContent: 'space-evenly',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}>
                <Text
                  style={{
                    color: COLORS.primaryColor,
                    fontWeight: '500',
                    fontSize: 20,
                  }}>
                  Informasi Pembeli
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Icon name="user" size={60} color={COLORS.black} />
                  <View>
                    <Text
                      style={{
                        ...FONTS.titleNormalRegular,
                        paddingLeft: 20,
                        paddingRight: 90,
                        color: COLORS.black,
                      }}>
                      Zikri
                    </Text>
                    <Text
                      style={{
                        ...FONTS.titleNormalRegular,
                        paddingLeft: 20,
                        paddingRight: 90,
                        color: COLORS.black,
                      }}>
                      Alamat: Pagersari
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FFA36E',
                      width: 50,
                      alignSelf: 'flex-end',
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: -55,
                      borderRadius: 10,
                    }}>
                    <Icon name="comment" size={30} color={COLORS.neutral1} />
                  </TouchableOpacity>
                </View>
              </View>
              {/* //====================Card Info Pembeli====================> */}
              {/* //===================Nota=====================> */}
              <Text
                style={{
                  color: COLORS.primaryColor,
                  fontWeight: '500',
                  fontSize: 20,
                  marginLeft: 12,
                  marginTop: 20,
                }}>
                Nota Pembelian
              </Text>
              <View
                style={{
                  width: 371,
                  height: SIZES.height * 0.26,
                  borderRadius: 20,
                  padding: 20,
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginBottom: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }}>
                <Image
                  source={{
                    uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/14/1452578967.jpg',
                  }}
                  style={{
                    width: 130,
                    height: SIZES.height * 0.26,
                    marginLeft: -20,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    marginTop: -21,
                  }}
                />

                <View style={{marginHorizontal: 15}}>
                  <Text style={styles.text}>Sayur Kol</Text>
                  <Text style={styles.text}>10 Ikat</Text>
                  <Text style={styles.text}>Rp 20,000.00</Text>
                  <Text style={styles.text2}>Toko Sayur Menyair </Text>
                  <Text style={styles.text2}>Blok B4 No 20</Text>
                </View>
              </View>
              {/* //========================================> */}
            </View>
          </BottomSheetScrollView>
          {/* </BottomSheetView> */}
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

export default Pengiriman;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
