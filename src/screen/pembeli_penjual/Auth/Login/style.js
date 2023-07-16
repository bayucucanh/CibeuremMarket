import {StyleSheet, Dimensions} from 'react-native';
import {FONTS} from '../../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  logo: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.13,
  },
  errorInput: {
    ...FONTS.bodyNormalRegular,
    fontSize: 12,
    color: 'red',
    marginLeft: 10,
    marginTop: 2,
  },
});
