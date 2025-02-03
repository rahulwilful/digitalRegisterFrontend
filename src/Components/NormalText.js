import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ES from '../styles/ES';
import {
  lightTextColor,
  primaryColorOrange,
  primaryTextColor,
} from '../Constants/Colours';

const NormalText = ({
  children,
  color,
  size,
  capitalize,
  textCenter,
  baseLine,
  centerItems,
  tempBorder,
  fw,
  px,
  py,
}) => {
  return (
    <Text
      style={[
        py ? {paddingVertical: py} : null,
        px ? {paddingHorizontal: px} : null,
        ES.fx0,
        tempBorder ? ES.tempBorder : null,
        size ? {fontSize: size} : null,
        fw ? {fontWeight: fw} : ES.fw500,

        color ? {color: color} : {color: lightTextColor},
        textCenter ? ES.textCenter : null,
        capitalize ? ES.capitalize : null,
        baseLine ? ES.alignItemsBaseline : null,
        centerItems ? ES.centerItems : null,
        {fontFamily: 'Lato-Thin'},
      ]}>
      {children}
    </Text>
  );
};

export default NormalText;
