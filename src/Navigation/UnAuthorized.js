import {View, Text} from 'react-native';
import React from 'react';
import SignIn from '../screens/Authentication/SignIn.js';
import SignUp from '../screens/Authentication/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UnAuthorized = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackSignIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="stackSignIn" component={SignIn} />
      <Stack.Screen name="stackSignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default UnAuthorized;
