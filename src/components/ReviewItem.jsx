import React from 'react';
import Text from './Text';
import { format, parseISO } from 'date-fns';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  ratingIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: theme.languageTag.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 10,
  },
  ReviewItem: {
    backgroundColor: theme.RepositoryItem.BackgroundColor,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  ReviewItemText: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
  },
});

const ReviewItem = ({ review }) => {
  const result = parseISO(review.createdAt);

  return (
    <View style={styles.ReviewItem}>
      <View style={styles.ratingIconContainer}>
        <Text fontWeight="bold">{review.rating}</Text>
      </View>
      <View style={styles.ReviewItemText}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">{format(result, 'dd.MM.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
