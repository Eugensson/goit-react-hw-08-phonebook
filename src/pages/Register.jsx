import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  WrapperStyled,
  FormContent,
  LogInSignUpBtn,
  FormTitle,
  FormLabel,
  FormError,
  FormInput,
} from 'components/pages.styled';

import { signUp } from 'redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(10)
    .max(60)
    .required('should be composed of two words with a space between them'),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(5)
    .max(10)
    .required('password must contain between 5 and 10 characters'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    resetForm();
    dispatch(signUp(value));
  };

  return (
    <WrapperStyled>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form autoComplete="off">
            <FormTitle>Sign Up</FormTitle>
            <FormContent>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="text"
                  name="name"
                  placeholder="Full name"
                />
                <FormError name="name" component="p" />
              </FormLabel>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <FormError name="email" component="p" />
              </FormLabel>
              <FormLabel>
                <FormInput
                  isvalid={isValid.toString()}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <FormError name="password" component="p" />
              </FormLabel>
            </FormContent>

            <LogInSignUpBtn type="submit" disabled={!isValid}>
              SignUp
            </LogInSignUpBtn>
          </Form>
        )}
      </Formik>
    </WrapperStyled>
  );
};

export default Register;
