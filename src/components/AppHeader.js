import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../App';

const AppHeader = () => {
  const navigation = useNavigation();
  const {products} = useAppContext();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      <View style={styles.groupText}>
        <Text style={styles.nameDisplay}>
          <Text style={styles.bold}>Hi</Text>, <Text>Casey</Text>
        </Text>
        <Text style={styles.desc}>What would you buy today?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <Image source={require('../assets/ic-checkout.png')} />
        {products.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{products.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  nameDisplay: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 12,
    color: '#A1A1A1',
    marginTop: 4,
  },
  groupText: {
    flex: 1,
    marginLeft: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    aspectRatio: 1,
    width: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: -5,
    top: -5,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
