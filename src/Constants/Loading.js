import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import ES from '../styles/ES';
import {backgroundColor, headerBackgroundColor} from './Colours';

const Loading = props => {
  return (
    <View style={[ES.fx1, ES.centerItems]}>
      <ActivityIndicator
        size={props.size ? props.size : 'large'}
        color={props.color ? props.color : headerBackgroundColor}
      />
    </View>
  );
};

export default Loading;
