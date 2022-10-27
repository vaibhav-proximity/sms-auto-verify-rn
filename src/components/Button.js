import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, ...rest}) => (
  <TouchableOpacity style={styles(rest).button} {...rest}>
    <Text style={styles(rest).text}>{title}</Text>
  </TouchableOpacity>
);

const styles = props =>
  StyleSheet.create({
    button: {
      width: 150,
      padding: 16,
      backgroundColor: props.disabled ? 'gray' : '#0e9e38',
      margin: 8,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    text: {color: 'white', fontSize: 16},
  });

export default Button;
