import {Text, View} from 'react-native';
import React, {useState} from 'react';

const useDetailProduk = ({navigation}) => {

  const [loading, setLoading] = useState(false);

  return [loading];
};

export default useDetailProduk;
