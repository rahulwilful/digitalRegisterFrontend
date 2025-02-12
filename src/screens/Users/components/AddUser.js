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
import Btn from '../../../Components/Btn';

import HeadingText from '../../../Components/HeadingText';
import {userIconOrange} from '../../../Constants/imagesAndIcons';

import KeyboardAvoidingComponent from '../../../Components/KeyboardAvoidingComponent';
import Loading from '../../../Constants/Loading';
import {useNavigation} from '@react-navigation/native';
import FullModalComponent from '../../../Components/FullModalComponent';

const AddUser = ({addModal, closeModal, handleSetUpadateUserList}) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const screenHeight = Dimensions.get('window').height;

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const storageRes = await axiosClient.get('/storage/location/getall');
      setStorageLocations(storageRes.data.result);
      //console.log('storageRes: ', storageRes.data.result);
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

  const handleAddUser = async () => {
    if (!verifyInputs()) return;
    setButtonLoading(true);
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

      if (res) {
        showToast('User added successfully');
        handleSetUpadateUserList(res.data.result);

        closeModal();
        setName('');
        setEmail('');
        setPassword('');
        setMobileNo('');
        setStorageLocation('');
        setRole('');
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        showToast(error.response.data.message);
      } else {
        showToast('something went wrong');
      }

      console.log('Unexpected error:', error);

      closeModal();
    }
    setButtonLoading(false);
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

    const validateEmail = email => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(email)) {
      showToast('Please enter valid email');
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

  return (
    <>
      <FullModalComponent
        fullHeight
        height={'60%'}
        isModalVisible={addModal}
        closeModal={closeModal}>
        <KeyboardAvoidingComponent bg={false}>
          <View style={[s.container, isLoading ? ES.dNone : null]}>
            <View style={[s.card]}>
              <TextInput
                style={[s.input]}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={[s.input]}
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                value={mobileNo}
                onChangeText={setMobileNo}
              />
              <TextInput
                style={[s.input]}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={[s.input]}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              {storageLocations.length > 0 && (
                <View style={[s.input]}>
                  <Picker
                    selectedValue={storageLocation}
                    onValueChange={setStorageLocation}>
                    <Picker.Item label={'Select Location'} />
                    {storageLocations.map(item => (
                      <Picker.Item
                        key={item._id}
                        label={item.name}
                        value={item._id}
                      />
                    ))}
                  </Picker>
                </View>
              )}
              {roles.length > 0 && (
                <View style={[s.input]}>
                  <Picker selectedValue={role} onValueChange={setRole}>
                    <Picker.Item label={'Select Role'} />
                    {roles.map(item => (
                      <Picker.Item
                        key={item._id}
                        label={item.name}
                        value={item._id}
                      />
                    ))}
                  </Picker>
                </View>
              )}
              <View style={[ES.mt2, ES.w100]}>
                <Btn
                  buttonLoading={buttonLoading}
                  width={'100%'}
                  method={handleAddUser}>
                  <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
                </Btn>
              </View>
            </View>
          </View>
          <View style={[ES.fx1, isLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </KeyboardAvoidingComponent>
      </FullModalComponent>
    </>
  );
};

export default AddUser;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.centerItems, ES.w100]),
  input: StyleSheet.flatten([
    {
      borderBottomWidth: 1,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
    ES.w100,
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
    ES.w97,
    ES.centerItems,
    ES.gap2,
    ES.px1,
    ES.bRadius10,
    ES.pb3,

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
