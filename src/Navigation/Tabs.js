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
import {
  allItemsIcon,
  allLocationsIcon,
  allUsersIcon,
  homeIcon,
  userIcon,
} from '../Constants/imagesAndIcons';
import DrawerNav from './DrawerNav';
import {headerBackgroundColor} from '../Constants/Colours';
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
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: 'white',
      }}>
      <Tab.Screen
        name="drawerHome"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => <HomeVectoreIcon />,
        }}
        component={HomeStack}
      />

      {displayAdminOptions && (
        <Tab.Screen
          name="tabAllItems"
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({focused}) => <ItemVectoreIcon />,
          }}
          component={ItemStack}
        />
      )}

      {displaySuperAdminOptions && (
        <>
          <Tab.Screen
            name="tabAllUsers"
            options={{
              headerShown: false,
              title: '',
              tabBarIcon: ({focused}) => <UsersVectoreIcon />,
            }}
            component={UserStack}
          />

          <Tab.Screen
            name="tabAllLocation"
            options={{
              headerShown: false,
              title: '',
              tabBarIcon: ({focused}) => <MapMarkerVectoreIcon />,
            }}
            component={LocationStack}
          />
        </>
      )}

      {/*  <Tab.Screen
        name="tabMyAccount"
        options={{
          headerShown: false,
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
        component={AccountStack}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
