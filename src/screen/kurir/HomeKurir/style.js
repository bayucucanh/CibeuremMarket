import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Wrapper: {
    backgroundColor: '#EEEEEE',
    width: windowWidth * 1,
    height: windowHeight * 0.3,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingVertical: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  logo: {
    marginTop: 20,
    width: 160,
    height: 59,
  },
  textHighLight: {
    color: COLORS.primaryColor,
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
    marginTop: 17,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginLeft: 12,
  },
  textJudul: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
  },
});
