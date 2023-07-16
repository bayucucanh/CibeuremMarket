import {StyleSheet, Text, View} from 'react-native';
import {listPesanan} from '../../../services';
import {useEffect, useState} from 'react';

const uriHome = ({navigation}) => {
  const [pesanan, setPesanan] = useState();

  const getPesanan = async () => {
    const response = await listPesanan();
    console.log(response.data);
    // console.log(response?.data);
    setPesanan(response.data);
  };

  useEffect(() => {
    getPesanan();
  }, []);

  return [pesanan, setPesanan];
};

export default uriHome;

const styles = StyleSheet.create({});
