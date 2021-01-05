import FilterMenu from './FilterMenu';
import FilterSearch from './FilterSearch';
import React from 'react';
import { View } from 'react-native';

const FilterContainer = ({
  setOrderBy,
  setOrderDirection,
  orderBy,
  orderDirection,
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <View>
      <FilterSearch
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      ></FilterSearch>
      <FilterMenu
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
        orderBy={orderBy}
        orderDirection={orderDirection}
      ></FilterMenu>
    </View>
  );
};

export default FilterContainer;
