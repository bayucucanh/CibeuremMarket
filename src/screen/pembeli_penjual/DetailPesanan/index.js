import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import style from './style';
import {COLORS, FONTS, SIZES} from '../../../constant';
import {Headers} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailPesanan = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView
        contentContainerStyle={[
          style.container,
          {paddingHorizontal: 20, paddingTop: 10},
        ]}>
        <Headers title="Detail Pesanan" />
        <View
          style={[
            style.card,
            {
              backgroundColor: COLORS.white,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://pict.sindonews.net/dyn/850/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
              }}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
            <Text
              style={{
                ...FONTS.bodyNormalBold,
                color: COLORS.black,
                textAlign: 'left',
                marginLeft: 20,
              }}>
              Pemesan : Bayu
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#FFA36E',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="chatbubble-ellipses-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...FONTS.bodyLargeBold,
            color: COLORS.black,
            marginVertical: 10,
          }}>
          Pesanan
        </Text>

        {/* Barang */}
        <View
          style={{
            borderWidth: 2,
            borderColor: COLORS.primaryColor,
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/14/1452578967.jpg',
            }}
            style={{width: 100, height: 100}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
              Nama Barang
            </Text>
            <Text>Jumlah Pesanan</Text>
            <Text>Total Harga</Text>
          </View>
        </View>

        <Text
          style={{
            ...FONTS.bodyLargeBold,
            color: COLORS.black,
            marginVertical: 10,
          }}>
          Pengiriman
        </Text>

        <View
          style={{
            borderWidth: 2,
            borderColor: COLORS.primaryColor,
            padding: 10,
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Konfirmasi Barang Sudah Dikemas
            </Text>
            <TouchableOpacity
              style={{
                width: 90,
                height: 25,
                backgroundColor: COLORS.alertSuccess,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                Konfirmasi
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 16
            }}>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Konfirmasi Barang Sudah Dikirim
            </Text>
            <TouchableOpacity
              style={{
                width: 90,
                height: 25,
                backgroundColor: COLORS.alertSuccess,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                Konfirmasi
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Konfirmasi Barang Sudah Dibayar
            </Text>
            <TouchableOpacity
              style={{
                width: 90,
                height: 25,
                backgroundColor: COLORS.alertSuccess,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{...FONTS.bodySmallBold, color: COLORS.white}}>
                Konfirmasi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 35,
            backgroundColor: COLORS.white,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: COLORS.primaryColor,
          }}>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.primaryColor}}>
            Tolak Pesanan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 35,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.white}}>
            Terima Pesanan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPesanan;

const styles = StyleSheet.create({});
