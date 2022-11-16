import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Keyboard, StyleSheet} from 'react-native';
import SMSUserConsent from 'react-native-sms-user-consent';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

const OtpVerify = () => {
  const [code, setCode] = useState('');
  const navigator = useNavigation();
  const [loading, setLoading] = useState(false);
  const submit = useCallback(() => {
    console.log('verifying otp');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigator.navigate('Home');
    }, 3000);
  }, [navigator]);

  //read using hash
  const otpHandler = useCallback(
    message => {
      const otp = /(\d{4})/g.exec(message)[1];
      setCode(otp);
      Keyboard.dismiss();
      submit();
    },
    [submit],
  );
  // useEffect(() => {
  //   RNOtpVerify.getHash().then(console.log).catch(console.error);
  //   RNOtpVerify.getOtp()
  //     .then(() => RNOtpVerify.addListener(otpHandler))
  //     .catch(console.error);
  //   return () => RNOtpVerify.removeListener();
  // }, [otpHandler]);

  const getSMSMessage = useCallback(async () => {
    interface SMSMessage {
      receivedOtpMessage: string;
    }
    console.log('starting receiver for otp');
    try {
      const message: SMSMessage = await SMSUserConsent.listenOTP();
      console.log(message.receivedOtpMessage);
      const otp = /(\d{4})/g.exec(message.receivedOtpMessage)[1];
      console.log(otp);
      otpHandler(otp);
    } catch (e) {
      // error
      console.error(e);
    }
  }, [otpHandler]);

  const removeSmsListener = () => {
    try {
      SMSUserConsent.removeOTPListener();
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getSMSMessage();
    return () => removeSmsListener();
  }, [getSMSMessage]);
  return (
    <View style={styles.container}>
      {loading && <Loader text="Redirecting..." />}
      <Input value={code} onChangeText={setCode} keyboardType="number-pad" />
      <Button title="Submit" onPress={submit} />
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

export default OtpVerify;
