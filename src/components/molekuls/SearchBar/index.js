import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
// import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from '../../../constant';

function SearchBar({ onChangeText, value }) {
  // const { t } = useTranslation();

  return (
    <View style={{
      elevation: 4,
      marginHorizontal: SIZES.padding5,
      marginTop: 18,
      backgroundColor: COLORS.neutral1,
      flexDirection: 'row',
      paddingHorizontal: SIZES.padding5,
      alignItems: 'center',
      borderRadius: 100,
      borderWidth: 2,
      borderColor: COLORS.primaryColor
    }}
    >
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[FONTS.bodyNormalBold, {
          width: '90%',
          alignItems: 'baseline',
        }]}
        placeholder="Cari barang atau toko..."
        placeholderTextColor={COLORS.primaryColor}
      />
      <Icon name="search" color={COLORS.primaryColor} size={SIZES.icon} style={{ position: 'absolute', right: SIZES.padding5 }} />
    </View>
  );
}

export default SearchBar;