import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import style from './style'
import { Headers, HistoryCard } from '../../../components'
import { myTransaction } from '../../../services'
import { SIZES, COLORS, FONTS } from '../../../constant'

const RiwayatTransaksi = ({navigation, route}) => {

  const {status} = route.params;

  const [transaction, setTransaction] = useState([])
  const [loading, setLoading] = useState(false)

  const getMyTransaction = async () => {
    setLoading(true)
    const response = await myTransaction();
    console.log("response", response?.data?.data.length === 0);
    if (response.status === 200) {
      if (response?.data?.data.length === 0) {
        setTransaction(response?.data?.data);
      } else {
        setTransaction(response?.data?.data.filter((item) => item.status_transaksi === status));
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    getMyTransaction();
    console.log(transaction);
  }, [])
  

  return (
    <View style={style.container}>
      <Headers title="Riwayat Transaksi"/>
      <FlatList
          data={transaction}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          ListEmptyComponent={<Text>Transaksi Kosong</Text>}
          renderItem={({item}) => (
            <HistoryCard onPress={() => navigation.navigate("DetailTransaksi", {id: 1})} name={item.nama_belanjaan} price={item.harga_belanjaan} status={item.status_transaksi} date={item.tanggal_transaksi} style={{ marginTop: 32 }}/>
          )}
        />
    </View>
  )
}

export default RiwayatTransaksi

const styles = StyleSheet.create({})