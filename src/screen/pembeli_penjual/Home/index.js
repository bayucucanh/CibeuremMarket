import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductCard, SearchBar} from '../../../components';
import useHome from './useHome';
import style from './style';

const Home = ({navigation}) => {
  const [searchProduct, setSearchProduct] = useHome(navigation);

  return (
    <ScrollView style={style.container}>
      <SearchBar onChangeText={setSearchProduct} value={searchProduct} />
      <View style={{ marginTop: 22, marginHorizontal: 19, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
