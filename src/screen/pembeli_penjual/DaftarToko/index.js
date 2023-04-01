import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Headers, InputText} from '../../../components';
import style from './style';
import {COLORS, FONTS, SIZES} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
//import TimePicker from the package we installed
// import TimePicker from 'react-native-simple-time-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const DaftarToko = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '07:00', value: '07:00'},
    {label: '08:00', value: '08:00'},
    {label: '09:00', value: '09:00'},
    {label: '10:00', value: '10:00'},
    {label: '11:00', value: '11:00'},
    {label: '12:00', value: '12:00'},
    {label: '13:00', value: '13:00'},
    {label: '14:00', value: '14:00'},
  ]);

  return (
    <View style={[style.container, {paddingHorizontal: 20, paddingTop: 10}]}>
      <Headers title="Daftar Toko" />
      <TouchableOpacity
        style={{
          width: 150,
          height: 150,
          borderWidth: 3,
          borderColor: COLORS.primaryColor,
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Icon name="file-picture-o" size={90} color={COLORS.primaryColor} />
        <Text
          style={{
            ...FONTS.bodyNormalBold,
            color: COLORS.primaryColor,
            marginTop: 8,
          }}>
          Tambah Foto Profil
        </Text>
      </TouchableOpacity>
      <InputText placeholder="Nama Toko" />
      <InputText placeholder="Alamat Toko" styleOutlined={{marginTop: 10}} />
      <InputText placeholder="Hari Buka" styleOutlined={{marginTop: 10}} />
      <DropDownPicker
        style={{
          height: 30,
          fontSize: 14,
          paddingLeft: 15,
          paddingTop: 5,
          borderRadius: 30,
          marginVertical: 10,
          borderColor: COLORS.primaryColor,
          // alignSelf: 'flex-end'
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <DropDownPicker
        style={{
          height: 30,
          fontSize: 14,
          paddingLeft: 15,
          paddingTop: 5,
          borderRadius: 30,
          marginTop: 20,
          borderColor: COLORS.primaryColor,
          // alignSelf: 'flex-end'
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <InputText placeholder="No Telepon" styleOutlined={{marginTop: 30}} />
      <InputText placeholder="Email" styleOutlined={{marginTop: 10}} />

      {/* <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        /> */}
    </View>
  );
};

export default DaftarToko;

const styles = StyleSheet.create({});
