import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import { empty } from '../../../assets/image'
import { empty } from '../../../assets';
import { COLORS, FONTS, SIZES } from '../../../constant'
import Icon from 'react-native-vector-icons/Feather';

const Empty = ({header, body, onPress}) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image source={empty} />
      <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black, marginVertical: SIZES.height * 0.01 }}>{header}</Text>
      <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.black, marginVertical: SIZES.height * 0.01, textAlign: 'center', maxWidth: SIZES.height * 0.5 }}>Apakah kamu pedagang di Pasar Cibeureum Ciwidey? Daftarkan tokomu agar kamu dapat berjualan diaplikasi Cibeureum Market!</Text>
      <TouchableOpacity onPress={onPress} style={{ borderWidth: 2, borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 14}}>
        <Icon name='plus-circle' size={40} color='black' />        
        <Text style={{ ...FONTS.bodySmallBold, color: COLORS.black }}>Daftar Toko</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Empty