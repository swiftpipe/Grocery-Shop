import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      <View style={styles.groupText}>
        <Text style={styles.nameDisplay}>
          <Text style={styles.bold}>Hi</Text>, <Text>Casey</Text>
        </Text>
        <Text style={styles.desc}>What would you buy today?</Text>
      </View>
      <TouchableOpacity>
        <Image source={require('../assets/ic-checkout.png')} />
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
});
