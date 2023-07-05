import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../constant';

const SaldoButton = ({valueSaldo, onPress, active}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        width: 110,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f6f6f6',
      }}>
      <Text
        style={{
          ...FONTS.bodyLargeMedium,
          color: !active ? '#636363' : COLORS.primaryColor,
        }}>
        {valueSaldo}
      </Text>
    </TouchableOpacity>
  );
};

export default SaldoButton;

const styles = StyleSheet.create({});
