import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  DaftarToko,
  DetailPesanan,
  DetailProduk,
  IsiSaldo,
  Login,
  NotaPembelian,
  PemesananMasuk,
  RegisterUser,
  RiwayatTransaksi,
  SplashScreen,
  TambahBarang,
  UbahProfil,
  RegisterKurir,
  HomeKurir,
  AkunKurir,
  UbahAkunKurir,
  RiwayatPengiriman,
  DetailRiwayat,
  DetailPengiriman,
  DenahToko,
  Pengiriman,
} from '../screen';
import MainApp from './MainApp';
import MainAppKurir from './MainAppKurir';
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
    <Stack.Navigator initialRouteName="LoginScreen">
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
      {/* {!login && (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterKurir"
            component={RegisterKurir}
            options={{headerShown: false}}
          />
        </>
      )} */}
      <Stack.Screen
        name="RegisterKurir"
        component={RegisterKurir}
        options={{headerShown: false}}
      />
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
        name="RegisterUser"
        component={RegisterUser}
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
      {/* ===================================> */}
      <Stack.Screen
        name="HomeKurir"
        component={HomeKurir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AkunKurir"
        component={AkunKurir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UbahAkunKurir"
        component={UbahAkunKurir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatPengiriman"
        component={RiwayatPengiriman}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailRiwayat"
        component={DetailRiwayat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPengiriman"
        component={DetailPengiriman}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DenahToko"
        component={DenahToko}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pengiriman"
        component={Pengiriman}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      {/* ===================================> */}
    </Stack.Navigator>
  );
};

export default Router;
