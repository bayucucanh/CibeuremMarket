import React from 'react';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Akun, Home, Keranjang, Login, Toko} from '../screen';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 62,
          paddingTop: 10,
          paddingHorizontal: 8,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          tabBarLabel: 'Keranjang',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Toko"
        component={Toko}
        options={{
          tabBarLabel: 'Toko',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon2 name="store" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarLabel: 'Akun',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
