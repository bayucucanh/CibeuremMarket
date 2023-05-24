import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  imagePickContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 80,
    alignSelf: 'center',
  },
  userPhoto: {
    width: 108,
    height: 108,
    borderRadius: 14,
    position: 'absolute',
    zIndex: 999,
  },
  text: {
    fontSize: 10.8,
    color: COLORS.primaryColor,
    position: 'relative',
    textAlign: 'center',
    fontWeight: '700',
  },
});
