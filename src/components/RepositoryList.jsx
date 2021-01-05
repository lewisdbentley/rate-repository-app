import React from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';
import useNewRepositories from '../hooks/useNewRepositories';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = React.useState('CREATED_AT');
  const [search, setSearch] = React.useState('');
  const [searchKeyword] = useDebounce(search, 1000);
  const [orderDirection, setOrderDirection] = React.useState('DESC');
  const { repositories, fetchMore } = useNewRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
    first: 8,
  });

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      orderDirection={orderDirection}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      searchKeyword={search}
      setSearchKeyword={setSearch}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
