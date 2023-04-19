import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import {Headers, InputText, PhotoProfile} from '../../../components';
import {BASE_URL, COLORS, FONTS, showDanger, showSuccess} from '../../../constant';
import DropDownPicker from 'react-native-dropdown-picker';
import Auth from '../../../services/Auth';

const TambahBarang = ({navigation, route}) => {

  const { idToko } = route.params;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [valueOpen, setValueOpen] = useState(null);
  const [valueOpen2, setValueOpen2] = useState(null);
  const [fieldBarang, setFieldBarang] = useState(null);

  const [data, setData] = useState({
    namaBarang: '',
    jenisBarang: valueOpen2,
    hargaBarang: '',
    per: valueOpen,
    // closeHour: valueClose,
    stock: 0,
    description: '',
  });

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

  useEffect(() => {
    console.log(idToko);
  }, [])
  
  const submitProduct= async (valueOpen, valueOpen2) => {
    setData({...data, per: valueOpen, jenisBarang: valueOpen2});
    if (data.per === null && data.jenisBarang === null && data.namaBarang && data.hargaBarang && data.stock) {
      alert('Klik Submit Sekali Lagi');
    }

    try {
      const formdata = new FormData();
      formdata.append('nama_barang', data.namaBarang);
      formdata.append('harga_barang', data.hargaBarang);
      formdata.append('ukuran_barang', data.per);
      formdata.append('jenis_barang', data.jenisBarang);
      formdata.append('stok_barang', parseInt(data.stock));
      formdata.append('deskripsi_barang', data.description);
      formdata.append('gambar_barang', {
        uri: fieldBarang.uri,
        type: fieldBarang.type,
        name: fieldBarang.fileName,
      });
      formdata.append('id_toko', idToko);

      console.log(formdata);
      const token = await Auth.getToken();
      const res = await fetch(
        // 'https://2e5d-36-74-43-165.ngrok.io/api/v1/pengguna/toko',
        `${BASE_URL}/pengguna/barang`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          },
          body: formdata,
        },
      );
      console.log(res);
      if (res.status >= 200 || 201) {
        showSuccess('Barang Berhasil Ditambahkan');
        setFieldBarang(null)
        navigation.navigate('MainApp');
      }
    } catch (error) {
      // console.log('Gagal');
      showDanger('Barang Gagal Ditambahkan')
    }
  };

  return (
    <ScrollView style={style.container}>
      <Headers title="Tambah Barang" />

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
        placeholder="Masukan Nama Barang"
        styleOutlined={{marginTop: 5}}
        value={data.namaBarang}
        onChangeText={val => setData({...data, namaBarang: val})}
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
          <InputText
            placeholder="Masukan Harga"
            styleOutlined={{marginTop: 5}}
            value={data.hargaBarang}
            onChangeText={val => setData({...data, hargaBarang: val})}
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
      <InputText
        placeholder="Masukan Stock Barang"
        styleOutlined={{marginTop: 5}}
        value={data.stock}
        onChangeText={val => setData({...data, stock: val})}
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
        value={data.description}
        onChangeText={val => setData({...data, description: val})}
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
          uri: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-file-icon-image_1128287.jpg',
        }}
        setFieldValue={setFieldBarang}
        icon="camera"
        colorIcon={COLORS.primaryColor}
        // styleImage={{marginTop: 20}}
      />

<TouchableOpacity
        style={{
          marginTop: 20,
          borderRadius: 100,
          marginBottom: 50,
          height: 48,
          width: '100%',
          backgroundColor: COLORS.primaryColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => submitProduct(valueOpen, valueOpen2)}
        >
        <Text style={{...FONTS.bodyNormalBold, color: COLORS.white}}>
          Tambah Barang
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TambahBarang;

const styles = StyleSheet.create({});
