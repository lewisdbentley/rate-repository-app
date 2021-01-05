import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  formInputs: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#e3e3e3',
    width: '90%',
    padding: 5,
    margin: 5,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirm is required'),
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        style={styles.formInputs}
        name="username"
        placeholder="username"
      />
      <FormikTextInput
        style={styles.formInputs}
        name="password"
        secureTextEntry
        placeholder="password"
      />
      <FormikTextInput
        style={styles.formInputs}
        name="passwordConfirm"
        secureTextEntry
        placeholder="password confirm"
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text
          fontWeight="bold"
          style={
            styles.formInputs && {
              textAlign: 'center',
              backgroundColor: '#3a5ad7',
              color: '#fff',
              padding: 16,
            }
          }
        >
          Sign up
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignUpFormContainer = ({ signUp }) => {
  let history = useHistory();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    try {
      // try something
      let { username, password } = values;

      const data = await signUp({ username, password });

      console.log('data', data);

      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpFormContainer;
