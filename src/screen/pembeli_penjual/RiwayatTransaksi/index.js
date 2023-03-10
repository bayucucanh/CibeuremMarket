import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from './style'
import { Headers, HistoryCard } from '../../../components'

const RiwayatTransaksi = () => {
  return (
    <ScrollView style={style.container}>
      <Headers title="Riwayat Transaksi"/>
      <HistoryCard style={{ marginTop: 32 }}/>
      <HistoryCard style={{ marginTop: 16 }}/>
    </ScrollView>
  )
}

export default RiwayatTransaksi

const styles = StyleSheet.create({})