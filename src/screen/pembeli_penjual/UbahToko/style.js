import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1
  }
})