import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {COLORS, FONTS, SIZES} from '../../../constant';
import {userAvatar} from '../../../assets';
import {Gap, ListButton, Separator} from '../../../components';
import {kurir, loginKurir, pengguna} from '../../../services';
import {useIsFocused} from '@react-navigation/native';
import Auth from '../../../services/Auth';

const Akun = ({navigation}) => {
  const isFocused = useIsFocused();
  const [profile, setProfile] = useState([]);
  const [id, setId] = useState({});

  const getMe = async () => {
    const response = await kurir();
    console.log(response.data);
    setProfile(response.data);
  };

  ///============>
  const handleLogout = async () => {
    try {
      await Auth.logout();
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error(error);
    }
  };
  //============>

  useEffect(() => {
    if (isFocused) {
      getMe();
      console.log('Kurir', profile);
    }
  }, [isFocused, profile]);

  return (
    <View style={style.container}>
      <View
        style={{
          width: '100%',
          height: SIZES.height * 0.25,
          backgroundColor: COLORS.thirdColor,
          borderRadius: 20,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'relative',
        }}>
        <Image source={userAvatar} />
        <View
          style={{
            width: '60%',
            height: '70%',
            paddingVertical: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
            {profile?.nama_kurir}
          </Text>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
            {profile?.nomor_hp}
          </Text>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
            {profile?.nomor_ktp}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primaryColor,
              width: 120,
              alignSelf: 'flex-end',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              left: 0,
              borderRadius: 100,
              marginTop: 14,
            }}>
            <Text style={{color: 'white'}}>Lihat Profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 47}}>
        <ListButton
          onPress={() => navigation.navigate('UbahAkunKurir')}
          title="Ubah Profil"
          iconName="user"
          isSeparate={true}
          style={{marginTop: 24}}
        />
        <ListButton
          title="Tentang Aplikasi"
          iconName="exclamation"
          isSeparate={true}
          style={{marginTop: 24}}
        />
        <ListButton
          title="Beri Ulasan"
          iconName="star"
          isSeparate={true}
          style={{marginTop: 24}}
        />
        <ListButton
          onPress={handleLogout}
          title="Keluar"
          iconName="sign-out"
          isSeparate={true}
          style={{marginTop: 24}}
        />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({});
