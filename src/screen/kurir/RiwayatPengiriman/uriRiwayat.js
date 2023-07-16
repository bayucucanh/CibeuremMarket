import {StyleSheet, Text, View} from 'react-native';
import {listPesanan} from '../../../services';
import {useEffect, useState} from 'react';

const uriRiwayat = ({navigation}) => {
  const [riwayat, setRiwayat] = useState();

  const getRiwayat = async () => {
    const response = await listPesanan();
    console.log(response.data);
    // console.log(response?.data);
    setRiwayat(response.data);
  };

  useEffect(() => {
    getRiwayat();
  }, []);

  return [riwayat, setRiwayat];
};

export default uriRiwayat;

const styles = StyleSheet.create({});
