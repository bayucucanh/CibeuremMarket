import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
// import FastImage from 'react-native-fast-image';
// import { COLORS, SIZES } from '../../constant';
import {COLORS, SIZES} from '../../../constant';

function PhotoKurir({
  name,
  image,
  setFieldValue,
  disabled = false,
  style,
  icon,
  colorIcon,
  styleImage,
}) {
  const [photo, setPhoto] = useState(image.uri != '' ? image : '');
  const [hasPhoto, setHasPhoto] = useState(image.uri != '');
  const getImage = () => {
    launchImageLibrary(
      {
        maxWidth: 500,
        maxHeight: 500,
      },
      response => {
        if (response.didCancel || response.error) {
          // eslint-disable-next-line no-console
          console.log('Cancel Image Pick');
        } else {
          const source = response?.assets[0];
          const Uri = {uri: source.uri};
          setPhoto(Uri);
          setHasPhoto(true);
          setFieldValue(source);
        }
      },
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={() => getImage()} disabled={disabled}>
        <View
          style={{
            width: 108,
            height: 108,
            backgroundColor: COLORS.primaryColor,
            borderRadius: SIZES.radius2,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginLeft: 15,
            ...style,
          }}>
          {hasPhoto ? (
            <Image
              source={photo}
              style={{
                width: 108,
                height: 108,
                borderRadius: 14,
                position: 'absolute',
                zIndex: 999,
              }}
            />
          ) : (
            <Icon name={icon} color={colorIcon} size={32} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PhotoKurir;
