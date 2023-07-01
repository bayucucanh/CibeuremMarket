import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS } from '../../../constant';
import { Separator } from '../../atoms';

const ListButton = ({onPress, title, iconName, isSeparate, style}) => {
  return (
    <>
    <TouchableOpacity style={[style, { flexDirection: 'row' }]} onPress={onPress}>
      <View style={{ width: 30 }}>
        <Icon name={iconName} size={25} color={COLORS.black}/>
      </View>
      <Text style={{ marginLeft: 15, color: COLORS.black, ...FONTS.bodyNormalMedium }}>{title}</Text>
    </TouchableOpacity>
    {isSeparate && (<Separator />)}
    </>
  )
}

export default ListButton

const styles = StyleSheet.create({})