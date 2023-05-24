import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    // width: 190,
    width: windowWidth * 0.5,
    height: windowHeight * 0.13,
  },
  text: {
    position: 'absolute',
    bottom: 25,
    // ...FONTS.body3,
    fontWeight: 'bold',
  },
});
