import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {Headers, InputText, PhotoProfile} from '../../../components';
import {COLORS, FONTS} from '../../../constant';
import DropDownPicker from 'react-native-dropdown-picker';

const TambahBarang = () => {
  const [open1, setOpen1] = useState(false);
  const [valueOpen, setValueOpen] = useState(null);
  const [fieldBarang, setFieldBarang] = useState(null);
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
        open={open1}
        value={valueOpen}
        items={itemsKategori}
        setOpen={setOpen1}
        setValue={setValueOpen}
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
        }}>
        <Text style={{...FONTS.bodyNormalBold, color: COLORS.white}}>
          Tambah Barang
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TambahBarang;

const styles = StyleSheet.create({});
