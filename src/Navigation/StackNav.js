import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/WareHouse/Register';
import Home from '../screens/Home/Home';
import Tabs from './Tabs';
import DrawerNav from './DrawerNav';
import Records from '../screens/WareHouse/Records';
import UpdateItem from '../screens/Items/UpdateItem';
import UpdateAccount from '../screens/Home/UpdateAccount';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="stackHome">
      <Stack.Screen
        name="stackHome"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="stackRecord"
        component={Records}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="stackUpdateItem"
        component={UpdateItem}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="stackUpdateAccount"
        component={UpdateAccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
