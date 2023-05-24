import React from 'react';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AkunKurir, HomeKurir, RiwayatPengiriman} from '../screen';
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
        name="HomeKurir"
        component={HomeKurir}
        options={{
          tabBarLabel: 'HomeKurir',
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="RiwayatPengiriman"
        component={RiwayatPengiriman}
        options={{
          tabBarLabel: 'RiwayatPengiriman',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="AkunKurir"
        component={AkunKurir}
        options={{
          tabBarLabel: 'AkunKurir',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
