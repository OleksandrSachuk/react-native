import React  from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const TopRepos = () => (
  <View style={styles.page}>
    <Text
        style={styles.text}
        onPress={() => Actions.DetailedRepo()}
    >
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

export default TopRepos;
