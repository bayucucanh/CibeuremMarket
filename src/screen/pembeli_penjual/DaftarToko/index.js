import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Headers, InputText} from '../../../components';
import style from './style';
import {BASE_URL, COLORS, FONTS, SIZES, showDanger, showSuccess} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import {PhotoProfile} from '../../../components';
import Auth from '../../../services/Auth';

const DaftarToko = ({navigation}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [valueOpen, setValueOpen] = useState(null);
  const [valueClose, setValueClose] = useState(null);
  const [fieldValue, setFieldValue] = useState(null);
  const [fieldSurat, setFieldSurat] = useState(null);
  const [data, setData] = useState({
    storeName: '',
    address: '',
    dayOpen: '',
    openHour: valueOpen,
    closeHour: valueClose,
    noHp: '',
    email: '',
    description: '',
  });
  const [items, setItems] = useState([
    {label: '07:00:00', value: '07:00:00'},
    {label: '08:00:00', value: '08:00:00'},
    {label: '09:00:00', value: '09:00:00'},
    {label: '10:00:00', value: '10:00:00'},
    {label: '11:00:00', value: '11:00:00'},
    {label: '12:00:00', value: '12:00:00'},
    {label: '13:00:00', value: '13:00:00'},
    {label: '14:00:00', value: '14:00:00'},
    {label: '15:00:00', value: '15:00:00'},
    {label: '16:00:00', value: '16:00:00'},
    {label: '17:00:00', value: '17:00:00'},
    {label: '18:00:00', value: '18:00:00'},
    {label: '19:00:00', value: '19:00:00'},
    {label: '20:00:00', value: '20:00:00'},
    {label: '21:00:00', value: '21:00:00'},
    {label: '22:00:00', value: '22:00:00'},
    {label: '23:00:00', value: '23:00:00'},
  ]);

  const submitStore = async (valueOpen, valueClose) => {
    setData({...data, closeHour: valueClose, openHour: valueOpen});
    if (data.openHour === null && data.closeHour === null) {
      alert('Klik Submit Sekali Lagi');
    }

    try {
      const formdata = new FormData();
      formdata.append('nama_toko', data.storeName);
      formdata.append('alamat_toko', data.address);
      formdata.append('hari_buka', data.dayOpen);
      formdata.append('jam_buka', data.openHour);
      formdata.append('jam_tutup', data.closeHour);
      formdata.append('nomor_hp_toko', data.noHp);
      formdata.append('email_toko', data.email);
      formdata.append('deskripsi_toko', data.description);
      formdata.append('gambar_toko', {
        uri: fieldValue.uri,
        type: fieldValue.type,
        name: fieldValue.fileName,
      });
      formdata.append('gambar_surat', {
        uri: fieldSurat.uri,
        type: fieldSurat.type,
        name: fieldSurat.fileName,
      });
      formdata.append('status_toko', true);

      console.log(formdata);
      const token = await Auth.getToken();
      console.log(token);
      const res = await fetch(
        // 'https://2e5d-36-74-43-165.ngrok.io/api/v1/pengguna/toko',
        `${BASE_URL}/pengguna/toko`,
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
        showSuccess('Toko Berhasil Didaftarkan');
        setFieldValue(null);
        setFieldSurat(null);
        navigation.navigate('MainApp');
      }
    } catch (error) {
      // console.log('Gagal');
      showDanger('Toko Gagal Didaftarkan')
    }
  };

  return (
    <ScrollView
      style={[style.container, {paddingHorizontal: 20, paddingVertical: 20}]}>
      <Headers title="Daftar Toko" />
      <PhotoProfile
        name="image_url"
        image={{
          uri: 'https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg',
        }}
        setFieldValue={setFieldValue}
        icon="camera"
        colorIcon={COLORS.primaryColor}
      />
      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Nama Toko
      </Text>
      <InputText
        placeholder="Masukan Nama Toko"
        value={data.storeName}
        onChangeText={val => setData({...data, storeName: val})}
        styleOutlined={{marginTop: 5}}
      />
      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Alamat Toko
      </Text>

      <InputText
        placeholder="Masukan Alamat Toko"
        styleOutlined={{marginTop: 5}}
        value={data.address}
        onChangeText={val => setData({...data, address: val})}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Hari Buka
      </Text>
      <InputText
        placeholder="Masukan Hari Buka Toko"
        styleOutlined={{marginTop: 5}}
        value={data.dayOpen}
        onChangeText={val => setData({...data, dayOpen: val})}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Jam Buka
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

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 20,
          marginLeft: 10,
        }}>
        Jam Tutup
      </Text>
      <DropDownPicker
        style={{
          height: 30,
          fontSize: 14,
          paddingLeft: 15,
          paddingTop: 5,
          borderRadius: 30,
          marginTop: 5,
          borderColor: 'black',
          borderWidth: 2,
          // alignSelf: 'flex-end'
        }}
        open={open2}
        value={valueClose}
        items={items}
        setOpen={setOpen2}
        setValue={setValueClose}
        setItems={setItems}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 30,
          marginLeft: 10,
        }}>
        Nomor Telepon Toko
      </Text>
      <InputText
        placeholder="Masukan No. Telepon Toko"
        styleOutlined={{marginTop: 5}}
        value={data.noHp}
        onChangeText={val => setData({...data, noHp: val})}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Email Toko
      </Text>
      <InputText
        placeholder="Masukan Email Toko"
        styleOutlined={{marginTop: 5}}
        value={data.email}
        onChangeText={val => setData({...data, email: val})}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Deskripis Toko
      </Text>
      <InputText
        placeholder="Masukan Deskripsi"
        styleOutlined={{marginTop: 5}}
        value={data.description}
        onChangeText={val => setData({...data, description: val})}
      />

      <Text
        style={{
          ...FONTS.bodyNormalBold,
          color: COLORS.black,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Gambar Surat Izin Pemakaian Toko
      </Text>
      <PhotoProfile
        name="image_url"
        image={{
          uri: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-file-icon-image_1128287.jpg',
        }}
        setFieldValue={setFieldSurat}
        icon="camera"
        colorIcon={COLORS.primaryColor}
        // styleImage={{marginTop: 20}}
      />

      <TouchableOpacity
        onPress={() => {
          submitStore(valueOpen, valueClose);
        }}
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
          Daftar Toko
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DaftarToko;

const styles = StyleSheet.create({});
