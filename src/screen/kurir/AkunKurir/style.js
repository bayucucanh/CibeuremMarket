import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    backgroundColor: 'white',
  },
  wrapperBox: {
    width: '100%',
    height: 175,
    backgroundColor: '#FFEAEA',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  text: {
    color: '#D10000',
    fontSize: 16,
    fontWeight: '500',
  },
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
