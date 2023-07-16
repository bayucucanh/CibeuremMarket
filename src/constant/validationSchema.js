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
    // .min(8, 'passwordAlertMin')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('Silahkan isi Password'),
});

export const registerValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .trim()
    .min(2, 'fullnameAlertMin')
    .max(50, 'fullnameAlertMax')
    .required('fullnameAlertRequired'),
  email: yup
    .string()
    .trim()
    .email('emailAlertMatch')
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/)
    .required('emailAlertRequired'),
  password: yup
    .string()
    .trim()
    .min(8, 'passwordAlertMin')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'passwordAlertMatch',
    )
    .required('passwordAlertRequired'),
});
