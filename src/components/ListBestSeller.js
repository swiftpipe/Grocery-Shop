import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GridProducts from './GridProducts';

const ListBestSeller = ({products = []}) => {
  return (
    <View>
      <View>
        <Text style={styles.headerText}>Best Seller</Text>
      </View>
      <GridProducts products={products} />
    </View>
  );
};

export default ListBestSeller;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B1B1B',
    marginVertical: 18,
  },
});
