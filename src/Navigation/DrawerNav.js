import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './Tabs';
import AddUser from '../screens/Authentication/AddUser';
import AddItem from '../screens/Items/AddItem';
import AddRecord from '../screens/WareHouse/AddRecord';
import StackNav from './StackNav';
import {headerBackgroundColor} from '../Constants/Colours';
import {
  homeIcon,
  newItemIcon,
  newRecordIcon,
  newUserIcon,
} from '../Constants/imagesAndIcons';
import {useSelector} from 'react-redux';
import AllItems from '../screens/Items/AllItems';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const headerTitle = useSelector(state => state.header);

  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('user', user);
  }, [user]);

 

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: headerBackgroundColor,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Home"
        component={StackNav}
        options={{
          headerTitle: headerTitle,
          drawerIcon: () => (
            <Image source={homeIcon} style={{width: 30, height: 30}} />
          ),
        }}
      />
      <Drawer.Screen
        name="New Record"
        component={AddRecord}
        options={{
          drawerIcon: () => (
            <Image source={newRecordIcon} style={{width: 35, height: 35}} />
          ),
        }}
      />
      {user?.role_type.value == 'super_admin' && (
        <Drawer.Screen
          name="New User"
          component={AddUser}
          options={{
            drawerIcon: () => (
              <Image source={newUserIcon} style={{width: 35, height: 35}} />
            ),
          }}
        />
      )}

      <Drawer.Screen
        name="New Item"
        component={AddItem}
        options={{
          drawerIcon: () => (
            <Image source={newItemIcon} style={{width: 40, height: 40}} />
          ),
        }}
      />

      <Drawer.Screen
        name="All Items"
        component={AllItems}
        options={{
          headerTitle: 'All Items',
          drawerIcon: () => (
            <Image source={newItemIcon} style={{width: 40, height: 40}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
