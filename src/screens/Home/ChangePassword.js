import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  primaryColor,
  primaryInputBorderColor,
} from '../../Constants/Colours';
import axiosClient from '../../../axiosClient';
import {toggleLogin} from '../../Redux/actions/action';
import {Picker} from '@react-native-picker/picker';
import HeadingText from '../../Components/HeadingText';
import Btn from '../../Components/Btn';

import {
  editUserIcon,
  logOutIcon,
  userIconOrange,
  whitePenIcon,
} from '../../Constants/imagesAndIcons';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';
import Loading from '../../Constants/Loading';
import Header from '../../Components/Header';

const screenHeight = Dimensions.get('window').height;

const ChangePassword = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [mobileNo, setMobileNo] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [currentUser, setCurrentUser] = useState({});

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(toggleLogin(false));
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      setCurrentUser(currentRes.data.result);
      console.log('currentRes: ', currentRes.data.result.mobile_no);
      setName(currentRes.data.result.name);
      setMobileNo(currentRes.data.result.mobile_no);
      setEmail(currentRes.data.result.email);
      setStorageLocation(currentRes.data.result.storage_location_id._id);
      setRole(currentRes.data.result.role_type._id);
    } catch (error) {
      console.log('Error fetching storage locations:', error);
    }

    try {
      const storageRes = await axiosClient.get('/storage/location/getall');
      setStorageLocations(storageRes.data.result);
      console.log('storageRes: ', storageRes.data.result);
    } catch (error) {
      console.log('Error fetching storage locations:', error);
    }

    try {
      const rolesRes = await axiosClient.get('/role/getall');
      setRoles(rolesRes.data.result);
    } catch (error) {
      console.log('Error fetching roles:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkLogin();
    getData();
  }, []);

  const handleChangePassword = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        old_password: oldPassword,
        password: newPassword,

        email: email,
      };

      const token = await AsyncStorage.getItem('token');

      const res = await axiosClient.post('/user/reset/password', form);

      if (res) {
        showToast(res.data.message);

        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('Unexpected error:', error);
    }
  };

  const verifyInputs = () => {
    if (!name) {
      showToast('Please enter name');
      return false;
    }

    if (!oldPassword) {
      showToast('Please enter old password');
      return false;
    }

    if (!newPassword) {
      showToast('Please enter new password');
      return false;
    }

    if (newPassword.length < 6) {
      showToast('Password should be at least 6 characters long');
      return false;
    }

    if (!confirmPassword) {
      showToast('Please enter confirm password');
      return false;
    }

    if (newPassword !== confirmPassword) {
      showToast('Password and confirm password should be same');
      return false;
    }

    return true;
  };

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  useEffect(() => {
    console.log('mobileNo : ', mobileNo);
  }, [mobileNo]);

  return (
    <>
      <KeyboardAvoidingComponent>
        <View style={[ES.fx1, ES.h100, ES.w100, {height: screenHeight}]}>
          <Header>Change Password</Header>
          <View style={[s.container, isLoading ? ES.dNone : null]}>
            <View style={[s.card]}>
              <TextInput
                style={[s.input]}
                placeholder="Old Password"
                secureTextEntry={true}
                value={oldPassword}
                onChangeText={text => setOldPassword(text)}
              />
              
              <TextInput
                style={[s.input]}
                placeholder="New Password"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={text => setNewPassword(text)}
              />

              <TextInput
                style={[s.input]}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
              />

              <View style={[ES.flexRow, ES.gap2, ES.mt1]}>
                <Btn method={handleChangePassword} px={10} width={'87%'}>
                  <Text>Change Password</Text>
                </Btn>
              </View>
            </View>
          </View>
          <View style={[ES.fx1, isLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default ChangePassword;

const s = StyleSheet.create({
  container: StyleSheet.flatten([
    ES.fx1,
    ES.centerItems,

    ES.w100,
    {backgroundColor},
  ]),
  input: StyleSheet.flatten([
    {
      borderBottomWidth: 1,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
    ES.w90,
    ES.px1,
    ES.f16,
    ES.mt1,
  ]),

  button: StyleSheet.flatten([
    ES.tempBorder,
    ES.bgPrimary,
    ES.px3,
    ES.bRadius5,
    ES.py04,
    ES.shadow1,
  ]),

  card: StyleSheet.flatten([
    ES.w80,
    ES.fx0,
    ES.centerItems,

    ES.gap5,
    ES.px1,
    ES.bRadius10,
    ES.shadow7,
    ES.pt3,

    ES.pb3,
    {
      backgroundColor,
    },
    ES.relative,
  ]),
  userIcon: StyleSheet.flatten([ES.hs100, ES.objectFitContain]),
  imageContainer: StyleSheet.flatten([
    ES.hs100,
    ES.ws100,
    ES.centerItems,
    ES.relative,
    ES.shadow10,
    ES.absolute,
    {borderRadius: 100, top: -50, backgroundColor: primaryColor},
  ]),
});
