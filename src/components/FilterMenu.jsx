import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';

const styles = StyleSheet.create({
  FilterMenu: {
    paddingTop: 70,
  },
  AnchorButton: {
    margin: 10,
  },
});

const FilterMenu = ({
  setOrderBy,
  setOrderDirection,
  orderBy,
  orderDirection,
}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        style={styles.FilterMenu}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button style={styles.AnchorButton} onPress={openMenu}>
            {orderBy === 'CREATED_AT'
              ? 'Latest Repositories'
              : orderDirection === 'DESC'
              ? 'Highest rated Repositories'
              : 'Lowest rated Repositories'}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
            closeMenu();
          }}
          title="Latest Repositories"
        />
        <Menu.Item
          onPress={() => {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
            closeMenu();
          }}
          title="Highest rated Repositories"
        />
        <Menu.Item
          onPress={() => {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
            closeMenu();
          }}
          title="Lowest rated Repositories"
        />
      </Menu>
    </View>
  );
};

export default FilterMenu;
