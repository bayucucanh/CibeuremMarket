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
  const imageSource = profile?.foto_kurir
    ? {uri: profile.foto_kurir}
    : userAvatar;

  const getMe = async () => {
    const response = await kurir();
    console.log(response?.data?.data?.kurir);
    setProfile(response?.data?.data?.kurir);
  };

  ///============>
  const handleLogout = async () => {
    try {
      await Auth.logout();
      navigation.replace('LoginScreen');
    } catch (error) {
      console.error(error);
    }
  };
  //============>

  useEffect(() => {
    if (isFocused) {
      getMe();
    }
  }, [isFocused]);

  return (
    <View style={style.container}>
      <View style={style.wrapperBox}>
        <Image style={style.image} source={imageSource} />
        <View style={style.Infotext}>
          <Text style={style.text}>{profile?.nama_kurir}</Text>
          <Text style={style.text}>{profile?.nomor_hp}</Text>
          <Text style={style.text}>{profile?.jenis_kelamin}</Text>
          <Text style={style.text}>{profile?.plat_motor}</Text>
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
