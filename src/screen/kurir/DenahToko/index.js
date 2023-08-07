import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constant';
import {Headers} from '../../../components';

const DenahToko = ({navigation}) => {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleStorePress = storeName => {
    setSelectedStore(storeName);
  };

  const renderStore = (row, storeIndex) => {
    const storeName = `Toko ${row}`;
    const isSelected = storeName === selectedStore;

    return (
      <TouchableOpacity
        key={storeName}
        style={[
          styles.store,
          isSelected ? styles.selectedStore : styles.availableStore,
        ]}
        onPress={() => handleStorePress(storeName)}>
        <Text style={styles.storeText}>{storeName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Headers title="Denah" />
      <View style={styles.container}>
        <View style={styles.storeMap}>
          <View style={styles.row}>
            {renderStore('Abadi', 0)}
            {renderStore('Kenal', 1)}
            <View style={styles.space} />
            {renderStore('Jaya', 2)}
            {renderStore('Cerah', 3)}
          </View>
          {/* Render baris-baris lainnya */}
          {/* Contoh: */}
          <View style={styles.row}>
            {renderStore('Daging', null)}
            {renderStore('Ayam', null)}
            <View style={styles.space} />
            {renderStore('SAyur', 2)}
            {renderStore('Jamur', 3)}
          </View>
          <View style={styles.row}>
            {renderStore('Bumbu', 0)}
            {renderStore('Plastik', 1)}
            <View style={styles.space} />
            {renderStore('seafood', 2)}
            {renderStore('Bakso', 3)}
          </View>
          <View style={styles.row}>
            {renderStore('Ikan', 0)}
            {renderStore('Buah', 1)}
            <View style={styles.space} />
            {renderStore('Makanan', 2)}
            {renderStore('Minuman', 3)}
          </View>
        </View>
        <View style={styles.borderInfo}>
          <Icon name="map" size={54} color={COLORS.black} />
          <View>
            <Text style={styles.textTittle2}>Lokasi Barang</Text>
            {selectedStore && (
              <Text style={styles.selectedStoreText}>
                Nama Toko: {selectedStore}
              </Text>
            )}
          </View>
        </View>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('DetailPengiriman')}
          style={{marginHorizontal: 90}}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Lakukan pengiriman</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  path: {
    width: '100%',
    height: 20,
    backgroundColor: 'black',
    marginBottom: 16,
  },
  storeMap: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    width: 345,
    height: 400,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  store: {
    width: 60,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    textAlign: 'center',
  },
  storeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  availableStore: {
    backgroundColor: 'grey',
  },
  selectedStore: {
    backgroundColor: 'red',
  },
  space: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
  },
  selectedStoreText: {
    // marginTop: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  borderInfo: {
    width: 331,
    height: 110,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingVertical: 23,
  },
  textTittle2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  button: {
    width: 180,
    height: 60,
    backgroundColor: '#8AAC00',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
});

export default DenahToko;
