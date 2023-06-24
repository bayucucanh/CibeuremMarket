import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // flex: 1
  },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    // marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  card2: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'white',
    elevation: 4,
    marginBottom: 10,
    // maxWidth: SIZES.width * 0.43,
    // borderWidth: 1,
    // borderColor: COLORS.primaryColor,
    // width: 192,
  },
});
