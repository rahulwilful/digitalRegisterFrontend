import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import UnAuthorized from './UnAuthorized';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toggleLogin, addUser} from '../Redux/actions/action';

import Tabs from './Tabs';
import DrawerNav from './DrawerNav';
import ES from '../styles/ES';
import Loading from '../Constants/Loading';
import {primaryColor} from '../Constants/Colours';

const Routes = () => {
  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getCurrent = async () => {
    setIsLoading(true);
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      //console.log('App currentRes: ', currentRes.data.result);
      dispatch(addUser(currentRes.data.result));
    } catch (error) {
      console.log('App error: ', error);
    }

    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token) {
      dispatch(toggleLogin(true));
    }
    setIsLoading(false);
  };

  const checkLogin = async () => {};

  useEffect(() => {
    getCurrent();
  }, []);

  useEffect(() => {
    console.log('isLogged', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <View
        style={[
          ES.fx1,
          isLoading ? ES.dBlock : ES.dNone,
          {backgroundColor: primaryColor},
        ]}>
        <Loading size={'large'} color={'#fff'} />
      </View>
      <GestureHandlerRootView
        style={[isLoading ? ES.dNone : ES.dBlock, {flex: 1}]}>
        <NavigationContainer>
          {isLoggedIn ? <Tabs /> : <UnAuthorized />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default Routes;
