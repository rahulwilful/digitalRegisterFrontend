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

import {editUserIcon, userIconOrange} from '../../../Constants/imagesAndIcons';
import KeyboardAvoidingComponent from '../../../Components/KeyboardAvoidingComponent';
import Loading from '../../../Constants/Loading';
import FullModalComponent from '../../../Components/FullModalComponent';

const UpdateUser = ({
  route,
  navigation,
  updateModal,
  closeModal,
  handleSetUpadateUserList,
  userData,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  useEffect(() => {
    //console.log('user: ', userData);
    setName(userData?.name);
    setEmail(userData?.email);
    setPassword(userData?.password);
    setMobileNo(userData?.mobile_no);
    setRole(userData?.role_type._id);
    setStorageLocation(userData?.storage_location_id._id);
    getData();
  }, [userData]);

  useEffect(() => {
    //console.log('storageLocation : ', storageLocation);
  }, [storageLocation]);

  const getData = async () => {
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

  const handleUpdateUser = async () => {
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
      console.log('form: ', form);

      const res = await axiosClient
        .put(`/user/update/${userData._id}`, form)
        .catch(err => console.log(err));
      //console.log(res.data.result);
      if (res) {
        handleSetUpadateUserList(res.data.result);
        showToast('User updated ');
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

    setButtonLoading(false);
    closeModal();
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
        height={'53%'}
        isModalVisible={updateModal}
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
                value={mobileNo ? mobileNo.toString() : ''}
                onChangeText={setMobileNo}
              />

              <TextInput
                style={[s.input]}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
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
                  method={handleUpdateUser}>
                  <Text style={[ES.textLight, ES.fw700, ES.f20]}>Update</Text>
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

export default UpdateUser;

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
