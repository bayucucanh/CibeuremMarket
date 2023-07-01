import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {COLORS, FONTS, SIZES, formatRupiah} from '../../../constant';
import {userAvatar} from '../../../assets';
import {Gap, ListButton, Separator} from '../../../components';
import {pengguna} from '../../../services';
import {useIsFocused} from '@react-navigation/native';
import Auth from '../../../services/Auth';
import {useDispatch} from 'react-redux';
import {successLogout} from '../../../redux/state/setUser';
import Icon from 'react-native-vector-icons/Feather';
import StatusDikemas from './components/StatusDikemas';
import StatusDikirim from './components/StatusDikirim';
import StatusSelesai from './components/StatusSelesai';

const Akun = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [profile, setProfile] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const getMe = async () => {
    const response = await pengguna();
    console.log(response?.data);
    setProfile(response?.data?.data?.pengguna);
  };

  const getSaldo = async () => {
    const saldoku = await Auth.getSaldo();
    setSaldo(saldoku);
  };

  const logout = () => {
    Auth.logout();
    navigation.navigate('SplashScreen');
    dispatch(successLogout());
  };

  useEffect(() => {
    if (isFocused) {
      getMe();
      getSaldo();
      console.log('pengguna', profile);
      console.log('saldo', saldo);
    }
  }, [isFocused]);

  return (
    <ScrollView style={style.container}>
      {/* <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" }} style={{width: 50, height: 50, borderRadius: 10}}/>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ ...FONTS.bodySmallMedium, color: COLORS.black }}>Bayu Cucan</Text>
          <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.primaryColor }}>{formatRupiah(123000)}</Text>
        </View>
        </View>
        <TouchableOpacity style={{ alignContent: 'center' }}>
          <Icon name='edit-3' size={25} color={COLORS.primaryColor} style={{alignSelf: 'center'}}/>
          <Text style={{ ...FONTS.bodySmallMedium, color: COLORS.primaryColor }}>Ubah Profile</Text>
        </TouchableOpacity>
      </View> */}

      <View
        style={{
          width: '100%',
          // height: SIZES.height * 0.25,
          backgroundColor: COLORS.thirdColor,
          borderRadius: 20,
          padding: 15,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          position: 'relative',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("UbahProfil")} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 2, borderColor: COLORS.primaryColor, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryColor }}>
          <Image source={{ uri: "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" }} style={{ width: 95, height: 95, borderRadius: 95/2,}}/>
        </TouchableOpacity>

        <View style={{ marginLeft: 20 }}>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.black}}>
            Bayu Cucan Herdian
          </Text>
          <Text style={{...FONTS.bodyNormalMedium, color: COLORS.neutral3}}>
            Saldo Anda
          </Text>
          <Text style={{...FONTS.headingLargeBold, color: COLORS.primaryColor}}>
            {formatRupiah(saldo)}
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("UbahProfil")} style={{position: 'absolute', right: 10, top: 5}}>
          <Icon
            name="edit"
            size={25}
            color={COLORS.black}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="book"
            size={25}
            color={COLORS.black}
            style={{alignSelf: 'center'}}
          />
          <Text
            style={{
              ...FONTS.bodyNormalMedium,
              color: COLORS.black,
              marginLeft: 15,
            }}>
            Transaksi Saya
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            padding: 20,
          }}>
          <TouchableOpacity>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.primaryColor,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="edit-3"
                size={25}
                color={COLORS.white}
                style={{alignSelf: 'center'}}
              />
              <View
                style={{
                  position: 'absolute',
                  right: -5,
                  top: -5,
                  backgroundColor: COLORS.secondaryColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  borderRadius: 100,
                  height: 25,
                  width: 25,
                }}>
                <Text style={{...FONTS.bodySmallRegular, color: COLORS.white}}>
                  5
                </Text>
              </View>
            </View>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.primaryColor,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="package"
                size={25}
                color={COLORS.white}
                style={{alignSelf: 'center'}}
              />
              <View
                style={{
                  position: 'absolute',
                  right: -5,
                  top: -5,
                  backgroundColor: COLORS.secondaryColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  borderRadius: 100,
                  height: 25,
                  width: 25,
                }}>
                <Text style={{...FONTS.bodySmallRegular, color: COLORS.white}}>
                  5
                </Text>
              </View>
            </View>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Dikemas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.primaryColor,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="truck"
                size={25}
                color={COLORS.white}
                style={{alignSelf: 'center'}}
              />
              <View
                style={{
                  position: 'absolute',
                  right: -5,
                  top: -5,
                  backgroundColor: COLORS.secondaryColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  borderRadius: 100,
                  height: 25,
                  width: 25,
                }}>
                <Text style={{...FONTS.bodySmallRegular, color: COLORS.white}}>
                  5
                </Text>
              </View>
            </View>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Dikirim
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: COLORS.primaryColor,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="check-circle"
                size={25}
                color={COLORS.white}
                style={{alignSelf: 'center'}}
              />
              <View
                style={{
                  position: 'absolute',
                  right: -5,
                  top: -5,
                  backgroundColor: COLORS.secondaryColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  borderRadius: 100,
                  height: 25,
                  width: 25,
                }}>
                <Text style={{...FONTS.bodySmallRegular, color: COLORS.white}}>
                  5
                </Text>
              </View>
            </View>
            <Text style={{...FONTS.bodySmallBold, color: COLORS.black}}>
              Selesai
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Separator />

      <View style={{marginTop: 20}}>
        <ListButton
          onPress={() => navigation.navigate('IsiSaldo')}
          title="Isi Saldo"
          iconName="money"
          isSeparate={true}
        />
        <ListButton
          title="Tentang Aplikasi"
          iconName="exclamation"
          isSeparate={true}
          style={{marginTop: 24}}
        />
        <ListButton
          onPress={() => logout()}
          title="Keluar"
          iconName="sign-out"
          isSeparate={true}
          style={{marginTop: 24}}
        />
      </View>
    </ScrollView>
  );
};

export default Akun;

const styles = StyleSheet.create({});
