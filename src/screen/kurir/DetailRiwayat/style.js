import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardBox: {
    width: 350,
    height: 250,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 2,
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBottom: 18,
    marginLeft: 6,
  },
  image: {
    width: 130,
    height: 247,
    marginLeft: -20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: -21,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 8,
  },
  text2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  text3: {
    color: COLORS.black,
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.25,
    marginBottom: 10,
    maxWidth: 190,
  },
  cardBoxInfo: {
    width: 350,
    height: 150,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 2,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 18,
    marginLeft: 6,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
});
