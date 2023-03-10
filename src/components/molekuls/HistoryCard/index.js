import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Separator } from '../../atoms'
import { COLORS, FONTS } from '../../../constant'

const HistoryCard = ({style}) => {
  return (
    <View style={style}>
      <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.black, marginBottom:4 }}>Sirloin</Text>
      <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>Total Harga : Rp.160.000.00</Text>
      <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>Barang Sudah Sampai</Text>
      <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>Rabu, 08 Juni 2021</Text>
      <Separator />
    </View>
  )
}

export default HistoryCard

const styles = StyleSheet.create({})