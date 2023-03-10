import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { COLORS } from '../../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white 
  },
})