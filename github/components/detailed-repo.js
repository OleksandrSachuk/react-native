import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const DetailedRepo = () => (
  <View style={styles.page}>
    <Text style={styles.text}>
      DetailedRepo
    </Text>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default DetailedRepo;
