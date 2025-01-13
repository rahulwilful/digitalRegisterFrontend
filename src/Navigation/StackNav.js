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
import UpdateUser from '../screens/Users/UpdateUser';
import AddRecord from '../screens/WareHouse/AddRecord';
import AllItems from '../screens/Items/AllItems';
import AddItem from '../screens/Items/AddItem';
import AllUsers from '../screens/Users/AllUsers';
import MyAccount from '../screens/Home/MyAccount';

const Stack = createNativeStackNavigator();

export const StackNav = () => {
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
        name="stackAddRecord"
        component={AddRecord}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const ItemStack = () => {
  return (
    <Stack.Navigator initialRouteName="stackAllItems">
      <Stack.Screen
        name="stackAllItems"
        component={AllItems}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="stackUpdateItem"
        component={UpdateItem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="stackAllUsers">
      <Stack.Screen
        name="stackAllUsers"
        component={AllUsers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="stackUpdateUser"
        component={UpdateUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="stackMyAccount">
      <Stack.Screen
        name="stackMyAccount"
        component={MyAccount}
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
