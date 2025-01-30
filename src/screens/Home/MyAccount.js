import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  darkTextColor,
  lightGreyColor,
  primaryButtonColor,
  primaryColor,
  primaryDisabledButtonColor,
  primaryInputBorderColor,
  primaryTextColor,
  whiteTextColor,
} from '../../Constants/Colours';
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
import Loading from '../../Constants/Loading';
import Header from '../../Components/Header';
import NormalText from '../../Components/NormalText';
import {KeyVectoreIcon} from '../../Constants/VectoreIcons';
import * as Animatable from 'react-native-animatable';

const screenHeight = Dimensions.get('window').height;

const MyAccount = ({navigation}) => {
  const [checkName, setCheckName] = useState('');
  const [checkNumber, setCheckNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('111111');
  const [mobileNo, setMobileNo] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

  const [currentUser, setCurrentUser] = useState({});

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(state => state.auth);
  const [enableButton, setEnableButton] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const dispatch = useDispatch();

  const px = 6;
  const fontSize = 12;

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(toggleLogin(false));
  };

  const getData = async () => {
    setRenderKey(renderKey + 1);
    setIsLoading(true);
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      setCurrentUser(currentRes.data.result);
      console.log('currentRes: ', currentRes.data.result.mobile_no);
      setCheckName(currentRes.data.result.name);
      setCheckNumber(currentRes.data.result.mobile_no);
      setName(currentRes.data.result.name);
      setMobileNo(currentRes.data.result.mobile_no);
      setEmail(currentRes.data.result.email);
      setStorageLocation(currentRes.data.result.storage_location_id);
      setRole(currentRes.data.result.role_type);
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
    setRenderKey(renderKey + 1);
  };

  useEffect(() => {
    checkLogin();
    getData();
  }, []);

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

  const handleEnableButton = () => {
    if (name == checkName && mobileNo == checkNumber) {
      setEnableButton(false);
    }

    if (name != checkName || mobileNo != checkNumber) {
      setEnableButton(true);
    }
  };

  useEffect(() => {
    handleEnableButton();
  }, [name, mobileNo]);

  const handleUpdateUser = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        name,
        mobile_no: mobileNo,
        email,
        password,
        storage_location_id: storageLocation._id,
        role_type: role._id,
      };

      console.log('form: ', form);

      const res = await axiosClient.put(
        `/user/update/${currentUser?._id}`,
        form,
      );
      if (res) {
        showToast('User Updated successfully');
        setCheckName(name);
        setCheckNumber(mobileNo);
        setEnableButton(false);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
        console.log('Unexpected error:', error);
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingComponent py={0}>
        <View style={[ES.fx1, ES.h100, ES.w100, {height: screenHeight}]}>
          <Header>My Account</Header>
          <View style={[s.container, isLoading ? ES.dNone : null]}>
            <View style={[s.card]} key={renderKey}>
              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={100}
                style={[]}>
                <NormalText px={px} size={fontSize} color={primaryTextColor}>
                  Name
                </NormalText>
                <View style={[s.input]}>
                  <TextInput
                    style={[s.p0]}
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                  />
                </View>
              </Animatable.View>
              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={200}
                style={[]}>
                <NormalText px={px} size={fontSize} color={primaryTextColor}>
                  Mobile Number
                </NormalText>
                <View style={[s.input]}>
                  <TextInput
                    style={[s.p0]}
                    placeholder="Mobile Number"
                    value={mobileNo.toString()}
                    onChangeText={text => setMobileNo(text)}
                  />
                </View>
              </Animatable.View>

              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={300}>
                <NormalText px={px} size={fontSize} color={primaryTextColor}>
                  Email
                </NormalText>
                <View style={[s.disabledInput]}>
                  <NormalText py={3} color={darkTextColor}>
                    {email}
                  </NormalText>
                </View>
              </Animatable.View>

              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={400}>
                <NormalText px={px} size={fontSize} color={primaryTextColor}>
                  Password
                </NormalText>
                <View style={[ES.flexRow, ES.gap1]}>
                  <View style={[s.disabledInput, ES.w80]}>
                    <NormalText py={3} color={darkTextColor}>
                      ******
                    </NormalText>
                  </View>
                  <Btn
                    px={1}
                    method={() => navigation.navigate('stackChangePassword')}
                    width={'18%'}>
                    <KeyVectoreIcon size={25} color={'white'} />
                  </Btn>
                </View>
              </Animatable.View>

              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={500}>
                <NormalText px={px} size={fontSize} color={primaryTextColor}>
                  Storage Location
                </NormalText>
                <View style={[s.disabledInput]}>
                  <NormalText py={3} color={darkTextColor}>
                    {storageLocation.name}
                  </NormalText>
                </View>
              </Animatable.View>

              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={600}>
                <NormalText px={px} size={fontSize} color={primaryTextColor}>
                  Role
                </NormalText>
                <View style={[s.disabledInput]}>
                  <NormalText py={3} color={darkTextColor}>
                    {role.name}
                  </NormalText>
                </View>
              </Animatable.View>
            </View>
            {!isLoading && (
              <Animatable.View
                animation={'fadeInLeftBig'}
                duration={500}
                delay={700}
                style={[
                  ES.gap2,
                  ES.absolute,
                  ES.w100,
                  ES.centerItems,
                  ES.bottom3,
                ]}>
                <Btn
                  bgColor={
                    enableButton
                      ? primaryButtonColor
                      : primaryDisabledButtonColor
                  }
                  method={() => (enableButton ? handleUpdateUser() : null)}
                  px={px}
                  width={'50%'}>
                  <View style={[ES.h100, ES.flexRow, ES.gap2, ES.centerItems]}>
                    <Image
                      source={whitePenIcon}
                      style={[ES.hs22, ES.ws22, ES.objectFitContain]}
                    />
                    <NormalText py={0} color={whiteTextColor} size={17}>
                      Update
                    </NormalText>
                  </View>
                </Btn>
              </Animatable.View>
            )}
          </View>

          <View style={[ES.fx1, isLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default MyAccount;

const s = StyleSheet.create({
  p0: {padding: 0},
  container: StyleSheet.flatten([
    ES.fx1,
    ES.my5,
    ES.w100,
    ES.alignItemsCenter,
    {backgroundColor},
  ]),
  input: StyleSheet.flatten([
    {
      borderWidth: 0.5,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
    ES.py04,
    ES.w100,
    ES.px1,
    ES.f16,
  ]),
  disabledInput: StyleSheet.flatten([
    {
      borderWidth: 0.5,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
      backgroundColor: lightGreyColor,
    },
    ES.py04,
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
    ES.w96,
    ES.fx0,

    ES.gap2,
    ES.px1,
    ES.bRadius10,
    ES.pb3,

    {
      backgroundColor,
    },
  ]),
  userIcon: StyleSheet.flatten([ES.hs100, ES.objectFitContain]),
  imageContainer: StyleSheet.flatten([
    ES.hs100,
    ES.ws100,
    ES.centerItems,
    ES.tempBorder,
    ES.relative,
    ES.shadow10,

    {borderRadius: 100, top: -50},
  ]),
});
