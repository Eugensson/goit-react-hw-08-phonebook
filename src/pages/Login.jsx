import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import {
  WrapperStyled,
  FormContent,
  LogInSignUpBtn,
  FormTitle,
  FormLabel,
  FormInput,
  FormError,
} from 'components/pages.styled';

import { signIn } from 'redux/auth/operations';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(5)
    .max(10)
    .required('password must contain between 5 and 10 characters'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(signIn(value));
    resetForm();
  };

  return (
    <WrapperStyled>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <FormTitle>Log In</FormTitle>
          <FormContent>
            <FormLabel>
              <FormInput name="email" type="email" placeholder="Email" />
              <FormError name="email" component="p" />
            </FormLabel>
            <FormLabel>
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <FormError name="password" component="p" />
            </FormLabel>
          </FormContent>
          <LogInSignUpBtn type="submit">LogIn</LogInSignUpBtn>
        </Form>
      </Formik>
    </WrapperStyled>
  );
};

export default Login;
