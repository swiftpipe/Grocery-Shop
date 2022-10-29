import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SPACING} from '../configs/styling';
import {useNavigation} from '@react-navigation/native';
import SearchBox from '../components/SearchBox';
import ListProductSearch from '../components/ListProductSearch';
import {useProduct} from '../hooks/useProduct';
const SearchScreen = () => {
  const [products, isLoading, fetchProductList, resetList] = useProduct();
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigation = useNavigation();

  const resetSearch = () => {
    setSearchTerm('');
    resetList();
  };

  const onChangeText = text => {
    if (text.length === 0) {
      resetSearch();
    } else {
      setSearchTerm(text);
      fetchProductList(0, text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexView}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imageButton}
              source={require('../assets/ic-back.png')}
            />
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.headerText}>Search</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imageButton}
              source={require('../assets/ic-close.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <SearchBox value={searchTerm} onChangeText={onChangeText} />

          {isLoading ? (
            <View>
              <ActivityIndicator />
            </View>
          ) : products.length > 0 ? (
            <ListProductSearch
              onCancelSearch={resetSearch}
              products={products}
            />
          ) : (
            <>
              {searchTerm.length > 0 && (
                <View>
                  <Text>Not found products</Text>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  flexView: {
    flex: 1,
    paddingHorizontal: SPACING,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageButton: {
    width: 36,
    height: 36,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
