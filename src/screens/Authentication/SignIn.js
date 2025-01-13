import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  primaryColor,
  primaryColorOrange,
  primaryTextColor,
} from '../../Constants/Colours';
import axios from 'axios';
import axiosClient from '../../../axiosClient';
import {toggleLogin} from '../../Redux/actions/action';
import {ScrollView} from 'react-native-gesture-handler';
import {wareHouseImage} from '../../Constants/imagesAndIcons';
import Background from './Background';
import HeadingText from '../../Components/HeadingText';
import Loading from '../../Constants/Loading';
import LinearGradient from 'react-native-linear-gradient';
import Btn from '../../Components/Btn';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('super_admin@gmail.com');
  const [password, setPassword] = useState('111111');
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      console.log('email: ', email, ' password: ', password);
      let form = {
        email: email,
        password: password,
      };
      const res = await axiosClient.post('/user/login', form);
      //console.log('login response: ', res.data.result.name);
      await AsyncStorage.setItem('token', res.data.token);
      showToast('Login Successfull');
      dispatch(toggleLogin(true));
    } catch (error) {
      console.log('error: ', error);
      if (error.response?.status === 404) {
        showToast(error.response.data.message);
      }
      if (error.response?.status === 400) {
        showToast(error.response.data.message);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Background style={[ES.fx1]}>
        <View style={[s.conatiner]}>
          <View style={[s.card]}>
            <HeadingText size={36}> Sign In</HeadingText>

            <View style={[s.inputContainer]}>
              <TextInput
                style={[s.input]}
                placeholder="Email"
                keyboardType="default"
                value={email}
                secureTextEntry={false}
                onChangeText={value => setEmail(value)}
              />
              <TextInput
                style={[s.input]}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={value => setPassword(value)}
              />
            </View>

            {/* <LinearGradient
              colors={['#f2bf68', '#feb47b']} // Gradient colors
              start={{x: 0, y: 0}} // Gradient starting point
              end={{x: 1, y: 1}} // Gradient ending point
              style={[s.button]}>
              <TouchableOpacity onPress={handleLogin}>
                <Text
                  style={[
                    isLoading ? ES.dNone : ES.dBlock,
                    ES.textLight,
                    ES.fw700,
                    ES.f20,
                    ES.textCenter,
                  ]}>
                  Login
                </Text>
                <View
                  style={[isLoading ? ES.dBlock : ES.dNone, ES.hs30]}
                  key={isLoading}>
                  <Loading size={'small'} color={'#fff'} />
                </View>
              </TouchableOpacity>
            </LinearGradient> */}
            <Btn method={handleLogin}>
              {isLoading ? (
                <View style={[isLoading ? ES.dBlock : ES.dNone, ES.hs30]}>
                  <Loading size={'small'} color={'#fff'} />
                </View>
              ) : (
                <Text
                  style={[
                    isLoading ? ES.dNone : ES.dBlock,
                    ES.textLight,
                    ES.fw700,
                    ES.f20,
                    ES.textCenter,
                  ]}>
                  Login
                </Text>
              )}
            </Btn>
          </View>
        </View>
      </Background>
    </>
  );
};

export default SignIn;

const s = StyleSheet.create({
  conatiner: StyleSheet.flatten([
    ES.screenHeight,
    ES.justifyContentEnd,
    ES.alignItemsCenter,
    ES.w100,
    ES.absolute,
  ]),
  text: StyleSheet.flatten([ES.textLight]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryTextColor, borderRadius: 5},
    ES.w90,
    ES.px1,
    ES.f16,
  ]),
  button: StyleSheet.flatten([
    ES.px3,
    ES.bRadius5,
    ES.py04,
    ES.shadow1,
    ES.w50,
    ES.textCenter,
  ]),
  card: StyleSheet.flatten([
    ES.w100,
    ES.h70,
    ES.fx0,
    ES.justifyContentStart,
    ES.alignItemsCenter,
    ES.pt5,
    ES.px1,

    ES.shadow7,
    {backgroundColor: backgroundColor, borderTopLeftRadius: 80, gap: 80},
  ]),
  inputContainer: StyleSheet.flatten([ES.w80, ES.fx0, ES.gap3, ES.centerItems]),
});
