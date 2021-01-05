import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  RepositoryItem: {
    backgroundColor: theme.RepositoryItem.BackgroundColor,
    padding: 10,
  },
  RepositoryItemBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  RepositoryItemBottomRowItem: {
    display: 'flex',
    alignItems: 'center',
  },
  githubButton: {
    backgroundColor: theme.languageTag.backgroundColor,
    borderRadius: 5,
    padding: 5,
    color: '#fff',
  },
});

const RepositoryItemBottom = ({ item }) => {
  return (
    <View style={styles.RepositoryItemBottom}>
      <View style={styles.RepositoryItemBottomRowItem}>
        <Text>
          {item.stargazersCount > 1000
            ? (item.stargazersCount / 1000).toFixed(1) + 'k'
            : item.stargazersCount}
        </Text>
        <Text fontWeight="bold">Stars</Text>
      </View>
      <View style={styles.RepositoryItemBottomRowItem}>
        <Text>
          {item.forksCount > 1000
            ? (item.forksCount / 1000).toFixed(1) + 'k'
            : item.forksCount}
        </Text>
        <Text fontWeight="bold">Forks</Text>
      </View>
      <View style={styles.RepositoryItemBottomRowItem}>
        <Text>{item.ratingAverage}</Text>
        <Text fontWeight="bold">Rating</Text>
      </View>
      <View style={styles.RepositoryItemBottomRowItem}>
        <Text>{item.reviewCount}</Text>
        <Text fontWeight="bold">Reviews</Text>
      </View>
    </View>
  );
};

export default RepositoryItemBottom;
