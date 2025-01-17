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
import {headerBackgroundColor} from '../Constants/Colours';
import WareHouses from '../screens/WareHouse/WareHouses';
import AddUser from '../screens/Users/AddUser';
import RecordDetails from '../screens/WareHouse/RecordDetails';
import AddWareHouse from '../screens/WareHouse/AddWareHouse';
import AddLocation from '../screens/Location/AddLocation';
import AllLocations from '../screens/Location/AllLocations';
import AllQuantityUnits from '../screens/Items/AllQuantityUnits';
import AddQuentityUnit from '../screens/Items/AddQuentityUnit';
import UpdateQuantityUnit from '../screens/Items/UpdateQuantityUnit';
import UpdateLocation from '../screens/Location/UpdateLocation';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackHome"
      screenOptions={{
        headerTitle: 'Home',
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="stackHome"
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="stackRecord"
        component={Records}
        options={{
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="stackAddRecord"
        component={AddRecord}
        options={{
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="stackDrawerNav"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="stackWareHouses"
        component={WareHouses}
        options={{
          headerTitle: 'Warehouses',
        }}
      />
      <Stack.Screen
        name="newUser"
        component={AddUser}
        options={{
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="allUsers"
        component={AllUsers}
        options={{
          headerTitle: 'All Users',
        }}
      />
      <Stack.Screen
        name="stackUpdateUser"
        component={UpdateUser}
        options={{
          headerTitle: 'Update User',
        }}
      />
      <Stack.Screen
        name="newItem"
        component={AddItem}
        options={{
          headerTitle: 'Add Item',
        }}
      />
      <Stack.Screen
        name="allItems"
        component={AllItems}
        options={{
          headerTitle: 'All Items',
        }}
      />
      <Stack.Screen
        name="stackUpdateItem"
        component={UpdateItem}
        options={{
          headerTitle: 'Update Item',
        }}
      />

      <Stack.Screen
        name="stackRecordDetails"
        component={RecordDetails}
        options={{
          headerTitle: '',
        }}
      />

      <Stack.Screen
        name="stackAddLocation"
        component={AddLocation}
        options={{
          headerTitle: 'Add Locatation',
        }}
      />

      <Stack.Screen
        name="stackAllLocations"
        component={AllLocations}
        options={{
          headerTitle: 'All Locations',
        }}
      />
      <Stack.Screen
        name="stackUpdateLocation"
        component={UpdateLocation}
        options={{
          headerTitle: 'Update Location',
        }}
      />
      <Stack.Screen
        name="stackAllQuantityUnits"
        component={AllQuantityUnits}
        options={{
          headerTitle: 'All Quantity Units',
        }}
      />
      <Stack.Screen
        name="stackAddQuantityUnits"
        component={AddQuentityUnit}
        options={{
          headerTitle: 'Add Quantity Unit',
        }}
      />
      <Stack.Screen
        name="stackUpdateQuantityUnit"
        component={UpdateQuantityUnit}
        options={{
          headerTitle: 'Update Quantity Unit',
        }}
      />
    </Stack.Navigator>
  );
};

export const LocationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackAllLocations"
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="stackAllLocations"
        component={AllLocations}
        options={{headerTitle: 'All Locations'}}
      />
      <Stack.Screen
        name="stackUpdateLocation"
        component={UpdateLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="stackAddLocation"
        component={AddLocation}
        options={{
          headerTitle: 'Add Locatation',
        }}
      />
    </Stack.Navigator>
  );
};

export const ItemStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackAllItems"
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="stackAllItems"
        component={AllItems}
        options={{headerTitle: 'All Items'}}
      />
      <Stack.Screen
        name="stackUpdateItem"
        component={UpdateItem}
        options={{headerTitle: 'Update Item'}}
      />

      <Stack.Screen
        name="newItem"
        component={AddItem}
        options={{
          headerTitle: 'Add Item',
        }}
      />
    </Stack.Navigator>
  );
};

export const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackAllUsers"
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="stackAllUsers"
        component={AllUsers}
        options={{title: 'All Users'}}
      />
      <Stack.Screen
        name="stackUpdateUser"
        component={UpdateUser}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="newUser"
        component={AddUser}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackMyAccount"
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
      <Stack.Screen
        name="stackMyAccount"
        component={MyAccount}
        options={{headerTitle: 'My Account'}}
      />
      <Stack.Screen
        name="stackUpdateAccount"
        component={UpdateAccount}
        options={{headerTitle: 'Update Account'}}
      />
    </Stack.Navigator>
  );
};

/* export const QuantityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="stackMyAccount"
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
      <Stack.Screen
        name="stackAllQuantityUnits"
        component={AllQuantityUnits}
        options={{
          headerTitle: 'All Quantity Units',
        }}
      />
      <Stack.Screen
        name="stackAddQuantityUnits"
        component={AddQuentityUnit}
        options={{
          headerTitle: 'Add Quantity Unit',
        }}
      />
      <Stack.Screen
        name="stackUpdateQuantityUnit"
        component={UpdateQuantityUnit}
        options={{
          headerTitle: 'Update Quantity Unit',
        }}
      />
    </Stack.Navigator>
  );
}; */
