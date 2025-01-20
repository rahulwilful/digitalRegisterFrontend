/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ES from './src/styles/ES';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/Authentication/SignIn';
import SignUp from './src/screens/Authentication/SignUp';
import Register from './src/screens/WareHouse/Register';
import Routes from './src/Navigation/Routes';
import AddUser from './src/screens/Users/components/AddUser';
import AddRecord from './src/screens/WareHouse/AddRecord';
import axiosClient from './axiosClient';
import {addUser} from './src/Redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import AddItem from './src/screens/Items/AddItem';
import Records from './src/screens/WareHouse/Records';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getCurrent = async () => {
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      //console.log('App currentRes: ', currentRes.data.result);
      dispatch(addUser(currentRes.data.result));
    } catch (error) {
      console.log('App error: ', error);
    }
  };

  useEffect(() => {
    // getCurrent();
  }, []);

  useEffect(() => {
    console.log('App user: ', user);
  }, [user]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
      {/*  <SignIn /> */}
      {/* <Register /> */}
    </SafeAreaView>
  );
};

export default App;
