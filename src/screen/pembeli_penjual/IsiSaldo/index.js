import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, Headers, Separator} from '../../../components';
import style from './style';
import {COLORS, FONTS} from '../../../constant';
import DropDownPicker from 'react-native-dropdown-picker';

const IsiSaldo = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mandiri', value: 'mandiri'},
    {label: 'BRI', value: 'bri'},
  ]);

  return (
    <View style={style.container}>
      <Headers title="Isi Saldo" />

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
          Saldo Saat Ini :{' '}
        </Text>
        <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
          Rp.850.000.00
        </Text>
      </View>
      <Separator />

      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
          Isi Saldo Sebanyak
        </Text>
        <TextInput
          placeholder="250000"
          placeholderTextColor="black"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 20,
            height: 30,
            width: 141,
            fontSize: 14,
            paddingLeft: 15,
            paddingTop: 5,
          }}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FONTS.bodyNormalBold, color: COLORS.black}}>
          Pilih Metode Pembayaran
        </Text>
        <DropDownPicker
          style={{ height: 30,
            width: 141,
            fontSize: 14,
            paddingLeft: 15,
            paddingTop: 5,
            // alignSelf: 'flex-end'
            marginLeft: 30
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <CustomButton
          // onPress={handleSubmit}
          title="Bayar Sekarang"
          // enabled={isValid && !errors.email && !errors.password && dirty}
          enabled={true}
          buttonStyle={{marginTop: 50}}
        />
    </View>
  );
};

export default IsiSaldo;

const styles = StyleSheet.create({});
