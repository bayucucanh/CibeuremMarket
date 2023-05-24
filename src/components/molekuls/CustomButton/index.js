import {Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../constant';

function CustomButton({
  title,
  enabled,
  onPress,
  buttonStyle,
  textStyle,
  // isLoading,
  type,
  size,
}) {
  // const isLoading = useSelector((state) => state.global.isLoading);

  return (
    <TouchableOpacity
      style={
        type
          ? {
              height: size === 'small' ? 36 : 48,
              alignItems: 'center',
              alignContent: 'center',
              paddingVertical: size === 'small' ? 6 : 10,
              backgroundColor: COLORS.neutral1,
              borderRadius: 100,
              ...buttonStyle,
            }
          : {
              height: size === 'small' ? 36 : 48,
              alignItems: 'center',
              alignContent: 'center',
              paddingVertical: size === 'small' ? 6 : 10,
              backgroundColor: enabled ? '#FF3A3A' : COLORS.neutral2,
              borderRadius: 100,
              ...buttonStyle,
            }
      }
      enabled={enabled}
      onPress={onPress}>
      {/* {isLoading ? (
        <ActivityIndicator color={type ? COLORS.primaryPurple4 : COLORS.white} />
      ) : ( */}
      <Text
        style={[
          type
            ? {
                color: enabled ? COLORS.neutral5 : COLORS.neutral2,
              }
            : {
                color: COLORS.neutral1,
                marginLeft: 8,
                textAlignVertical: 'center',
                ...textStyle,
              },
        ]}>
        {title}
      </Text>
      {/* )} */}
    </TouchableOpacity>
  );
}

export default CustomButton;
