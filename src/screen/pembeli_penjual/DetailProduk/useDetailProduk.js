import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addCart, detailProduct, pengguna} from '../../../services';
import {BASE_URL, showDanger, showSuccess} from '../../../constant';

const useDetailProduk = ({navigation, route}) => {
  const {productId} = route.params;

  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(0);

  const getDetailProduct = async () => {
    setLoading(true);
    const response = await detailProduct(productId);
    setProduct(response?.data?.data?.barang);
    setLoading(false);
  };

  const buyProduct = async () => {
    const responseUser = await pengguna();

    setLoading(true);
    const formdata = new FormData();

    formdata.append('harga_belanjaan', product?.harga_barang);
    formdata.append(
      'id_pengguna',
      responseUser?.data?.data?.pengguna?.id_pengguna,
    );
    formdata.append('id_barang', product?.id_barang);

    const data = {
      harga_belanjaan: product?.harga_barang * qty,
      jumlah_belanjaan: qty,
      id_pengguna: responseUser?.data?.data?.pengguna?.id_pengguna,
      id_barang: product?.id_barang,
    };
    console.log(data);
    if (qty === 0) {
      showDanger('Silahkan Masukan Jumlah barang');
    } else {
      const response = await addCart(data);
      if (response?.status >= 200 || 201) {
        showSuccess('Barang Berhasil Ditambahkan');
      } else {
        showDanger('Barang Gagal Ditambahkan');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetailProduct();
    console.log(product?.harga_barang);
  }, []);

  const [loading, setLoading] = useState(false);

  return [loading, product, setProduct, buyProduct, qty, setQty];
};

export default useDetailProduk;
