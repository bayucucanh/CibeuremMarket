import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { detailProduct } from '../../../services';

const useDetailProduk = ({navigation, route}) => {

  const { productId } = route.params;

  const [product, setProduct] = useState([])

  const getDetailProduct = async () => {
    setLoading(true)
    const response = await detailProduct(productId);
    console.log(response?.data?.data?.barang);
    setProduct(response?.data?.data?.barang)
    setLoading(false)
  }

  useEffect(() => {
    getDetailProduct()
  }, [])
  

  const [loading, setLoading] = useState(false);

  return [loading, product, setProduct];
};

export default useDetailProduk;
