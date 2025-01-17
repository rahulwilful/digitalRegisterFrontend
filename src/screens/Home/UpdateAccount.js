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
  editUserIcon,
  logOutIcon,
  userIconOrange,
  whitePenIcon,
} from '../../Constants/imagesAndIcons';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';
import Loading from '../../Constants/Loading';

const UpdateAccount = ({navigation}) => {
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

  const handleUpdateUser = async () => {
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

    if (!mobileNo) {
      showToast('Please enter mobile number');
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
        <View style={[s.container, isLoading ? ES.dNone : null]}>
          <View style={[s.card]}>
            <View style={[s.imageContainer]}>
              <Image
                source={editUserIcon}
                style={[ES.hs65, ES.objectFitContain]}
              />
            </View>

            <TextInput
              style={[s.input, ES.mt2]}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={[s.input]}
              placeholder="Mobile Number"
              value={mobileNo.toString()}
              onChangeText={text => setMobileNo(text)}
            />
            {/*   <TextInput
              style={[s.input]}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
            /> */}
            {/*    {storageLocations.length > 0 &&
              currentUser.role_type.value == 'super_admin' && (
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
              )} */}
            {/* 
            {roles.length > 0 && (
              <View style={[s.input]}>
                <Picker
                  disabled={true}
                  selectedValue={role}
                  onValueChange={setRole}>
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
            )} */}
            <View style={[ES.flexRow, ES.gap2, ES.mt1]}>
              <Btn method={handleUpdateUser} px={10} width={'50%'}>
                <Text>Update</Text>
              </Btn>
            </View>
          </View>
        </View>
        <View style={[ES.fx1, isLoading ? null : ES.dNone]}>
          <Loading />
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default UpdateAccount;

const s = StyleSheet.create({
  container: StyleSheet.flatten([
    ES.fx1,
    ES.centerItems,
    ES.my5,
    ES.w100,
    {backgroundColor},
  ]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
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
    ES.pt5,
    ES.gap5,
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
