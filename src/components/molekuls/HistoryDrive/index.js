import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Separator} from '../../atoms';
import {COLORS, FONTS} from '../../../constant';
import CustomButton from '../CustomButton';

const HistoryDrive = ({
  style,
  customerName,
  quantityStoreBuy,
  distance,
  onPress,
}) => {
  return (
    <TouchableOpacity style={style}>
      <View
        style={{
          width: 350,
          height: 100,
          borderRadius: 20,
          padding: 10,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text
            style={{
              ...FONTS.bodyNormalBold,
              color: COLORS.black,
              marginBottom: 4,
            }}>
            Pemesan: {customerName}
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Membeli di {quantityStoreBuy} Toko
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Jarak Rumah ± {distance} KM
          </Text>
        </View>
        <View>
          <CustomButton
            title="Detail"
            size="small"
            enabled={true}
            onPress={onPress}
            buttonStyle={{marginTop: 20, marginHorizontal: 80}}
            textStyle={{marginHorizontal: 12}}
          />
        </View>
      </View>
      <Separator />
    </TouchableOpacity>
  );
};

export default HistoryDrive;

const styles = StyleSheet.create({});
