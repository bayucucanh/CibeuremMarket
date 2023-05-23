import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLORS, SIZES} from '../../../constant';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingBottom: 20
  },
  card: {
    width: '90%',
    borderRadius: 20,
    // padding: 15,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    position: 'relative',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    // borderWidth: 1,
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
});
