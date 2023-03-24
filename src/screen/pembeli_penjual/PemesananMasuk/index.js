import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Headers } from '../../../components'
import style from './style'
import { COLORS, FONTS } from '../../../constant'
import Icon from 'react-native-vector-icons/Ionicons';

const PemesananMasuk = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={[style.container, {paddingHorizontal: 20, paddingTop: 10, flex: 1}]}>
      <Headers title="Pesanan Masuk"/>
      <TouchableOpacity style={[style.card, {backgroundColor: COLORS.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]} onPress={() => navigation.navigate('DetailPesanan')}>
        <Image source={{ uri: 'https://pict.sindonews.net/dyn/850/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg' }} style={{width: 50, height: 50, borderRadius: 50}}/>
        <View>
          <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.black }}>Pemesan : Bayu</Text>
          <Text style={{ ...FONTS.bodyNormalMedium }}>Daging Sapi 1 Kg</Text>
          <Text style={{ ...FONTS.bodyNormalMedium }}>Harga : Rp. 180.000</Text>
        </View>
        <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#FFA36E', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name='chatbubble-ellipses-outline' size={40} color="white"/>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default PemesananMasuk

const styles = StyleSheet.create({})