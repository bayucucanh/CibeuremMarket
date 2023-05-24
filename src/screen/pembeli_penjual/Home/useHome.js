import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { listProduct } from '../../../services';

const useHome = ({navigation}) => {
  const [searchProduct, setSearchProduct] = useState('')
  const [prouducts, setProduct] = useState([])

  const getProducts = async () => {
    // const token = await Auth.getToken();
    // console.log('token', token);
    const response = await listProduct();
    console.log(response?.data);
    setProduct(response?.data?.data?.barang);
  };

  useEffect(() => {
    getProducts()
  }, [])

  return [
    searchProduct,
    setSearchProduct,
    prouducts,
    setProduct
  ]
}

export default useHome

const styles = StyleSheet.create({})