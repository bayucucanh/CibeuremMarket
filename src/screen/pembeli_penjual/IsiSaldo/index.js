import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  CustomButton,
  Headers,
  InputDropdown,
  InputText,
  LoadingScreen,
  SaldoButton,
  Separator,
} from '../../../components';
import style from './style';
import {BASE_URL, COLORS, FONTS, formatRupiah, showSuccess} from '../../../constant';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Auth from '../../../services/Auth';
import axios from 'axios';
// import DropDownPicker from 'react-native-dropdown-picker';

const IsiSaldo = ({route}) => {

  const {id_saldo} = route.params;
  const {sisa_saldo} = route.params;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [active, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [saldo, setSaldo] = useState(0);
  const [mySaldo, setMySaldo] = useState(0);
  const [biayaAdmin, setBiayaAdmin] = useState(2500);
  const [items, setItems] = useState([
    {label: 'Mandiri', value: 'mandiri'},
    {label: 'BRI', value: 'bri'},
  ]);

  // const tambahSaldo = async () => {
  //   const saldoKu = await Auth.getSaldo();
  //   Auth.setSaldo(saldo + saldoKu);
  // };

  const OpenURLPayment = async () => {
    const web = `http://mysupir.com/api/order/proceed/payment/${2170}`;
    await Linking.openURL(web);

    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(web);
    console.log('supported', supported);
  };

  useEffect(() => {
    console.log("id_saldo", id_saldo);
    console.log("sisa_saldo", sisa_saldo);
  }, [])
  
  const tambahSaldo = async () => {
    setLoading(true);
    const res = await axios.patch(
      `${BASE_URL}/pengguna/saldo/${id_saldo}`,
      {jumlah: saldo + sisa_saldo},
    );
    if (res.status === 200) {
      showSuccess('Top up saldo berhasil');
      // order();
    }
    console.log(res);
    setLoading(false);
  };

  return (
    <>
    <ScrollView style={style.container}>
      <Headers title="Isi Saldo Cibeurem Market" />

      <Text
        style={{...FONTS.bodyLargeMedium, color: COLORS.black, marginTop: 10}}>
        Jumlah Top Up : {formatRupiah(saldo)}
      </Text>
      <Separator />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <SaldoButton valueSaldo={'20.000'} onPress={() => setSaldo(20000)} />
        <SaldoButton valueSaldo={'50.000'} onPress={() => setSaldo(50000)} />
        <SaldoButton valueSaldo={'100.000'} onPress={() => setSaldo(100000)} />
        <SaldoButton valueSaldo={'200.000'} onPress={() => setSaldo(200000)} />
        <SaldoButton valueSaldo={'300.000'} onPress={() => setSaldo(300000)} />
        <SaldoButton valueSaldo={'500.000'} onPress={() => setSaldo(500000)} />
      </View>

      <Text
        style={{...FONTS.bodyLargeMedium, color: COLORS.black, marginTop: 20}}>
        Masukan Jumlah Rp.
      </Text>
      <InputText
        placeholder="Masukan Jumlah..."
        value={saldo}
        onChangeText={val => setSaldo(val)}
        type="numeric"
      />

      <View style={[style.card, {marginTop: 20}]}>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <Icon name="money-bill-wave" color={COLORS.primaryColor} size={23} />
          <Text
            style={{
              marginLeft: 10,
              color: COLORS.black,
              ...FONTS.bodyLargeMedium,
            }}>
            Metode Pembayaran
          </Text>
        </View>
        <DropDownPicker
          style={{
            marginTop: 10,
            borderBottomColor: COLORS.neutral2,
            borderWidth: 0,
          }}
          placeholder="Pilih Metode Pembayaran"
          defaultValue={'Mandiri'}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        {/* <InputDropdown 
        /> */}
      </View>

      <View
        style={[
          style.card,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.bodyNormalBold,
            }}>
            Isi Saldo
          </Text>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.bodyNormalBold,
            }}>
            Biaya Admin
          </Text>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.bodyLargeBold,
            }}>
            Total Pembayaran
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.bodyNormalRegular,
            }}>
            {formatRupiah(saldo)}
          </Text>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.bodyNormalRegular,
            }}>
            Rp.2.500
          </Text>
          <Text
            style={{
              color: COLORS.primaryColor,
              ...FONTS.bodyLargeBold,
            }}>
            {formatRupiah(saldo + biayaAdmin)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        disabled={saldo === 0}
        onPress={() => tambahSaldo()}
        style={{
          backgroundColor: saldo !== 0 ? COLORS.primaryColor : COLORS.neutral3,
          // width: '90%',
          // alignSelf: 'flex-end',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          left: 0,
          borderRadius: 100,
          // marginHorizontal: 14,
          marginBottom: 14,
        }}>
        <Text style={{color: 'white', ...FONTS.bodyNormalBold}}>
          Bayar Sekarang
        </Text>
      </TouchableOpacity>
    </ScrollView>
    {loading && (<LoadingScreen />)}
    </>
  );
};

export default IsiSaldo;

const styles = StyleSheet.create({});
