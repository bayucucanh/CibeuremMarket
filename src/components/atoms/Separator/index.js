import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constant';

function Separator() {
  return (
    <View style={{backgroundColor: COLORS.black, height: 2, marginTop: 6}} />
  );
}

export default Separator;

const styles = StyleSheet.create({});
