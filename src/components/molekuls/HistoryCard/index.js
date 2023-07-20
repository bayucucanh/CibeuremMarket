import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Separator } from '../../atoms'
import { COLORS, FONTS, formatRupiah } from '../../../constant'

const HistoryCard = ({style, name, price, status, date, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.black, marginBottom:4 }}>{name}</Text>
        <Text style={{ ...FONTS.bodySmallMedium, color: status !== "selesai" ? COLORS.black : COLORS.alertSuccess, textTransform: 'capitalize' }}>{status}</Text>
      </View>
        <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>Total Harga : {formatRupiah(price)}</Text>
        <Text style={{ ...FONTS.bodySmallMedium, color: COLORS.black }}>{date}</Text>
      <Separator />
    </TouchableOpacity>
  )
}

export default HistoryCard

const styles = StyleSheet.create({})