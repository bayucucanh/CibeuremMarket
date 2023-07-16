import {View, Text, FlatList} from 'react-native';
import React from 'react';
import style from './style';
import {Gap, HistoryDrive, ListButton, Separator} from '../../../components';
import {COLORS, FONTS, SIZES} from '../../../constant';
import uriRiwayat from './uriRiwayat';

const RiwayatPengiriman = ({navigation}) => {
  const [riwayat, setRiwayat] = uriRiwayat({navigation});
  return (
    <View style={style.container}>
      <View
        style={{
          marginTop: 47,
          alignItems: 'baseline',
        }}>
        <Text
          style={{
            ...FONTS.titleLargeBold,
            // fontWeight: '700',
            // fontSize: 20,
            // lineHeight: 30,
            color: COLORS.primaryColor,
          }}>
          Riwayat Pengiriman
        </Text>
        <FlatList
          data={riwayat}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          style={{paddingTop: 20}}
          renderItem={({item}) => (
            <HistoryDrive
              customerName={item.customerName}
              quantityStoreBuy={item.quantityStoreBuy}
              distance={item.distance}
              onPress={() => navigation.navigate('DetailRiwayat')}
            />
          )}
        />
        {/* <HistoryDrive
          name={'Zikri'}
          store={'1'}
          number={'3'}
          distance={'KM'}
          onPress={() => navigation.navigate('DetailRiwayat')}
        />
        <HistoryDrive
          name={'Zikri'}
          store={'2'}
          number={'3'}
          distance={'KM'}
          onPress={() => navigation.navigate('DetailRiwayat')}
        />
        <HistoryDrive
          name={'Zikri'}
          store={'4'}
          number={'3'}
          distance={'KM'}
          onPress={() => navigation.navigate('DetailRiwayat')}
        /> */}
      </View>
    </View>
  );
};

export default RiwayatPengiriman;
