import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {
  CustomButton,
  Headers,
  InputText,
  PhotoProfile,
} from '../../../components';
import {
  BASE_URL,
  COLORS,
  FONTS,
  showDanger,
  showSuccess,
} from '../../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {kurir} from '../../../services';
import {useEffect} from 'react';
import Auth from '../../../services/Auth';

const UbahAkunKurir = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  const [namakurir, setNamaKurir] = useState(null);
  const [nohp, setNoHp] = useState();
  const [noktp, setNotKtp] = useState();
  const [jeniskelamin, setJenisKelamin] = useState();
  const [platmotor, setPlatMotor] = useState();
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [fotosim, setFotoSim] = useState(null);
  const [fotostnk, setFotoStnk] = useState(null);
  const [fotoSimDB, setFotoSimDB] = useState(null);
  const [fotoStnkDB, setFotoStnkDB] = useState(null);
  const [fotoKurir, setFotoKurir] = useState(null);
  const [fotoKurirDB, setFotoKurirDB] = useState(null);
  const [id, setId] = useState(null);

  const ambilData = async () => {
    const res = await kurir();
    setProfile(res?.data?.data?.kurir);
    setId(res?.data?.data?.kurir.id_kurir);
    setNamaKurir(res?.data?.data?.kurir.nama_kurir);
    setNoHp(res?.data?.data?.kurir.nomor_hp);
    setNotKtp(res?.data?.data?.kurir.nomor_ktp);
    setJenisKelamin(res?.data?.data?.kurir.jenis_kelamin);
    setPlatMotor(res?.data?.data?.kurir.plat_motor);
    setFotoSim(res?.data?.data?.kurir.foto_sim);
    setFotoStnk(res?.data?.data?.kurir.foto_stnk);
    setFotoKurir(res?.data?.data?.kurir?.foto_kurir);
    // if (
    //   res?.data?.data?.kurir?.latitude_kurir !== null &&
    //   res?.data?.data?.kurir?.longitude_kurir === null
    // ) {
    //   setLat(6.008812);
    //   setLong(6.112212);
    // } else {
    //   setLat(res?.data?.data?.kurir?.latitude_kurir);
    //   setLong(res?.data?.data?.kurir?.longitude_kurir);
    // }
    console.log('__res', res?.data);
  };

  // =================>
  const getImageSim = async values => {
    await launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Silahkan simpan foto SIM',
            type: 'warning',
            backgroundColor: COLORS.primaryCream1,
            color: COLORS.black,
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setFotoSim(source);
          values.foto_sim = source;
          setFotoSimDB(response.assets[0]);
        }
      },
    );
  };

  const getImageStnk = async values => {
    await launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Silahkan simpan foto STNK',
            type: 'warning',
            backgroundColor: COLORS.primaryCream1,
            color: COLORS.black,
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setFotoStnk(source);
          values.foto_stnk = source;
          setFotoStnkDB(response.assets[0]);
        }
      },
    );
  };
  const getImageKurir = async values => {
    await launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Silahkan simpan foto',
            type: 'warning',
            backgroundColor: COLORS.primaryCream1,
            color: COLORS.black,
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setFotoKurir(source);
          values.foto_stnk = source;
          setFotoKurirDB(response.assets[0]);
        }
      },
    );
  };
  // =================>

  const ubahData = async () => {
    setLoading(true);
    // try {
    const formdata = new FormData();
    formdata.append('nama_kurir', namakurir);
    formdata.append('nomor_hp', nohp);
    formdata.append('nomor_ktp', noktp);
    formdata.append('jenis_kelamin', jeniskelamin);
    formdata.append('plat_motor', platmotor);
    formdata.append('foto_sim', {
      uri: fotoSimDB.uri,
      type: fotoSimDB.type,
      name: fotoSimDB.fileName,
    });
    formdata.append('foto_stnk', {
      uri: fotoStnkDB.uri,
      type: fotoStnkDB.type,
      name: fotoStnkDB.fileName,
    });
    formdata.append('foto_kurir', {
      uri: fotoKurirDB.uri,
      type: fotoKurirDB.type,
      name: fotoKurirDB.fileName,
    });
    console.log(formdata);

    // formdata.append('latitude_kurir', profile?.latitude_kurir);
    // formdata.append('longitude_kurir', profile?.longitude_kurir);
    //===================>
    const data = {
      nama_kurir: namakurir,
      nomor_hp: nohp,
      nomor_ktp: noktp,
      jenis_kelamin: jeniskelamin,
      plat_motor: platmotor,
      foto_sim: {
        uri: fotoSimDB.uri,
        type: fotoSimDB.type,
        name: fotoSimDB.fileName,
      },
      foto_stnk: {
        uri: fotoStnkDB.uri,
        type: fotoStnkDB.type,
        name: fotoStnkDB.fileName,
      },
      foto_kurir: {
        uri: fotoKurirDB.uri,
        type: fotoKurirDB.type,
        name: fotoKurirDB.fileName,
      },
      // latitude_kurir: profile?.latitude_kurir,
      // longitude_kurir: profile?.longitude_kurir,
    };
    const token = await Auth.getToken();
    console.log(token);
    const result = await fetch(`${BASE_URL}/kurir/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token,
      },
      body: formdata,
    });
    console.log('cek aja', result);
    if (result.status === 200) {
      showSuccess('Profile Berhasil Diubah');
      setFotoSim(null);
      setFotoStnk(null);
      navigation.navigate('MainApp');
    } else {
      showDanger('Profile Gagal Diubah');
    }
    // } catch (error) {
    //   // console.log('Gagal');
    //   showDanger('Profile Gagal ');
    // }
    setLoading(false);
  };

  useEffect(() => {
    ambilData();
    console.log('profile dude', profile);
  }, []);

  return (
    <View style={style.container}>
      <Headers title="Ubah Akun Kurir" />

      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 30}}>
        <TouchableOpacity
          onPress={getImageSim}
          style={{
            borderWidth: 3,
            borderColor: COLORS.primaryColor,
            borderRadius: 14,
            width: 108,
            height: 108,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={fotosim} style={style.userPhoto} />
          <Icon name="id-card" size={54} color={COLORS.primaryColor} />
          <Text style={style.text}>Ubah Foto SIM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getImageKurir}
          style={{
            borderWidth: 3,
            borderColor: COLORS.primaryColor,
            borderRadius: 14,
            width: 108,
            height: 108,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Image source={fotoKurir} style={style.userPhoto} />
          <Icon name="id-card" size={54} color={COLORS.primaryColor} />
          <Text style={style.text}>Ubah Foto Kurir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getImageStnk}
          style={{
            borderWidth: 3,
            borderColor: COLORS.primaryColor,
            borderRadius: 14,
            width: 108,
            height: 108,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Image source={fotostnk} style={style.userPhoto} />
          <Icon name="id-card" size={54} color={COLORS.primaryColor} />
          <Text style={style.text}>Ubah Foto STNK</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <InputText
          placeholder="Fahdy"
          value={namakurir}
          onChangeText={val => setNamaKurir(val)}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
          editable={false}
        />
        <InputText
          placeholder="089321258994"
          styleOutlined={{marginTop: 20}}
          value={nohp}
          onChangeText={val => setNoHp(val)}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <InputText
          placeholder="999199577277"
          styleOutlined={{marginTop: 20}}
          value={noktp}
          onChangeText={val => setNotKtp(val)}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
          editable={false}
        />
        <InputText
          placeholder="Plat Nomor"
          styleOutlined={{marginTop: 20}}
          value={platmotor}
          onChangeText={val => setPlatMotor(val)}
          // error={touched.jenisKelamin && errors.jenisKelamin}
          keyboardType="email-address"
        />
        <CustomButton
          onPress={ubahData}
          title="Ubah Akun"
          // enabled={isValid && !errors.email && !errors.password && dirty}
          enabled={true}
          buttonStyle={{marginTop: 30}}
        />
      </View>
    </View>
  );
};

export default UbahAkunKurir;
