import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  textHeader: {
    ...FONTS.titleLargeBold,
    color: COLORS.black,
    marginLeft: 25,
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 8,
  },
  text2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  cardInfoBarang: {
    width: 371,
    height: SIZES.height * 0.25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInfo: {color: COLORS.primaryColor, fontWeight: '500', fontSize: 20},
  konfirInfoBarang: {
    ...FONTS.titleNormalRegular,
    paddingHorizontal: 20,
    color: COLORS.black,
  },
  viewKonfir: {flexDirection: 'row', paddingTop: 30, alignItems: 'center'},
  touchInfoBarang: {
    width: '60%',
    height: '70%',
    justifyContent: 'space-between',
  },
  styleTouch: {
    backgroundColor: COLORS.alertSuccess,
    width: 170,
    alignSelf: 'flex-end',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 14,
    marginHorizontal: -55,
  },
  //==========Pembeli========>
  cardInfoPembeli: {
    marginTop: 20,
    width: 371,
    height: SIZES.height * 0.16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 19,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  viewInfPembeli: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    // justifyContent: 'space-around',
  },
  imagePembeli: {
    width: 64,
    height: 64,
    backgroundColor: 'red',
    borderRadius: 32,
  },
  Pembeli: {
    ...FONTS.titleNormalRegular,
    paddingLeft: 20,
    paddingRight: 90,
    color: COLORS.black,
  },
  //============pembeli====>
  //========nota======>
  textNota: {
    color: COLORS.primaryColor,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 12,
    marginTop: 20,
  },
  viewNota: {
    width: 371,
    height: SIZES.height * 0.26,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imageNota: {
    width: 130,
    height: SIZES.height * 0.26,
    marginLeft: -20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: -21,
  },
  //========nota======>
});
