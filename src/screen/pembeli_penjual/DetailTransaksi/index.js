import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailTransaksi = ({route}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>DetailTransaksi</Text>
    </View>
  )
}

export default DetailTransaksi

const styles = StyleSheet.create({})