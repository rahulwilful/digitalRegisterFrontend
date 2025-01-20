import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {backArrowIcon} from '../Constants/imagesAndIcons';
import ES from '../styles/ES';
import {headerBackgroundColor, whiteTextColor} from '../Constants/Colours';
import NormalText from './NormalText';
import {useNavigation} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

const Header = ({children}) => {
  const navigation = useNavigation();
  return (
    <View style={[s.header]}>
      <View style={[s.searchContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={backArrowIcon}
            style={[ES.hs17, ES.ws17, ES.objectFitContain]}
          />
        </TouchableOpacity>

        <NormalText capitalize color={whiteTextColor} size={20}>
          {' '}
          {children}
        </NormalText>
      </View>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  header: StyleSheet.flatten([
    ES.py06,
    ES.w100,
    ES.justifyContentSpaceAround,
    ES.gap2,
    ES.shadow10,
    {
      backgroundColor: headerBackgroundColor,
      height: screenHeight * 0.06,
    },
  ]),
  searchContainer: StyleSheet.flatten([
    ES.fx0,
    ES.gap3,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
  ]),
});
