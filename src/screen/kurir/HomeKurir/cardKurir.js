import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constant';
import {CustomButton} from '../../../components';
import {LogoHomeKurir} from '../../../assets';

const CardKurir = ({nama, barang, toko, onPress, uri}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: uri,
        }}
        style={[styles.gambar]}
      />
      <View style={styles.shadow}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Pembeli: </Text>
          <Text style={styles.text2}>{nama}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Membeli: </Text>
          <Text style={styles.text2}>{barang}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>ditoko: </Text>
          <Text style={styles.text2}>{toko}</Text>
        </View>
      </View>
      <CustomButton
        title="Detail"
        size="small"
        enabled={true}
        buttonStyle={{marginTop: 10, marginHorizontal: 12}}
        textStyle={{marginHorizontal: 12}}
        onPress={onPress}
      />
    </View>
  );
};

export default CardKurir;

const styles = StyleSheet.create({
  text1: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  text2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    maxWidth: 150,
  },

  shadow: {
    marginHorizontal: 5,
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'space-around',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  gambar: {
    width: 67,
    height: 67,
    marginRight: 5,
    borderRadius: 50,
  },
});
