import * as Yup from 'yup';

export const validationSchema = Yup.object({
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Your password is to short'),
  confirmPassword: Yup.string()
    .required('Please retype your passowrd')
    .oneOf([Yup.ref('password')], 'your passwords do not match'),
});
