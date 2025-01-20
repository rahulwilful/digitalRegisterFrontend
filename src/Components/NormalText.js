import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ES from '../styles/ES';
import {
  lightTextColor,
  primaryColorOrange,
  primaryTextColor,
} from '../Constants/Colours';

const NormalText = ({children, color, size, capitalize, textCenter}) => {
  return (
    <Text
      style={[
        size ? {fontSize: size} : null,
        ES.fw700,
        color ? {color: color} : {color: lightTextColor},
        textCenter ? ES.textCenter : null,
        capitalize ? ES.capitalize : null,
      ]}>
      {children}
    </Text>
  );
};

export default NormalText;
