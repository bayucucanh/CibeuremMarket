import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlashMessage from 'react-native-flash-message';
import Router from './routes';

function AppStack() {
  // const loading = useSelector((state) => state.global.isLoading);
  return (
    <>
      <Router />
      <FlashMessage position="top" />
    </>
  );
}

const App = () => {
  return (
    <AppStack />
  )
}

export default App

const styles = StyleSheet.create({})