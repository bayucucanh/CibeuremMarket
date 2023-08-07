import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    backgroundColor: 'white',
  },
  wrapperBox: {
    width: '100%',
    height: SIZES.height * 0.2,
    backgroundColor: COLORS.thirdColor,
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  Infotext: {
    width: '60%',
    height: '70%',
    paddingVertical: 10,
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  image: {
    width: 110,
    height: 120,
    borderRadius: 20,
    borderColor: COLORS.secondaryColor,
    borderWidth: 2,
  },
  text: {...FONTS.bodyNormalBold, color: COLORS.fourColor},
  buttonProfile: {
    backgroundColor: COLORS.primaryColor,
    width: 120,
    alignSelf: 'flex-end',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: -96,
    borderRadius: 100,
    marginTop: 14,
  },
});
