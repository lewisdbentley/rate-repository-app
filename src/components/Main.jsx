import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect } from 'react-router-native';
import SignInContainer from './SignInContainer';
import useSignIn from '../hooks/useSignIn';
import RepositoryItemContainer from '../components/RepositoryItemContainer';
import ReviewFormContainer from '../components/ReviewFormContainer';
import useReview from '../hooks/useReview';
import useSignUp from '../hooks/useSignUp';
import SignUpFormContainer from './SignUpFormContainer';
import UserReviewsContainer from './UserReviewsContainer';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: theme.Main.BackgroundColor,
  },
});

const Main = () => {
  // These are here so that forms recieve onSubmit from props and are thus more testable.
  const [signIn] = useSignIn();
  const [createReview] = useReview();
  const [signUp] = useSignUp();

  return (
    <View style={styles.Main}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignInContainer signIn={signIn} />
        </Route>
        <Route path="/signup" exact>
          <SignUpFormContainer signUp={signUp} />
        </Route>
        <Route path="/review" exact>
          <ReviewFormContainer createReview={createReview} />
        </Route>
        <Route path="/myreviews" exact>
          <UserReviewsContainer />
        </Route>
        <Route path="/:id" exact>
          <RepositoryItemContainer />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
