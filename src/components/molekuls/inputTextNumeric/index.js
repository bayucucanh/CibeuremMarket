import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../constant';
import Icon from 'react-native-vector-icons/Feather';

const useTogglePasswordVisibility = secureTextEntry => {
  const [passwordVisibility, setPasswordVisibility] = useState(secureTextEntry);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};

const InputTextNumeric = ({
  placeholder,
  multiline,
  style,
  type,
  maxLength,
  onChangeText,
  value,
  error,
  name,
  onBlur,
  secureTextEntry,
  styleOutlined,
  defaultValue
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility(secureTextEntry);
  const checkError = () => {
    if (error) {
      return COLORS.alertDanger;
    }
    if (isFocus || value) {
      return COLORS.neutral5;
    }
    return COLORS.neutral2;
  };

  return (
    <View
      style={[styleOutlined, {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: secureTextEntry ? 'space-between' : 'center',
        paddingHorizontal: 16,
        flexDirection: secureTextEntry && 'row',
      }]}>
      <TextInput
        onFocus={() => setIsFocus(true)}
        defaultValue={`${defaultValue}`}
        placeholderTextColor={COLORS.black}
        onBlur={onBlur}
        multiline={multiline}
        onChangeText={onChangeText}
        value={value}
        name={name}
        style={[
          {
            ...style,
            width: '90%',
            // borderRadius: SIZES.radius2,
            // borderWidth: 2,
            // borderColor: checkError(),
            // justifyContent: 'center',
            // paddingHorizontal: SIZES.padding3,
          },
        ]}
        maxLength={maxLength}
        keyboardType={type}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputTextNumeric;

const styles = StyleSheet.create({});
