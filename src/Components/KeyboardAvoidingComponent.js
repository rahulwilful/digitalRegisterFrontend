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
import ES from '../styles/ES';
import {backgroundColor} from '../Constants/Colours';

const KeyboardAvoidingComponent = ({children, py, tempBorder, bg}) => {
  return (
    <KeyboardAvoidingView
      style={[
        ES.fx1,
        bg === false
          ? null
          : bg
          ? {backgroundColor: bg}
          : {backgroundColor: backgroundColor},
      ]}>
      <View style={[ES.fx1, ES.centerItems]}>
        <View style={[ES.w100, py ? {paddingVertical: py} : null]}>
          <ScrollView
            contentContainerStyle={[
              ES.w100,
              ES.centerItems,
              tempBorder ? ES.tempBorder : null,
            ]}>
            {children}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingComponent;
