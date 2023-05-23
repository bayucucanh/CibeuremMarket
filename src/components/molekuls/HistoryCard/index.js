import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Separator } from '../../atoms'
import { COLORS, FONTS } from '../../../constant'

const HistoryCard = ({style, name, price, status, date}) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.black, marginBottom:4 }}>{name}</Text>
      <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>Total Harga : Rp.{price}</Text>
      <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>{status}</Text>
      <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.black }}>{date}</Text>
      <Separator />
    </TouchableOpacity>
  )
}

export default HistoryCard

const styles = StyleSheet.create({})