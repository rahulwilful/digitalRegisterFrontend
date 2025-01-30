import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import MyAccount from '../screens/Home/MyAccount';
import {
  HomeStack,
  AccountStack,
  UserStack,
  LocationStack,
  ItemStack,
} from './StackNav';

import DrawerNav from './DrawerNav';
import {backgroundColor, headerBackgroundColor} from '../Constants/Colours';
import AllUsers from '../screens/Users/AllUsers';
import {useSelector} from 'react-redux';
import AllItems from '../screens/Items/AllItems';
import {
  HomeVectoreIcon,
  ItemsVectoreIcon,
  ItemVectoreIcon,
  MapMarkerVectoreIcon,
  UsersVectoreIcon,
} from '../Constants/VectoreIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [displaySuperAdminOptions, setDisplaySuperAdminOptions] =
    useState(false);
  const [displayAdminOptions, setDisplayAdminOptions] = useState(false);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user?.role_type?.value == 'super_admin') {
      setDisplaySuperAdminOptions(true);
      setDisplayAdminOptions(true);
    }
    if (user?.role_type?.value == 'admin') {
      setDisplayAdminOptions(true);
    }
  }, [user]);

  return (
    <Tab.Navigator
      initialRouteName="drawerHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: headerBackgroundColor,
          borderRadius: 20,
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 20,
          left: 20,
          right: 20,
          height: 45,
          borderRadius: 20,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.9,
          shadowRadius: 10,
          elevation: 12,
        },
      }}>
      <Tab.Screen
        name="drawerHome"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <HomeVectoreIcon size={32} color={focused ? null : 'gray'} />
          ),
        }}
        component={HomeStack}
      />

      {displayAdminOptions && (
        <>
          <Tab.Screen
            name="tabAllItems"
            options={{
              headerShown: false,
              title: '',
              tabBarIcon: ({focused}) => (
                <ItemVectoreIcon size={30} color={focused ? null : 'gray'} />
              ),
            }}  
            component={ItemStack}
          />
          <Tab.Screen
            name="tabAllUsers"
            options={{
              headerShown: false,
              title: '',
              tabBarIcon: ({focused}) => (
                <UsersVectoreIcon color={focused ? null : 'gray'} />
              ),
            }}
            component={UserStack}
          />
        </>
      )}

      {displaySuperAdminOptions && (
        <>
          <Tab.Screen
            name="tabAllLocation"
            options={{
              headerShown: false,
              title: '',
              tabBarIcon: ({focused}) => (
                <MapMarkerVectoreIcon
                  size={30}
                  color={focused ? null : 'gray'}
                />
              ),
            }}
            component={LocationStack}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default Tabs;
