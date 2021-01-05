import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import useAuthorizeUser from '../hooks/useAuthorizeUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
    backgroundColor: theme.AppBar.color,
    padding: 10,
    paddingBottom: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  // ...
});

const AppBar = () => {
  const { authorizedUser } = useAuthorizeUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab loggedInUser={authorizedUser} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
