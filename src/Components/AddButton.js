import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ES from '../styles/ES';
import {addIcon} from '../Constants/imagesAndIcons';

const AddButton = ({
  method,
  position,
  right,
  left,
  top,
  bottom,
  navigation,
}) => {
  return (
    <View
      style={[
        position ? {position: position} : ES.absolute,
        bottom && !top ? {bottom: bottom} : ES.bottom3,
        right && !left ? {right: right} : ES.right10,
        left ? {left: left} : null,
        top ? {top: top} : null,
      ]}>
      <TouchableOpacity onPress={method ? method : null}>
        <Image
          source={addIcon}
          style={[ES.hs40, ES.ws40, ES.objectFitContain]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
