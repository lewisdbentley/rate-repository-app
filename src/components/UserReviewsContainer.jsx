import { FlatList, View, StyleSheet, Alert } from 'react-native';
import React from 'react';
import useAuthorizeUser from '../hooks/useAuthorizeUser';
import ReviewItem from './ReviewItem';
import { useHistory } from 'react-router-native';
import Text from './Text';
import { Button } from 'react-native-paper';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  Buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewButton: {
    margin: 10,
  },
  deleteButton: {
    margin: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsContainer = () => {
  const history = useHistory();
  const { authorizedUser, refetch } = useAuthorizeUser({
    includeReviews: true,
  });

  const reviews = authorizedUser
    ? authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  const createTwoButtonAlert = (id) => {
    Alert.alert(
      'Delete confirm',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => handleDelete(id) },
      ],
      { cancelable: false }
    );
    const handleDelete = async (id) => {
      try {
        const data = await deleteReview(id);
        console.log('data', data);
        refetch();
      } catch (e) {
        console.log(e);
      }
    };
  };

  const [deleteReview] = useDeleteReview();

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <>
          <ReviewItem review={item} />
          <View style={styles.Buttons}>
            <Button
              style={styles.viewButton}
              mode="contained"
              onPress={() => {
                console.log('${item.id.substr(37)}', `${item.id.substr(37)}`);
                history.push(`${item.id.substr(37)}`);
              }}
            >
              View
            </Button>
            <Button
              style={styles.deleteButton}
              mode="contained"
              onPress={() => {
                createTwoButtonAlert(item.id);
              }}
            >
              Delete
            </Button>
          </View>
        </>
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    ></FlatList>
  );
};

export default UserReviewsContainer;

// history.push('/');
