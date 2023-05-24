import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Router from './routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './redux/store';

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
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
