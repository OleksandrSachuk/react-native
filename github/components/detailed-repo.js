import React  from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { ListItem, Subheader, Toolbar } from 'react-native-material-ui';

const DetailedRepo = () => (
    <ListItem
        divider
        leftElement="person"
        centerElement={{
            primaryText: 'Ali Connors',
            secondaryText: 'Brunch this weekend?',
            tertiaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum.',
        }}
        onPress={() => {}}
    />
    // <Subheader text="One line with icon" />
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
