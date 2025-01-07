import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ES from '../styles/ES';
import {primaryColorOrange, primaryTextColor} from '../Constants/Colours';

const HeadingText = ({children, color, size, center}) => {
  return (
    <View>
      <Text
        style={[
          size ? {fontSize: size} : {fontSize: 26},
          ES.fw700,
          color ? {color: color} : {color: primaryColorOrange},
          center ? ES.textCenter : null,
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default HeadingText;
