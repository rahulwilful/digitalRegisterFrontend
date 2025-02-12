import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ES from '../styles/ES';
import {primaryColorOrange, primaryTextColor} from '../Constants/Colours';

const HeadingText = ({
  children,
  color,
  size,
  center,
  capitalize,
  uppercase,
  fw,
}) => {
  return (
    <View>
      <Text
        style={[
          size ? {fontSize: size} : {fontSize: 26},
          fw ? {fontWeight: fw} : ES.fw700,
          color ? {color: color} : {color: primaryTextColor},
          center ? ES.textCenter : null,
          capitalize ? ES.capitalize : null,
          uppercase ? ES.uppercase : null,
          {fontFamily: 'Lato-Bold'},
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default HeadingText;
