import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  nomor_hp: yup
    .string()
    .trim()
    .max(13, 'nomor lebih dari 13 digit')
    .min(10, 'nomor hp kurang dari 10 digit')
    .required('Silahkan isi Nomor Hp'),
  password: yup
    .string()
    .trim()
    .min(8, 'Minimal 8 karakter')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('Silahkan isi Password'),
});

export const registerValidationSchema = yup.object().shape({
  nama_kurir: yup
    .string()
    .trim()
    .min(2, 'aksimal 50 karakter')
    .max(50, 'Maksimal 50 karakter')
    .required('Isi nama Lengkap'),
  // email: yup
  //   .string()
  //   .trim()
  //   // .email('emailAlertMatch')
  //   // .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/)
  //   .required('Isi Nomor Hp'),
  password: yup
    .string()
    .trim()
    .min(8, 'Minimal 8 karakter')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('Isi Password'),
  nomor_hp: yup.string().trim().min(12).required('Isi nomor Hp'),
  nomor_ktp: yup
    .string()
    .trim()
    .min(16, 'Harus 16 Karakter')
    .max(16)
    .required('isi nomor KTP'),
  plat_motor: yup.string().required('Isi Plat nomor kendaraan'),
});
