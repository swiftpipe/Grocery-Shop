import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {SPACING} from '../configs/styling';

const SearchBox = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ic-search.png')} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Search your course"
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    padding: 14,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    marginVertical: SPACING,
  },
  input: {
    flex: 1,
    paddingLeft: 12,
  },
});
