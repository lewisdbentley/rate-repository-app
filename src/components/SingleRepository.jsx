import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = ({ repository, onEndReach }) => {
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  // ...
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => {
        return item.id;
      }}
      onEndReached={onEndReach}
      ListHeaderComponent={() => {
        return repository ? <RepositoryItem item={repository} /> : null;
      }}
      ItemSeparatorComponent={ItemSeparator}
      // ...
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
