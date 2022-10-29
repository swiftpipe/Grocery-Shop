import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';

const ProductItem = props => {
  const window = useWindowDimensions();
  const ITEM_SIZE = (window.width - 2 * 14 - 14 - 8) / 2;
  const PADDING_INNER = 10;
  return (
    <View
      style={[
        {
          width: ITEM_SIZE,
          marginRight: props.index % 2 === 0 ? 14 : 0,
          padding: PADDING_INNER,
        },
        styles.container,
      ]}>
      <Image
        source={props.img}
        style={{
          width: ITEM_SIZE - 2 * PADDING_INNER,
          height: (ITEM_SIZE - 2 * PADDING_INNER) * (107 / 144),
        }}
        resizeMode="contain"
      />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.type}>{props.categoryName}</Text>
      <View style={styles.bottom}>
        <Text style={styles.priceView}>
          <Text style={styles.price}>{props.pricePerKg}</Text>
          <Text> /Kg </Text>
        </Text>
        <TouchableOpacity>
          <Image source={require('../assets/ic-add.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ListProductSearch = ({products = [], onCancelSearch}) => {
  const renderItem = ({item, index}) => <ProductItem index={index} {...item} />;

  return (
    <View>
      <View style={styles.resultContainer}>
        <Text style={styles.foundText}>{products.length}+ Result Found</Text>
        <TouchableOpacity onPress={onCancelSearch}>
          <Text style={styles.foundText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        scrollEnabled={false}
        numColumns={2}
        key={2}
        data={products}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{marginTop: 14}} />}
        contentContainerStyle={{paddingVertical: 20}}
      />
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
