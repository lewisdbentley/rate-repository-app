import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import FormikNumberInput from './FormikNumberInput';
import * as yup from 'yup';
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
  ownerName: yup.string().required('Owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Enter a number between 0 and 100'),
});

const initialValues = {
  repositoryName: 'awesome-django',
  ownerName: 'wsvincent',
  rating: '100',
  text: '',
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        style={styles.formInputs}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.formInputs}
        name="ownerName"
        placeholder="Repository owner"
      />
      <FormikNumberInput
        keyboardType="numeric"
        style={styles.formInputs}
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        multiline
        style={styles.formInputs}
        name="text"
        placeholder="Enter review"
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
          Create a review
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const ReviewFormContainer = ({ createReview }) => {
  const history = useHistory();
  const onSubmit = async (values) => {
    let { ownerName, repositoryName, rating, text } = values;

    console.log('ownerName', ownerName, typeof ownerName);
    console.log('repositoryName', repositoryName, typeof repositoryName);
    console.log('text', text, typeof text);

    rating = Number(rating);

    console.log('rating', rating, typeof rating);

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      console.log('data', data);
      console.log('pushing to history ', data.createReview.repositoryId);

      history.push(`/${data.createReview.repositoryId}`);
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
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewFormContainer;
