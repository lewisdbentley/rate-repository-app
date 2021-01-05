import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryItemTop from './RepositoryItemTop';
import RepositoryItemBottom from './RepositoryItemBottom';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  RepositoryItem: {
    backgroundColor: theme.RepositoryItem.BackgroundColor,
    padding: 10,
  },
  languageTag: {
    backgroundColor: theme.languageTag.backgroundColor,
  },
  githubButton: {
    backgroundColor: theme.languageTag.backgroundColor,
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    margin: 10,
    textAlign: 'center',
  },
});

const RepositoryItem = ({ item }) => {
  const onPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.RepositoryItem}>
      <RepositoryItemTop item={item}></RepositoryItemTop>
      <RepositoryItemBottom item={item}></RepositoryItemBottom>
      {item && item.url ? (
        <Text style={styles.githubButton} onPress={() => onPress(item.url)}>
          Open in GitHub
        </Text>
      ) : null}
    </View>
  );
};

export default RepositoryItem;
