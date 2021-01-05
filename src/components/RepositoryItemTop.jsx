import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    flexGrow: 0,
    marginRight: 10,
    borderRadius: 10,
  },
  RepositoryItem: {
    backgroundColor: theme.RepositoryItem.BackgroundColor,
    padding: 10,
  },
  languageTag: {
    backgroundColor: theme.languageTag.backgroundColor,
    borderRadius: 5,
    padding: 5,
    color: '#fff',
  },
  RepositoryItemTop: {
    display: 'flex',
    flexDirection: 'row',
  },
  RepositoryItemTopHeader: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-start',
  },
});

const RepositoryItemTop = ({ item }) => {
  return (
    <View style={styles.RepositoryItemTop}>
      <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.RepositoryItemTopHeader}>
        <Text testID="fullName" fontWeight="bold">
          {item.fullName}
        </Text>
        <Text>{item.description}</Text>
        <Text style={styles.languageTag}>{item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryItemTop;
