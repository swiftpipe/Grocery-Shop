import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import HeroBanner from '../components/HeroBanner';
import ListCategory from '../components/ListCategory';
import ListBestSeller from '../components/ListBestSeller';
import {useProduct} from '../hooks/useProduct';
import {useCategory} from '../hooks/useCategory';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [products, isLoading, fetchProducts] = useProduct();
  const categoryList = useCategory();
  const [type, setType] = React.useState(1);
  const navigation = useNavigation();

  React.useEffect(() => {
    fetchProducts(type);
  }, [type, fetchProducts]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppHeader />
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => navigation.navigate('Search')}>
          <Image source={require('../assets/ic-search.png')} />
          <Text style={styles.searchText}>Search by item name</Text>
        </TouchableOpacity>
        <HeroBanner />
        {categoryList.length > 0 && (
          <ListCategory
            categories={categoryList}
            onChange={setType}
            currentType={type}
          />
        )}
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          <ListBestSeller products={products} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  searchText: {
    fontSize: 12,
    color: '#A1A1A1',
    marginLeft: 6,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 100,
    marginVertical: 14,
  },
  scrollView: {
    padding: 14,
  },
  loading: {
    margin: 18,
  },
});
