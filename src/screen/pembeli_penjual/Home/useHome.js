import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { listProduct, listProductBySearch } from '../../../services';
import { useIsFocused } from '@react-navigation/native';

const useHome = ({navigation}) => {
  const isFocused = useIsFocused();
  const [searchProduct, setSearchProduct] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [prouducts, setProduct] = useState([])

  const getProducts = async () => {
    // const token = await Auth.getToken();
    // console.log('token', token);
    const response = await listProduct();
    console.log(response?.data);
    setProduct(response?.data?.data?.barang);
  };

  const getProductsBySearch = async () => {
    // const token = await Auth.getToken();
    // console.log('token', token);
    const response = await listProductBySearch(searchProduct);
    console.log(response?.data);
    setProduct(response?.data?.data?.barang);
  };

  const Refresh = () => {
    setRefresh(true);
    getProducts();
    setRefresh(false);
  }

  useEffect(() => {
    if (isFocused) {
      getProducts();
    }
  }, [isFocused])

  return [
    searchProduct,
    setSearchProduct,
    prouducts,
    setProduct,
    getProducts,
    refresh,
    setRefresh,
    Refresh
  ]
}

export default useHome

const styles = StyleSheet.create({})