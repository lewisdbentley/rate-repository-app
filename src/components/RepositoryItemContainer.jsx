import RepositoryItem from './RepositoryItem';
import React from 'react';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { Text } from 'react-native';
import SingleRepository from './SingleRepository';
import useRepository from '../hooks/useRepository';

const RepositoryItemContainer = () => {
  const { id } = useParams();

  const { repository, fetchMore } = useRepository({
    id,
    first: 3,
  });

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

  // if (loading) return null;

  // console.log(
  //   'repository.reviews.pageInfo.endCursor',
  //   repository.reviews.pageInfo.endCursor
  // );

  return (
    <SingleRepository
      repository={repository}
      onEndReach={onEndReach}
    ></SingleRepository>
  );
};

export default RepositoryItemContainer;
