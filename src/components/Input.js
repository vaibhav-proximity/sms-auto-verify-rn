import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = props => (
  <View>
    <TextInput style={styles.input} {...props} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: 250,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },
});

export default Input;
