import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeKurir, AkunKurir} from '../screen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const MainAppKurir = () => {
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

export default MainAppKurir;
