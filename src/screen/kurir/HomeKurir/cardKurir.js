import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constant';
import {CustomButton} from '../../../components';

const CardKurir = ({tittle, jmlToko, jarak}) => {
  return (
    <View
      style={{
        width: 350,
        height: 100,
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginBottom: 18,
        justifyContent: 'space-around',
      }}>
      <Icon name="user-circle" size={54} color={COLORS.black} />

      <View style={{marginHorizontal: 15}}>
        <Text style={styles.text}>Pemesan : {tittle}</Text>
        <Text style={styles.text}>Membeli di {jmlToko} Toko</Text>
        <Text style={styles.text}>Jarak rumah ± {jarak} KM</Text>
      </View>
      <CustomButton
        title="Detail"
        size="small"
        enabled={true}
        buttonStyle={{marginTop: 10, marginHorizontal: 12}}
        textStyle={{marginHorizontal: 12}}
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
});
