import {Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constant';

function CustomButton({
  title,
  enabled,
  onPress,
  buttonStyle,
  textStyle,
  type,
  size,
}) {
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
