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
import ES from '../../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  primaryColor,
  primaryInputBorderColor,
} from '../../../Constants/Colours';
import axiosClient from '../../../../axiosClient';
import {toggleLogin} from '../../../Redux/actions/action';
import {Picker} from '@react-native-picker/picker';
import HeadingText from '../../../Components/HeadingText';
import Btn from '../../../Components/Btn';

import {locationIcon, userIconOrange} from '../../../Constants/imagesAndIcons';
import KeyboardAvoidingComponent from '../../../Components/KeyboardAvoidingComponent';
import FullModalComponent from '../../../Components/FullModalComponent';
import axios from 'axios';

const AddLocation = ({addModal, closeModal, handleUpdateLocationList}) => {
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

  const [buttonLoading, setButtonLoading] = useState(false);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const getCityAndState = async () => {
    try {
      const cityAndStateRes = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`,
      );
      console.log('cityAndStateRes: ', cityAndStateRes.data[0].PostOffice[0]);
      setCity(cityAndStateRes.data[0].PostOffice[0].Name);
      setState(cityAndStateRes.data[0].PostOffice[0].State);
      const city = cityAndStateRes.data[0].PostOffice[0].Name;
      const state = cityAndStateRes.data[0].PostOffice[0].State;
      const district = cityAndStateRes.data[0].PostOffice[0].District;
      setAddress(`${city}, ${state}, ${district}`);
    } catch (error) {
      console.log('Error fetching city and state:', error);
    }
  };

  useEffect(() => {
    if (pinCode && pinCode.length > 5) getCityAndState();
  }, [pinCode]);

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
    setButtonLoading(true);
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
        handleUpdateLocationList(res.data.result);
      }
      closeModal();
      setName('');
      setCity('');
      setState('');
      setAddress('');
      setPinCode('');
    } catch (error) {
      if (error.response?.status === 409) {
        showToast(error.response.data.message);
      } else if (error.response?.status === 403) {
        showToast(error.response.data.message);
      } else {
        console.log('Unexpected error:', error);
      }
    }
    setButtonLoading(false);
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
    if (pinCode.length < 6) {
      showToast('Please enter valide pincode');
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
      <FullModalComponent
        height={'53%'}
        isModalVisible={addModal}
        closeModal={closeModal}>
        <KeyboardAvoidingComponent bg={false}>
          <View style={[s.container]}>
            <View style={[s.card]}>
              <TextInput
                style={[s.input]}
                placeholder="Pin Code"
                keyboardType="phone-pad"
                value={pinCode}
                onChangeText={setPinCode}
              />
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

              <View style={[ES.w100, ES.fx0, ES.centerItems, ES.mt2]}>
                <Btn
                  buttonLoading={buttonLoading}
                  width={'90%'}
                  method={handleAddLocation}>
                  <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
                </Btn>
              </View>
            </View>
          </View>
        </KeyboardAvoidingComponent>
      </FullModalComponent>
    </>
  );
};

export default AddLocation;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.centerItems, ES.w100]),
  input: StyleSheet.flatten([
    {
      borderBottomWidth: 1,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
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
    ES.w100,
    ES.fx0,
    ES.centerItems,
    ES.gap3,
    ES.px1,
    ES.bRadius10,

    ES.pb3,
    {},
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
