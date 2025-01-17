import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {backgroundColor, primaryColor} from '../../Constants/Colours';
import axios from 'axios';
import axiosClient from '../../../axiosClient';
import {toggleLogin} from '../../Redux/actions/action';
import {ScrollView} from 'react-native-gesture-handler';
import {wareHouseImage} from '../../Constants/imagesAndIcons';

const screenHeight = Dimensions.get('window').height;

const Background = ({children}) => {
  return (
    <View style={[ES.fx1, {backgroundColor: 'rgb(246, 195, 106)'}]}>
      <ImageBackground
        source={wareHouseImage}
        resizeMode="cover"
        style={[
          ES.h60,
          {
            justifyContent: 'flex-start',
            alignItems: 'center',
          },
        ]}
      />
      <View style={[s.conatiner]}>{children}</View>
    </View>
  );
};

export default Background;

const s = StyleSheet.create({
  conatiner: StyleSheet.flatten([{height: screenHeight}, ES.w100, ES.absolute]),
  text: StyleSheet.flatten([ES.textLight]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: '#007bff', borderRadius: 5},
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
    ES.h50,
    ES.fx0,
    ES.centerItems,
    ES.gap5,
    ES.px1,
    ES.bRadius10,
    ES.shadow7,
    {backgroundColor: backgroundColor},
  ]),
});
