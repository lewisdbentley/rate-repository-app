import React from 'react';
import Text from './Text';
import { Link, Alert } from 'react-router-native';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import useSignOut from '../hooks/useSignOut';
import { useUserDispatch, signOut } from '../contexts/UserContext';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import { useContext } from 'react';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  paddingRight: {
    paddingRight: 10,
  },
  // ...
});

const AppBarTab = ({ loggedInUser }) => {
  const dispatch = useUserDispatch();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  return (
    <View style={styles.row}>
      <Link to="/" component={TouchableOpacity} activeOpacity={0.8}>
        <Text color="white" fontWeight="bold" style={styles.paddingRight}>
          Repositories
        </Text>
      </Link>
      {loggedInUser ? (
        //  LOGGED IN
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() => signOut(dispatch, authStorage, apolloClient)}
          >
            <Text color="white" fontWeight="bold" style={styles.paddingRight}>
              Log out
            </Text>
          </TouchableWithoutFeedback>
          <Link to="/review" component={TouchableOpacity} activeOpacity={0.8}>
            <Text color="white" fontWeight="bold" style={styles.paddingRight}>
              Create a review
            </Text>
          </Link>
          <Link
            to="/myreviews"
            component={TouchableOpacity}
            activeOpacity={0.8}
          >
            <Text color="white" fontWeight="bold" style={styles.paddingRight}>
              My reviews
            </Text>
          </Link>
        </View>
      ) : (
        // NOT LOGGED IN
        <View style={styles.row}>
          <Link to="/signin" component={TouchableOpacity} activeOpacity={0.8}>
            <Text color="white" fontWeight="bold" style={styles.paddingRight}>
              Sign in
            </Text>
          </Link>
          <Link to="/signup" component={TouchableOpacity} activeOpacity={0.8}>
            <Text color="white" fontWeight="bold" style={styles.paddingRight}>
              Sign up
            </Text>
          </Link>
        </View>
      )}
    </View>
  );
};

export default AppBarTab;
