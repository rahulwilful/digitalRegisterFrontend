import {View, Text, Image} from 'react-native';
import React from 'react';
import ES from '../styles/ES';
import {newRecordIcon} from '../Constants/imagesAndIcons';
import HeadingText from './HeadingText';
import {darkTextColor} from '../Constants/Colours';

const Card = ({children, image, icon}) => {
  return (
    <View style={[ES.px1]}>
      <View
        style={[
          ES.flexRow,
          ES.justifyContentSpaceBetween,
          ES.alignItemsCenter,
          ES.px2,
          ES.py1,
          ES.bRadius10,
          ES.shadow4,
          ES.bgLight,
        ]}>
        {icon ? (
          icon
        ) : image ? (
          <Image
            source={image}
            style={[ES.hs55, ES.ws55, ES.objectFitContain]}
          />
        ) : null}
        {/*  <Image source={image} style={[ES.hs55, ES.ws55, ES.objectFitContain]} /> */}
        <View style={[ES.fx1, ES.px2]}>
          <HeadingText size={18} color={darkTextColor}>
            {children}
          </HeadingText>
        </View>
      </View>
    </View>
  );
};

export default Card;
