import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  filterSearch: {
    // paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: '#fff',
  },
});

const FilterSearch = ({ searchKeyword, setSearchKeyword }) => {
  const onChangeSearch = (searchKeyword) => setSearchKeyword(searchKeyword);

  return (
    <View>
      <Searchbar
        style={styles.filterSearch}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchKeyword}
      />
    </View>
  );
};

export default FilterSearch;
