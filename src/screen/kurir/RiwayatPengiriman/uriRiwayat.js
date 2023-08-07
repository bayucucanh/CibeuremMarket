import {StyleSheet, Text, View} from 'react-native';
import {listPesanan, riwayatPengiriman} from '../../../services';
import {useEffect, useState} from 'react';

const uriRiwayat = ({navigation}) => {
  const [riwayat, setRiwayat] = useState();
  const [idRiwayat, setIdRiwayat] = useState();

  const getRiwayat = async () => {
    const response = await riwayatPengiriman();
    console.log(response?.data?.data?.pengiriman);
    // console.log(response?.data);
    setRiwayat(response?.data?.data?.pengiriman);
  };
  // const getIdRiwayat = async () => {
  //   // setLoading(true);
  //   const response = await riwayatPengiriman();
  //   console.log('response', response?.data?.data);
  //   if (response.status === 200) {
  //     if (response?.data?.data.length === 0) {
  //       setRiwayat(response?.data?.data);
  //       console.log(response?.data?.data);
  //     } else {
  //       setRiwayat(
  //         response?.data?.data?.pengiriman.filter(
  //           item => item.status_pengiriman === 'selesai',
  //         ),
  //       );
  //       console.log(
  //         response?.data?.data?.pengiriman.findIndex(
  //           item => item.id_pengiriman,
  //         ),
  //       );
  //     }
  //   }
  //   // setLoading(false);
  // };
  useEffect(() => {
    getRiwayat();
    // getIdRiwayat();
  }, []);

  return [riwayat, setRiwayat];
};

export default uriRiwayat;

const styles = StyleSheet.create({});
