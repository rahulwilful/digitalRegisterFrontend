import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {backgroundColor, primaryColor} from '../../Constants/Colours';
import axiosClient from '../../../axiosClient';
import {toggleLogin} from '../../Redux/actions/action';
import {Picker} from '@react-native-picker/picker';
import HeadingText from '../../Components/HeadingText';
import Btn from '../../Components/Btn';

import {
  logOutIcon,
  userIconOrange,
  whitePenIcon,
} from '../../Constants/imagesAndIcons';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';

const MyAccount = ({navigation}) => {
  const [name, setName] = useState('rahul');
  const [email, setEmail] = useState('rahre49@gmail.com');
  const [password, setPassword] = useState('111111');
  const [mobileNo, setMobileNo] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

  const [currentUser, setCurrentUser] = useState({});

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(toggleLogin(false));
  };

  const getData = async () => {
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      setCurrentUser(currentRes.data.result);
      console.log('currentRes: ', currentRes.data.result.mobile_no);
      setName(currentRes.data.result.name);
      setMobileNo(currentRes.data.result.mobile_no);
      setEmail(currentRes.data.result.email);
      setStorageLocation(currentRes.data.result.storage_location_id.name);
      setRole(currentRes.data.result.role_type.name);
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
  };

  useEffect(() => {
    checkLogin();
    getData();
  }, []);

  const handleAddUser = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        name,
        mobile_no: mobileNo,
        email,
        password,
        storage_location_id: storageLocation,
        role_type: role,
      };

      const token = await AsyncStorage.getItem('token');

      const res = await axiosClient.post('/user/create', form);
      dispatch(toggleLogin(true));
      if (res) {
        showToast('User added successfully');
      }
    } catch (error) {
      if (error.response?.status === 409) {
        showToast(error.response.data.message);
      } else if (error.response?.status === 403) {
        showToast(error.response.data.message);
      } else {
        console.log('Unexpected error:', error);
      }
    }
  };

  const verifyInputs = () => {
    if (!name) {
      showToast('Please enter name');
      return false;
    }

    if (!mobileNo) {
      showToast('Please enter mobile number');
      return false;
    }

    if (!email) {
      showToast('Please enter email');
      return false;
    }

    if (!password) {
      showToast('Please enter password');
      return false;
    }

    if (!storageLocation) {
      showToast('Please select storage location');
      return false;
    }

    if (!role) {
      showToast('Please select role');
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
      <KeyboardAvoidingComponent py={0}>
        <View style={[s.container]}>
          <View style={[s.card]}>
            <View style={[s.imageContainer]}>
              <Image
                source={userIconOrange}
                style={[ES.hs100, ES.objectFitContain]}
              />
            </View>

            <TextInput style={[s.input]} placeholder="Name" value={name} />
            <TextInput
              style={[s.input]}
              placeholder="Mobile Number"
              value={mobileNo.toString()}
            />
            <TextInput
              style={[s.input]}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
            />
            <TextInput
              style={[s.input]}
              placeholder="Storage Location"
              keyboardType="email-address"
              value={storageLocation}
            />
            <TextInput
              style={[s.input]}
              placeholder="Role"
              keyboardType="email-address"
              value={role}
            />
            <View style={[ES.flexRow, ES.gap2]}>
              <Btn
                method={() => navigation.navigate('stackUpdateAccount')}
                px={10}
                width={'30%'}>
                <View style={[ES.h100]}>
                  <Image
                    source={whitePenIcon}
                    style={[ES.hs22, ES.ws22, ES.objectFitContain]}
                  />
                </View>
              </Btn>
              <Btn method={handleLogOut} px={10} width={'30%'}>
                <View style={[ES.h100]}>
                  <Image
                    source={logOutIcon}
                    style={[ES.hs22, ES.ws22, ES.objectFitContain]}
                  />
                </View>
              </Btn>
            </View>
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default MyAccount;

const s = StyleSheet.create({
  container: StyleSheet.flatten([
    ES.fx1,
    ES.my5,

    ES.centerItems,
    ES.w100,
    {backgroundColor},
  ]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
    ES.w90,
    ES.px1,
    ES.f16,
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
    ES.pb3,
    ES.shadow7,

    {
      backgroundColor,
      borderTopRightRadius: 100,
      borderTopLeftRadius: 100,
      paddingTop: 70,
    },
    ES.relative,
  ]),
  userIcon: StyleSheet.flatten([ES.hs100, ES.objectFitContain]),
  imageContainer: StyleSheet.flatten([
    ES.hs100,
    ES.ws100,
    ES.centerItems,
    ES.tempBorder,
    ES.relative,
    ES.shadow10,
    ES.absolute,
    {borderRadius: 100, top: -50},
  ]),
});
