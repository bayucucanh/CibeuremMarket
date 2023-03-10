import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {COLORS, FONTS} from '../../../constant';
import {userAvatar} from '../../../assets';
import {Gap, ListButton, Separator} from '../../../components';

const Akun = ({navigation}) => {
  return (
    <View style={style.container}>
      <View
        style={{
          width: '100%',
          height: 175,
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
            Bayu Cucan
          </Text>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
            0895401000012
          </Text>
          <Text style={{...FONTS.bodyNormalBold, color: COLORS.fourColor}}>
            Saldo: Rp.850.000.00
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
          onPress={() => navigation.navigate('RiwayatTransaksi')}
          title="Riwayat Transaksi"
          iconName="history"
          isSeparate={true}
        />
        <ListButton
          title="Ubah Profil"
          iconName="edit"
          isSeparate={true}
          style={{marginTop: 24}}
        />
        <ListButton
          title="Isi Saldo"
          iconName="money"
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
