import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

const Auth = () => {
  const navigator = useNavigation();
  const [loading, setLoading] = useState(false);
  const proceed = () => {
    console.log('generating otp');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // make the api call here... if successful, then move to Next screen
      navigator.navigate('OtpVerify');
    }, 3000);
  };
  return (
    <View style={styles.container}>
      {loading && <Loader />}
      <Input keyboardType="number-pad" />
      <Button title="Next" onPress={proceed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 72,
    alignItems: 'center',
  },
});

export default Auth;
