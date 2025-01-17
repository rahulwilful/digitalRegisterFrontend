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
  KeyboardAvoidingView,
  Platform,
  Dimensions,
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

import {locationIcon, userIconOrange} from '../../Constants/imagesAndIcons';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';

const AddLocation = ({navigation}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

  const screenHeight = Dimensions.get('window').height;

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const getData = async () => {
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

  const handleAddLocation = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        name: name,
        city: city,
        state: state,
        address: address,
        pin_code: pinCode,
      };
      console.log('form: ', form);
      const token = await AsyncStorage.getItem('token');

      const res = await axiosClient.post('/storage/location/add', form);
      dispatch(toggleLogin(true));
      if (res) {
        showToast('Location added successfully');
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
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

    if (!city) {
      showToast('Please enter city');
      return false;
    }

    if (!state) {
      showToast('Please enter state');
      return false;
    }

    if (!address) {
      showToast('Please enter address');
      return false;
    }

    if (!pinCode) {
      showToast('Please enter pin code');
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

  return (
    <>
      <KeyboardAvoidingComponent>
        <View style={[s.container, ES.my5]}>
          <View style={[s.card]}>
            <View style={[s.imageContainer]}>
              <Image
                source={locationIcon}
                style={[ES.hs100, ES.objectFitContain]}
              />
            </View>

            <TextInput
              style={[s.input]}
              placeholder="Warehouse Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={[s.input]}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              style={[s.input]}
              placeholder="State"
              value={state}
              onChangeText={setState}
            />
            <TextInput
              style={[s.input]}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={[s.input]}
              placeholder="Pin Code"
              keyboardType="phone-pad"
              value={pinCode}
              onChangeText={setPinCode}
            />
            <View style={[ES.w100, ES.fx0, ES.centerItems, ES.mt1]}>
              <Btn method={handleAddLocation}>
                <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
              </Btn>
            </View>
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default AddLocation;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.centerItems, ES.w100, {backgroundColor}]),
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
    ES.gap3,
    ES.px1,
    ES.bRadius10,
    ES.shadow7,

    ES.pb3,
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
    ES.relative,
    ES.shadow10,
    ES.absolute,
    {borderRadius: 100, top: -50, backgroundColor: primaryColor},
  ]),
});
