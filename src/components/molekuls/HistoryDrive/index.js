import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Separator} from '../../atoms';
import {COLORS, FONTS} from '../../../constant';
import CustomButton from '../CustomButton';

const HistoryDrive = ({style, nama, jml_belanja, toko, onPress, uri}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View
        style={{
          width: 350,
          height: 100,
          borderRadius: 20,
          padding: 10,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Image
          source={{
            uri: uri,
          }}
          style={[styles.gambar]}
        />
        <View>
          <Text
            style={{
              ...FONTS.bodyNormalBold,
              color: COLORS.black,
              marginBottom: 4,
            }}>
            Pemesan: {nama}
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Jumlah Barang: {jml_belanja}
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Nama Toko: {toko}
          </Text>
        </View>
        {/* <View>
          <CustomButton
            title="Detail"
            size="small"
            enabled={true}
            onPress={onPress}
            buttonStyle={{marginTop: 20, marginHorizontal: 80}}
            textStyle={{marginHorizontal: 12}}
          />
        </View> */}
      </View>
      <Separator />
    </TouchableOpacity>
  );
};

export default HistoryDrive;

const styles = StyleSheet.create({
  gambar: {
    width: 80,
    height: 80,
    marginRight: 30,
    borderRadius: 10,
  },
});
