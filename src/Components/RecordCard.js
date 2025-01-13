import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ES from '../styles/ES';

import {
  calanderIcon,
  image,
  pickupPersonIcon,
  recordIcon,
} from '../Constants/imagesAndIcons';

import {backgroundColor, primaryTextColor} from '../Constants/Colours';
import NormalText from './NormalText';
import LinearGradient from 'react-native-linear-gradient';
import HeadingText from './HeadingText';

const RecordCard = props => {
  return (
    <View style={[ES.w100]}>
      <LinearGradient
        colors={['#fff', '#fffaf7']}
        start={{x: 0, y: 0}} // Gradient starting point
        end={{x: 1, y: 1}}
        style={[s.card]}>
        <View style={[s.listConatinerHeaer]}>
          <View style={[ES.hs70, ES.ws70, ES.overflowHidden, ES.bRadius5]}>
            <Image source={recordIcon} style={[ES.hs70, ES.ws70]} />
          </View>

          <View style={[ES.fx1, ES.justifyContentCenter, ES.gap1]}>
            <HeadingText
              size={20}
              capitalize
              style={[ES.f20, ES.fw500, ES.capitalize, ES.fx1]}>
              {props.item.warehouse_admin.name}
            </HeadingText>
            <View style={[ES.fx0, ES.flexRow, ES.gap2, ES.alignItemsCenter]}>
              <NormalText size={16}>
                <Text style={[ES.tempBorder]}>
                  <Image
                    source={pickupPersonIcon}
                    style={[ES.ws19, ES.hs19, ES.objectFitContain]}
                  />
                  <Text> : {props.item.pickup_person.name}</Text>
                </Text>
              </NormalText>

              <NormalText size={16}>
                <Text style={[ES.tempBorder]}>
                  <Image
                    source={calanderIcon}
                    style={[ES.ws19, ES.hs19, ES.objectFitContain]}
                  />
                  <Text> : {props.item.createdAt.slice(0, 10)}</Text>
                </Text>
              </NormalText>
            </View>
          </View>
        </View>
        <View style={[ES.fx1]}>
          <FlatList
            data={props.item.item_list}
            keyExtractor={(subItem, index) => index.toString()}
            renderItem={({item: subItem}) => (
              <View style={[s.itemContainer]}>
                <View style={[ES.fx3]}>
                  <NormalText size={17} capitalize color={primaryTextColor}>
                    {subItem.item_id.item_name}
                  </NormalText>
                </View>
                <View style={[ES.fx2]}>
                  <Text style={[ES.f16, ES.fw500, ES.px08, ES.capitalize]}>
                    qty:{' '}
                    <NormalText>
                      {subItem.quantity} {subItem.item_id.quantity_unit}
                    </NormalText>
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default RecordCard;

const s = StyleSheet.create({
  card: StyleSheet.flatten([
    ES.w95,
    ES.bRadius12,
    ES.overflowHidden,
    ES.shadow1,
    ES.pb1,
    ES.px04,
  ]),
  conatainer: StyleSheet.flatten([
    ES.screenHeight,
    ES.centerItems,
    ES.w100,
    {backgroundColor: backgroundColor},
  ]),

  header: StyleSheet.flatten([
    ES.fx0,
    ES.gap4,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.w100,
    {backgroundColor: 'rgb(21, 101, 239)'},
    {flex: 0.1},
    ES.shadow10,
  ]),

  textInput: StyleSheet.flatten([
    ES.px1,
    ES.py1,
    ES.bRadius8,
    ES.bgWhite,
    ES.fx1,
    ES.bgLight,
  ]),

  searchButton: StyleSheet.flatten([
    ES.bgLight,
    ES.shadow5,
    ES.bRadius5,
    ES.hs40,
    ES.ws100,
    ES.fx0,
    ES.centerItems,
  ]),

  searchText: StyleSheet.flatten([
    ES.textCenter,
    ES.f16,
    ES.fw700,
    ES.capitalize,
    ES.textPrimary,
  ]),

  flatList: StyleSheet.flatten([
    ES.gap2,
    ES.py2,
    ES.w100,
    ES.fx0,
    ES.alignItemsCenter,
  ]),

  listConatinerHeaer: StyleSheet.flatten([
    ES.py06,

    ES.flexRow,
    ES.px1,
    ES.py1,
    ES.gap2,
    ES.w100,
  ]),

  subInfo: StyleSheet.flatten([
    ES.f18,
    ES.fw400,
    ES.capitalize,
    ES.textSecondary,
  ]),
  itemContainer: StyleSheet.flatten([
    ES.mt06,
    ES.w100,
    ES.flexRow,
    ES.px08,
    ES.pb04,
    {
      borderBottomWidth: 0.4,
      borderColor: '#cccccc',
    },
  ]),

  lightText: StyleSheet.flatten([
    ES.capitalize,
    {color: '#4a4f54', fontFamily: 'Lato-Regular'},
  ]),
});
