import React from 'react';
import { Formik, useField } from 'formik';
import {
  TouchableWithoutFeedback,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
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
});

const initialValues = {
  username: 'lewis',
  password: 'password',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        testID="usernameField"
        style={styles.formInputs}
        name="username"
      />
      <FormikTextInput
        testID="passwordField"
        style={styles.formInputs}
        secureTextEntry
        name="password"
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text
          testID="submitButton"
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
          Sign In
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  let history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
