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
import {image} from '../Constants/imagesAndIcons';
import {backgroundColor} from '../Constants/Colours';
import NormalText from './NormalText';

const RecordCard = props => {
  return (
    <View style={[ES.w100]}>
      <View
        style={[
          ES.w95,
          ES.bRadius12,
          ES.overflowHidden,
          ES.shadow5,
          ES.pb1,
          ES.px04,
          ES.bgLight,
        ]}>
        <View style={[s.listConatinerHeaer]}>
          <View style={[ES.hs70, ES.ws70, ES.overflowHidden, ES.bRadius5]}>
            <Image source={image.locationHome} style={[ES.hs70, ES.ws70]} />
          </View>

          <View style={[ES.fx1]}>
            <Text style={[ES.f20, ES.fw500, ES.capitalize, ES.fx1]}>
              Manager: {props.item.warehouse_admin.name}
            </Text>
            <View style={[ES.fx1, ES.flexRow, ES.gap2]}>
              <Text style={[s.subInfo]}>
                Pickup Boy: {props.item.pickup_person.name}
              </Text>
              <Text style={[s.subInfo]}>
                City: {props.item.storage_location_id.city}
              </Text>
            </View>
          </View>
        </View>
        <View style={[ES.fx1]}>
          <FlatList
            data={props.item.item_list}
            keyExtractor={(subItem, index) => index.toString()}
            renderItem={({item: subItem}) => (
              <View style={[s.itemContainer]}>
                <TouchableOpacity style={[ES.w40]}>
                  <Text
                    style={[
                      ES.f16,
                      ES.fw500,
                      ES.px08,
                      ES.capitalize,
                      ES.textDark,
                    ]}>
                    Item: {subItem.item_id.item_name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ES.w25]}>
                  <Text style={[ES.f16, ES.fw500, ES.px08, ES.capitalize]}>
                    qty: <NormalText>{subItem.quantity}</NormalText>
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ES.w25]}>
                  <Text style={[ES.f16, ES.fw500, ES.px08, ES.capitalize]}>
                    unit:{' '}
                    <Text style={[s.lightText]}>
                      {subItem.item_id.quantity_unit}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default RecordCard;

const s = StyleSheet.create({
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
    ES.bgLight,
    ES.flexRow,
    ES.px1,
    ES.py1,
    ES.gap2,
    ES.w100,
    {
      borderBottomWidth: 0.8,
      borderColor: '#bababa',
    },
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
    ES.justifyContentSpaceBetween,
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
