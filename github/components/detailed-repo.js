import React, {
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
    backgroundColor: 'rgb(142, 68, 173)'
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default DetailedRepo;
