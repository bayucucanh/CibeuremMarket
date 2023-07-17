import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Headers} from '../../../components';
import style from './style';
import {COLORS, FONTS, SIZES} from '../../../constant';
import Icon from 'react-native-vector-icons/Ionicons';
import {incomingsOrder} from '../../../services';

const PemesananMasuk = ({navigation}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOrder = async () => {
    setLoading(true);
    const response = await incomingsOrder();
    console.log('orders___', response.data?.data);
    if (response?.data?.data?.transaksi?.length !== 0) {
      setOrders(response?.data?.data?.transaksi?.filter((item) => item.status_transaksi !== "dibayar" && item.status_transaksi !== "rejected"));
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrder();
    console.log("orders", orders);
  }, []);

  return (
    <View
      style={[
        style.container,
        {paddingHorizontal: 20, paddingTop: 10, flex: 1},
      ]}>
      <Headers title="Pesanan Masuk" />
      <FlatList
        data={orders}
        keyExtractor={(item, index) => item.id + index.toString()}
        ListEmptyComponent={<Text>Kosong</Text>}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              {
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                borderRadius: 20,
                padding: 15,
                position: 'relative',
                // marginHorizontal: 20,
                marginTop: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 1,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,

                elevation: 2,
              },
            ]}
            onPress={() => navigation.navigate('DetailPesanan', {id_transaksi: item.id_transaksi})}>
            <Image
              source={{
                uri: item?.tb_pengguna?.foto_pengguna === null ? "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=1200" : item?.tb_pengguna?.foto_pengguna,
              }}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
            <View style={{marginLeft: 18}}>
              <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
                Pemesan : {item?.tb_pengguna?.nama_pengguna}
              </Text>
              <Text style={{...FONTS.bodyNormalMedium}}>{item?.nama_belanjaan}</Text>
              <Text style={{...FONTS.bodyNormalMedium}}>
                Harga : {item?.total_harga}
              </Text>
            </View>
            {/* <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#FFA36E', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name='chatbubble-ellipses-outline' size={40} color="white"/>
        </TouchableOpacity> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PemesananMasuk;

const styles = StyleSheet.create({});
