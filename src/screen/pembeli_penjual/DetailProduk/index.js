import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useDetailProduk from './useDetailProduk';
import style from './style';

const DetailProduk = ({navigation}) => {
  const [loading] = useDetailProduk({navigation});

  return (
    <>
      <ScrollView contentContainerStyle={style.container}>
        <Text>DetailProduk</Text>
      </ScrollView>
      {/* {
        loading && (
          <Loading
        )
      } */}
    </>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({});
