import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import { COLORS, FONTS } from '../../../constant'

const Toggle = ({label, color}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
        {label ? (
          <Text style={{ ...FONTS.bodySmallMedium, color: COLORS.white}}>{label}</Text>
        ) : null}
      </View>
  )
}

export default Toggle

const styles = StyleSheet.create({
  container: {
    // height: 50,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    // opacity: 0.7
  }
})