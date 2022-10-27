import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const ScreenHeight = Dimensions.get('window').height;

const Loader = ({text}) => {
  return (
    <View style={styles.container}>
      {text?.length && <Text>{text}</Text>}
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c2c2c2',
    height: ScreenHeight - 72,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
