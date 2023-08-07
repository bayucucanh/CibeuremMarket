import {StyleSheet, Text, View} from 'react-native';
import {
  ambilPengiriman,
  detailPengiriman,
  detailPesanan,
  kurir,
} from '../../../services';
import {useEffect} from 'react';
import {useState} from 'react';

const usePengiriman = ({navigation, route}) => {
  const {transaksiId} = route.params;
  const {idPengiriman} = route.params;

  const [pengiriman, setPengiriman] = useState([]);

  const getPengiriman = async () => {
    const response = await detailPengiriman(idPengiriman);
    console.log(response);
    console.log(response?.data?.data?.pengiriman);
    setPengiriman(response?.data?.data?.pengiriman);
    console.log(
      response?.data?.data?.pengiriman?.tb_transaksi?.tb_toko?.longitude_toko,
    );
  };

  useEffect(() => {
    getPengiriman();

    console.log(pengiriman);
  }, []);
  return [pengiriman, setPengiriman];
};

export default usePengiriman;
