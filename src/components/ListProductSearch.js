import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GridProducts from './GridProducts';

const ListProductSearch = ({products = [], onCancelSearch}) => {
  return (
    <View>
      <View style={styles.resultContainer}>
        <Text style={styles.foundText}>{products.length}+ Result Found</Text>
        <TouchableOpacity onPress={onCancelSearch}>
          <Text style={styles.foundText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <GridProducts products={products} />
    </View>
  );
};

export default ListProductSearch;

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
  },
  type: {
    fontSize: 10,
    color: '#A1A1A1',
    marginVertical: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  priceView: {
    fontSize: 12,
    color: '#A1A1A1',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#FFFFFF',
    margin: 2,
    borderRadius: 8,
  },
  foundText: {
    fontSize: 11,
    color: '#1B1B1B',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
