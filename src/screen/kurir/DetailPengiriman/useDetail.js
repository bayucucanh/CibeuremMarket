import {StyleSheet, Text, View} from 'react-native';
import {ambilPengiriman, detailPesanan, kurir} from '../../../services';
import {useEffect} from 'react';
import {useState} from 'react';

const useDetail = ({navigation, route}) => {
  const {transaksiId} = route.params;

  const [pesanan, setPesanan] = useState([]);
  const [idKurir, setIdKurir] = useState([]);

  const getDetailPesanan = async () => {
    const response = await detailPesanan(transaksiId);
    console.log(response?.data?.data?.transaksi);
    setPesanan(response?.data?.data?.transaksi);
  };
  const getMe = async () => {
    const response = await kurir();
    console.log(response?.data?.data?.kurir.id_kurir);
    setIdKurir(response?.data?.data?.kurir.id_kurir);
  };

  useEffect(() => {
    getDetailPesanan();
    getMe();
    console.log(pesanan);
  }, []);
  return [pesanan, setPesanan, idKurir, setIdKurir];
};

export default useDetail;
