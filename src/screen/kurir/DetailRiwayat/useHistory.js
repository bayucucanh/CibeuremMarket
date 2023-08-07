import {StyleSheet, Text, View} from 'react-native';
import {
  detailPesanan,
  riwayatPengiriman,
  riwayatPengirimanSelesai,
} from '../../../services';
import {useEffect} from 'react';
import {useState} from 'react';

const useDetail = ({navigation, route}) => {
  const {doneId} = route.params;
  const [data, setdata] = useState(null);

  // const getHistory = async () => {
  //   // setLoading(true);
  //   const response = await riwayatPengirimanSelesai();
  //   console.log('orders___', response.data?.data);
  //   if (response?.data?.data?.pengiriman?.length !== 0) {
  //     setHistory(
  //       response?.data?.data?.pengiriman?.filter(
  //         item => item.status_pengiriman === 'selesai',
  //       ),
  //     );
  //   }
  //   // setLoading(false);
  // };
  const getRiwayatiDetail = async () => {
    // setLoading(true);
    const response = await riwayatPengirimanSelesai(doneId);
    console.log('response___', response.data.data.pengiriman);
    setdata(response?.data?.data?.pengiriman);
    // setLoading(false);
  };

  useEffect(() => {
    getRiwayatiDetail();
    console.log('dat', data);
  }, []);

  // useEffect(() => {
  //   getDetailRiwayat();
  //   console.log(history?.tb_transaksi?.nama_belanjaan);
  // }, []);
  return [data, setdata];
};

export default useDetail;
