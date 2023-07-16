import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constant';
import {CustomButton} from '../../../components';

const CardKurir = ({customerName, quantityStoreBuy, distance, onPress}) => {
  return (
    <View style={styles.card}>
      <Icon name="user-circle" size={54} color={COLORS.black} />

      <View style={styles.shadow}>
        <Text style={styles.text}>Pemesan : {customerName}</Text>
        <Text style={styles.text}>Membeli di {quantityStoreBuy} Toko</Text>
        <Text style={styles.text}>Jarak rumah ± {distance} KM</Text>
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
  text: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
  },

  shadow: {
    marginHorizontal: 15,
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
});
