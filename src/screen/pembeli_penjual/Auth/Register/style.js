import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    position: 'relative'
  }
})