import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const CATEGORIES = [
  {
    id: '1',
    name: 'Vegetable',
    image: require('../assets/vegetable.png'),
  },
  {
    id: '2',
    name: 'Fruit',
    image: require('../assets/fruit.png'),
  },
  {
    id: '3',
    name: 'Dairy',
    image: require('../assets/dairy.png'),
  },
  {
    id: '4',
    name: 'Meats',
    image: require('../assets/meats.png'),
  },
];

const ListCategory = ({onChange, currentType}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {CATEGORIES.map(category => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.item,
            currentType == category.id && {backgroundColor: '#16C07B'},
          ]}
          onPress={() => onChange(category.id)}>
          <Image source={category.image} />
          <Text
            style={[
              styles.name,
              currentType == category.id && {color: '#FFFFFF'},
            ]}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    color: '#A1A1A1',
    marginLeft: 8,
  },
  item: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 36,
    marginRight: 14,
  },
});
