import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {DetailProduk, Login, RegisterUser, RiwayatTransaksi, SplashScreen, UbahProfil} from '../screen';
import MainApp from './MainApp';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
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
    </Stack.Navigator>
  );
};

export default Router;