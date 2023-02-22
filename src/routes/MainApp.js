import React from 'react';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Login} from '../screen';

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
          // tabBarIcon: ({ color }) => (
          //   <Icon name="home" color={color} size={SIZES.icon} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
