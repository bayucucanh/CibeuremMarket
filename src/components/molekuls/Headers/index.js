import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../../../constant';
import {useNavigation} from '@react-navigation/native';

const Headers = ({title, color, backgroundColor}) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="arrow-left" size={26} color={COLORS.black} />
      </TouchableOpacity>
      <Text
        style={[
          {
            ...FONTS.titleLargeBold,
            // fontWeight: '700',
            // fontSize: 20,
            // lineHeight: 30,
            color: color,
            marginLeft: 25,
            backgroundColor: backgroundColor,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({});
