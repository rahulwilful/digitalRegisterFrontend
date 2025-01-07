import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import MyAccount from '../screens/Home/MyAccount';
import StackNav from './StackNav';
import {homeIcon, userIcon} from '../Constants/imagesAndIcons';
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="drawerHome"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="drawerHome"
        options={{
          title: '',

          tabBarIcon: ({focused}) => (
            <Image
              source={homeIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        component={DrawerNav}
      />
      <Tab.Screen
        name="tabMyAccount"
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={userIcon}
              style={{
                width: 33,
                height: 33,
              }}
            />
          ),
        }}
        component={MyAccount}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
