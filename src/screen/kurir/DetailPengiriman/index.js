import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {CustomButton, Headers} from '../../../components';
import {COLORS} from '../../../constant';

const DetailPengiriman = ({navigation}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
      }}>
      <Headers title="Detail Pengiriman" />
      <View>
        <View
          style={{
            width: 350,
            height: 250,
            borderRadius: 20,
            borderColor: 'red',
            borderWidth: 2,
            padding: 20,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            marginBottom: 18,
            marginLeft: 6,
          }}>
          <Image
            source={{
              uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/14/1452578967.jpg',
            }}
            style={{
              width: 130,
              height: 247,
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

            <CustomButton
              title="Denah Toko"
              size="small"
              enabled={true}
              buttonStyle={{
                marginTop: 30,
                paddingHorizontal: 20,
                marginLeft: 25,
              }}
              textStyle={{marginHorizontal: 12}}
              onPress={() => navigation.navigate('DenahToko')}
            />
          </View>
        </View>
        {/* ===============================> */}
        <View
          style={{
            width: 350,
            height: 250,
            borderRadius: 20,
            borderColor: 'red',
            borderWidth: 2,
            padding: 20,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            marginBottom: 18,
            marginLeft: 6,
          }}>
          <Image
            source={{
              uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/703x0/webp/photo/2023/06/19/3407697064.jpg',
            }}
            style={{
              width: 130,
              height: 247,
              marginLeft: -20,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              marginTop: -21,
            }}
          />

          <View style={{marginHorizontal: 15}}>
            <Text style={styles.text}>Daging</Text>
            <Text style={styles.text}>10 Kg</Text>
            <Text style={styles.text}>Rp 120,000.00</Text>
            <Text style={styles.text2}>Toko Jagal Abadi </Text>
            <Text style={styles.text2}>Blok A5 No 15</Text>

            <CustomButton
              title="Denah Toko"
              size="small"
              enabled={true}
              buttonStyle={{
                marginTop: 30,
                paddingHorizontal: 20,
                marginLeft: 25,
              }}
              textStyle={{marginHorizontal: 12}}
              onPress={() => navigation.navigate('DenahToko')}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: 350,
          height: 150,
          borderRadius: 20,
          borderColor: 'red',
          borderWidth: 2,
          padding: 20,
          backgroundColor: '#FFFFFF',
          marginBottom: 18,
          marginLeft: 6,
          justifyContent: 'center',
          alignContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.text2}>Total Harga : Rp. 140,000.00</Text>
          <Text style={styles.text}>Pembayaran Menggunakan Saldo</Text>
          <Text style={styles.text2}>Pembeli : Zikri</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Pengiriman')}
        style={{marginHorizontal: 90}}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Ambil permintaan pengiriman</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailPengiriman;

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 8,
  },
  text2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  button: {
    width: 180,
    height: 60,
    backgroundColor: '#8AAC00',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
});
