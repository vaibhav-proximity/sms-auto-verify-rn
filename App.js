import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './src/screens/Auth';
import OtpVerify from './src/screens/OtpVerify';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
