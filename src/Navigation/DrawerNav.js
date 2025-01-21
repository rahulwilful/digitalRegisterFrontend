import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
  darkTextColor,
  headerBackgroundColor,
  lightDarkColor,
  primaryColor,
} from '../Constants/Colours';
import {
  allItemsIcon,
  allUsersIcon,
  contactUsIcon,
  homeIcon,
  logOutDarkIcon,
  logOutIcon,
  newItemIcon,
  newRecordIcon,
  newUserIcon,
  privacyPolicyIcon,
  tearmsAndConditionsIcon,
  userIcon,
} from '../Constants/imagesAndIcons';

import Tabs from './Tabs';
import AddUser from '../screens/Users/components/AddUser';
import AddItem from '../screens/Items/AddItem';
import AddRecord from '../screens/WareHouse/AddRecord';
import {ItemStack, HomeStack, UserStack, AccountStack} from './StackNav';

import {useDispatch, useSelector} from 'react-redux';

import ES from '../styles/ES';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import NormalText from '../Components/NormalText';
import HeadingText from '../Components/HeadingText';
import Btn from '../Components/Btn';
import {toggleLogin} from '../Redux/actions/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrivacyPolicy from '../screens/Home/PrivacyPolicy';
import TearmsAndConditions from '../screens/Home/TearmsAndConditions';
import ContactUs from '../screens/Home/ContactUs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {LockVectoreIcon, UserVectoreIcon} from '../Constants/VectoreIcons';

const Drawer = createDrawerNavigator();
const screenHeight = Dimensions.get('window').height;

const DrawerContent = ({}) => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const fontSize = 15;
  const iconSize = 34;

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(toggleLogin(false));
  };

  return (
    <View style={[ES.fx1]}>
      <DrawerContentScrollView contentContainerStyle={[]}>
        <View style={[ES.fx1]}>
          <View
            style={[
              ES.flexRow,
              ES.gap2,
              ES.pb06,
              ES.mb1,
              ES.alignItemsCenter,
              {borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.1)'},
            ]}>
            <TouchableOpacity onPress={() => navigation.navigate('account')}>
              {/*  <Image
                source={userIcon}
                style={[ES.hs40, ES.ws40, ES.objectFitContain]}
              /> */}
              <UserVectoreIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('account')}
              style={[]}>
              <HeadingText size={17}>{user?.name}</HeadingText>
              <NormalText>{user?.email}</NormalText>
            </TouchableOpacity>
          </View>
          <View style={[]}></View>
          <View style={[]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('privacyPolicy')}>
              <View style={[ES.py04]}>
                <View style={[ES.flexRow, ES.gap3, ES.alignItemsCenter]}>
                  <LockVectoreIcon />
                  {/* <Image source={privacyPolicyIcon} style={[s.icon]} /> */}
                  <NormalText textCenter color={lightDarkColor} size={fontSize}>
                    Privacy Policy
                  </NormalText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('tearmsAndConditions')}>
              <View style={[ES.py04]}>
                <View style={[ES.flexRow, ES.gap3, ES.alignItemsCenter]}>
                  <Image source={tearmsAndConditionsIcon} style={[s.icon]} />
                  <NormalText textCenter color={lightDarkColor} size={fontSize}>
                    Tearms & Conditions
                  </NormalText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[]}>
            <TouchableOpacity onPress={() => navigation.navigate('contactUs')}>
              <View style={[ES.py04]}>
                <View style={[ES.flexRow, ES.gap3, ES.alignItemsCenter]}>
                  <Image source={contactUsIcon} style={[s.icon]} />
                  <NormalText textCenter color={lightDarkColor} size={fontSize}>
                    Contact Us
                  </NormalText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={[ES.px1]}>
        <View
          style={[ES.py1, {borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.1)'}]}>
          <TouchableOpacity onPress={() => handleLogOut()} style={[]}>
            <View style={[, ES.flexRow, ES.gap1, ES.centerItems]}>
              <NormalText textCenter color={lightDarkColor} size={fontSize}>
                Log out
              </NormalText>
              <Image
                source={logOutDarkIcon}
                style={[ES.hs25, ES.ws25, ES.objectFitContain, ES.opacity70]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const DrawerNav = () => {
  const headerTitle = useSelector(state => state.header);

  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
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
        component={Tabs}
        options={{
          drawerIcon: () => (
            <Image source={homeIcon} style={{width: 30, height: 30}} />
          ),
        }}
      />

      <Drawer.Screen name="account" component={AccountStack} options={{}} />
      <Drawer.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{}}
      />

      <Drawer.Screen
        name="tearmsAndConditions"
        component={TearmsAndConditions}
        options={{}}
      />
      <Drawer.Screen name="contactUs" component={ContactUs} options={{}} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const s = StyleSheet.create({
  icon: StyleSheet.flatten([ES.hs34, ES.ws34, ES.objectFitContain]),
});
