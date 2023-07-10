import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  CariBarang,
  DaftarToko,
  DetailPesanan,
  DetailProduk,
  DetailTransaksi,
  EditBarang,
  IsiSaldo,
  Login,
  NotaPembelian,
  PemesananMasuk,
  RegisterUser,
  RiwayatTransaksi,
  SplashScreen,
  TambahBarang,
  UbahProfil,
  UbahToko,
} from '../screen';
import MainApp from './MainApp';
import {setUser} from '../redux/state/setUser';
import Auth from '../services/Auth';

const Stack = createNativeStackNavigator();

const Router = () => {
  const dispatch = useDispatch();

  const [loginCheck, setLoginCheck] = useState(true);

  const login = useSelector(state => state.login.isLogin);

  useEffect(() => {
    console.log(login);
    getUser();
  }, []);

  const getUser = async () => {
    // Mengambil data yang ada pada storage
    const data = await Auth.getAccount();
    if (data != null) {
      // mengirim data yang ada pada storage ke action setUser
      dispatch(setUser(data));
      // pengecekan login di buat false
      setLoginCheck(false);
    } else {
      // pengecekan login di buat false
      setLoginCheck(false);
    }
  };

  // digunakan agar langsung menampilkan halaman home
  if (loginCheck) {
    // ganti loading
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      {!login && (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterUser"
            component={RegisterUser}
            options={{headerShown: false}}
          />
        </>
      )}
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatTransaksi"
        component={RiwayatTransaksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UbahProfil"
        component={UbahProfil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IsiSaldo"
        component={IsiSaldo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotaPembelian"
        component={NotaPembelian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DaftarToko"
        component={DaftarToko}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PemesananMasuk"
        component={PemesananMasuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesanan"
        component={DetailPesanan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahBarang"
        component={TambahBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditBarang"
        component={EditBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CariBarang"
        component={CariBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailTransaksi"
        component={DetailTransaksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UbahToko"
        component={UbahToko}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
