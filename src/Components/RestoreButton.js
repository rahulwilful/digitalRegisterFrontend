import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ES from '../styles/ES';
import {RestoreVectoreIcon} from '../Constants/VectoreIcons';

const RestoreButton = ({method}) => {
  return (
    <TouchableOpacity onPress={method} style={[ES.centerItems, ES.mt1]}>
      <RestoreVectoreIcon size={30} color={'#451B6D'} />
    </TouchableOpacity>
  );
};

export default RestoreButton;
