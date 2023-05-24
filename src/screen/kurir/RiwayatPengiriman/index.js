import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {Gap, HistoryDrive, ListButton, Separator} from '../../../components';
import {COLORS, FONTS, SIZES} from '../../../constant';

const RiwayatPengiriman = () => {
  return (
    <View style={style.container}>
      <View style={{marginTop: 47}}>
        <HistoryDrive name={'Ari'} store={'1'} number={'3'} distance={'KM'} />
        <HistoryDrive name={'Ari'} store={'1'} number={'3'} distance={'KM'} />
        <HistoryDrive name={'Ari'} store={'1'} number={'3'} distance={'KM'} />
      </View>
    </View>
  );
};

export default RiwayatPengiriman;
