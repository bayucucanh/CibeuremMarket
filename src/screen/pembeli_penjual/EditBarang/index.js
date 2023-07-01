import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deleteProduct, detailProduct} from '../../../services';
import {
  BASE_URL,
  COLORS,
  FONTS,
  showDanger,
  showSuccess,
} from '../../../constant';
import axios from 'axios';
import {Headers, InputText, InputTextNumeric, LoadingScreen, PhotoProfile} from '../../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import Auth from '../../../services/Auth';

const EditBarang = ({navigation, route}) => {
  const {productId} = route.params;

  const [dataBarang, setDataBarang] = useState({});
  const [loading, setLoading] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [valueOpen, setValueOpen] = useState(null);
  const [valueOpen2, setValueOpen2] = useState(null);
  const [fieldBarang, setFieldBarang] = useState(null);
  const [namaBarang, setNamaBarang] = useState('');
  const [jenisBarang, setJenisBarang] = useState('');
  const [hargaBarang, setHargaBarang] = useState(0);
  const [per, setPer] = useState('');
  const [stock, setStock] = useState(0);
  const [deskription, setDeskription] = useState('');
  const [gambarBarang, setGambarBarang] = useState('');
  const [idToko, setIdToko] = useState(0);
  const [idBarang, setIdBarang] = useState(0);

  const [items, setItems] = useState([
    {label: 'Kg', value: 'Kilogram'},
    {label: 'Liter', value: 'Liter'},
    {label: 'Item', value: 'Item'},
  ]);
  const [itemsKategori, setItemsKategori] = useState([
    {label: 'Daging Dan Ikan', value: 'Daging'},
    {label: 'Elektronik', value: 'Elektronik'},
    {label: 'Sayuran', value: 'Sayuran'},
  ]);

  const [data, setData] = useState({
    namaBarang: dataBarang?.nama_barang,
    jenisBarang: dataBarang?.jenis_barang,
    hargaBarang: dataBarang?.harga_barang,
    per: valueOpen,
    // closeHour: valueClose,
    stock: dataBarang.stok_barang,
    description: dataBarang.deskripsi_barang,
  });

  const getDataBarang = async () => {
    const response = await detailProduct(productId);
    setIdToko(response?.data?.data?.barang?.id_toko);
    setPer(response?.data?.data?.barang?.ukuran_barang);
    setJenisBarang(response?.data?.data?.barang?.jenis_barang);
    setNamaBarang(response?.data?.data?.barang?.nama_barang);
    setHargaBarang(response?.data?.data?.barang?.harga_barang);
    setDeskription(response?.data?.data?.barang?.deskripsi_barang);
    setStock(response?.data?.data?.barang?.stok_barang);
    setGambarBarang(response?.data?.data?.barang?.gambar_barang);
    if (response.status === 200) {
      // console.log('Data BBarang___', response);
      setDataBarang(response?.data?.data?.barang);
    } else {
      showDanger('Gagal Memunculkan Data Barang');
    }
    console.log('fieldBarang', fieldBarang);
    console.log('gambarBarang', gambarBarang);
    // console.log('dataBarang', dataBarang.nama_barang);
    // console.log('data', data);
  };

  const patchDataBarang = async () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append('nama_barang', namaBarang);
    formdata.append('harga_barang', hargaBarang);
    formdata.append('ukuran_barang', per);
    formdata.append('jenis_barang', jenisBarang);
    formdata.append('stok_barang', stock);
    formdata.append('deskripsi_barang', deskription);
    console.log('fieldBarang2', fieldBarang);
    if (fieldBarang !== null) {
      formdata.append('gambar_barang', {
        uri: fieldBarang.uri,
        type: fieldBarang.type,
        name: fieldBarang.fileName,
      });
    } else {
      formdata.append('gambar_barang', gambarBarang)
    }
    formdata.append('id_toko', idToko)
    console.log("formdata", formdata);
    const token = await Auth.getToken();
    const res = await axios.patch(`${BASE_URL}/pengguna/barang/${productId}`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token,
      }
    });
    console.log(res);
    if (res.status === 200) {
      showSuccess('Barang Berhasil Diubah');
      // order();
      navigation.navigate('MainApp')
    } else {
      showDanger('Barang Gagal Diubah')
    }
    console.log(res);
    setLoading(false);
  };

  const deleteBarang = async () => {
    setLoading(true);
    const response = await deleteProduct(productId);
    if (response.status === 200) {
      showSuccess('Berhasil Dihapus');
      navigation.navigate('MainApp');
    }
    setLoading(false);
  };

  useEffect(() => {
    // console.log(productId);
    getDataBarang();
    console.log(namaBarang, hargaBarang, stock, deskription, gambarBarang);
  }, []);

  return (
    <>
    <ScrollView style={[styles.container, {padding: 10}]}>
      <Headers title="Edit Barang" />
      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Nama Barang
      </Text>

      <InputText
        placeholder={'Masukan Nama Barang'}
        styleOutlined={{marginTop: 5}}
        value={namaBarang}
        onChangeText={val => setNamaBarang(val)}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Jenis Barang
      </Text>
      <DropDownPicker
        style={{
          height: 30,
          fontSize: 14,
          paddingLeft: 15,
          paddingTop: 5,
          borderRadius: 30,
          marginVertical: 5,
          borderColor: 'black',
          borderWidth: 2,
          // alignSelf: 'flex-end'
        }}
        open={open2}
        value={valueOpen2}
        items={itemsKategori}
        setOpen={setOpen2}
        setValue={setValueOpen2}
        setItems={setItemsKategori}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View style={{width: '47%'}}>
          <Text
            style={{
              ...FONTS.bodyNormalBold,
              color: COLORS.black,
              marginTop: 10,
              marginLeft: 10,
            }}>
            Harga Barang
          </Text>

          <InputTextNumeric
            type="numeric"
            value={hargaBarang}
            defaultValue={`${hargaBarang}`}
            onChangeText={val => setHargaBarang(val)}
            placeholder="Masukan Harga"
            styleOutlined={{marginTop: 5}}
          />
        </View>

        <View style={{width: '47%'}}>
          <Text
            style={{
              ...FONTS.bodyNormalBold,
              color: COLORS.black,
              marginTop: 10,
              marginLeft: 10,
            }}>
            Per
          </Text>

          <DropDownPicker
            style={{
              height: 30,
              fontSize: 14,
              paddingLeft: 15,
              paddingTop: 5,
              borderRadius: 30,
              marginVertical: 5,
              borderColor: 'black',
              borderWidth: 2,
              // alignSelf: 'flex-end'
            }}
            open={open1}
            value={valueOpen}
            items={items}
            setOpen={setOpen1}
            setValue={setValueOpen}
            setItems={setItems}
          />
        </View>
      </View>

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Stock Barang
      </Text>
      <InputTextNumeric
        type="numeric"
        defaultValue={`${stock}`}
        placeholder={'Masukan Stock'}
        styleOutlined={{marginTop: 5}}
        value={stock}
        onChangeText={val => setStock(val)}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Deskripsi Barang
      </Text>
      <InputText
        placeholder="Masukan Deskripsi Barang"
        styleOutlined={{marginTop: 5}}
        value={deskription}
        onChangeText={val => setDeskription(val)}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginVertical: 10,
          marginLeft: 10,
        }}>
        Gambar Barang
      </Text>
      <PhotoProfile
        name="image_url"
        image={{
          uri: gambarBarang ? 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-file-icon-image_1128287.jpg' : gambarBarang,
        }}
        setFieldValue={setFieldBarang}
        icon="camera"
        colorIcon={COLORS.primaryColor} 
        // styleImage={{marginTop: 20}}
      />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            borderRadius: 100,
            marginBottom: 50,
            height: 48,
            width: '45%',
            backgroundColor: COLORS.white,
            borderColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => deleteBarang()}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.primaryColor}}>
            Hapus Barang
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            borderRadius: 100,
            marginBottom: 50,
            height: 48,
            width: '45%',
            backgroundColor: COLORS.primaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => patchDataBarang()}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.white}}>
            Ubah Barang
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    {loading && <LoadingScreen />}
    </>
  );
};

export default EditBarang;

const styles = StyleSheet.create({});
