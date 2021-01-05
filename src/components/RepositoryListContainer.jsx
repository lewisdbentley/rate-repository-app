import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import { useHistory, useParams } from 'react-router-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import FilterContainer from './FilterContainer';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  FilterMenu: {
    paddingTop: 70,
  },
  AnchorButton: {
    margin: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Item = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
};

const RepositoryListContainer = ({
  repositories,
  setOrderBy,
  setOrderDirection,
  orderBy,
  orderDirection,
  searchKeyword,
  setSearchKeyword,
  onEndReach,
}) => {
  const history = useHistory();
  const pushHistoryRepo = (id) => {
    console.log('inside pushHistoryRepo value id: ', id);

    history.push(`/${id}`);
  };

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => pushHistoryRepo(item.id)} />;
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <FilterContainer
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
          orderBy={orderBy}
          orderDirection={orderDirection}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        ></FilterContainer>
      }
      keyExtractor={(item, index) => {
        return item.fullName + index;
      }}
    />
  );
};

export default RepositoryListContainer;
