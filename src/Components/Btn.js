import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ES from '../styles/ES';
import LinearGradient from 'react-native-linear-gradient';
import {primaryButtonColor} from '../Constants/Colours';

const Btn = ({children, method, color, px, width, bgColor, size}) => {
  return (
    <TouchableOpacity
      onPress={method}
      style={[width ? {width: width} : ES.w50]}>
      <LinearGradient
        colors={bgColor ? bgColor : primaryButtonColor} // Gradient colors
        start={{x: 0, y: 0}} // Gradient starting point
        end={{x: 1, y: 1}} // Gradient ending point
        style={[s.button, px ? {paddingHorizontal: px} : ES.px3, ES.w100]}>
        <Text
          style={[
            color ? {color: color} : ES.textLight,
            size ? {fontSize: size} : ES.f18,
            ES.fw700,
            ES.textCenter,
            ES.centerItems,
          ]}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Btn;

const s = StyleSheet.create({
  button: StyleSheet.flatten([
    ES.bRadius5,
    ES.py04,
    ES.shadow1,
    ES.centerItems,
  ]),
});
