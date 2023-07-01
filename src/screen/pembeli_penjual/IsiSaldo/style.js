import {StyleSheet, Dimensions} from 'react-native';
import { SIZES } from '../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    backgroundColor: 'white',
  },
  card: {
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
