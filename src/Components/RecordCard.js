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
  adminIcon,
  calanderIcon,
  image,
  pickupPersonIcon,
  recordIcon,
  watchIcon,
} from '../Constants/imagesAndIcons';

import {
  backgroundColor,
  lightTextColor,
  primaryColor,
  primaryColorGreen,
  primaryTextColor,
  redButton,
  softBlue,
  softRed,
  whiteTextColor,
} from '../Constants/Colours';
import NormalText from './NormalText';
import LinearGradient from 'react-native-linear-gradient';
import HeadingText from './HeadingText';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const RecordCard = props => {
  const navigation = useNavigation();
  return (
    <Animatable.View style={[ES.w100]}>
      <View style={[ES.w100]}>
        <LinearGradient
          colors={['#fff', '#fffaf7']}
          start={{x: 0, y: 0}} // Gradient starting point
          end={{x: 1, y: 1}}
          style={[s.card]}>
          <View style={[s.listConatinerHeaer]}>
            {/* 
            <View style={[ES.hs65, ES.ws65, ES.overflowHidden, ES.bRadius5]}>
              <Image source={recordIcon} style={[ES.hs65, ES.ws65]} />
            </View>
              */}

            <View style={[ES.fx1, ES.justifyContentCenter, ES.gap1]}>
              <View
                style={[ES.flexRow, ES.fx0, ES.gap2, ES.alignItemsBaseline]}>
                <View style={[ES.fx1]}>
                  <HeadingText capitalize fw={500} size={15}>
                    <Text style={[ES.tempBorder]}>
                      <Image
                        source={adminIcon}
                        style={[ES.ws19, ES.hs19, ES.objectFitContain]}
                      />
                      <Text>
                        {' '}
                        :{' '}
                        {props.item.warehouse_admin.name.length <= 10
                          ? props.item.warehouse_admin.name
                          : props.item.warehouse_admin.name.slice(0, 10) +
                            '...'}
                      </Text>
                    </Text>
                  </HeadingText>
                </View>
                <View style={[ES.fx1]}>
                  <HeadingText capitalize fw={500} size={15}>
                    <Text style={[ES.tempBorder]}>
                      <Image
                        source={pickupPersonIcon}
                        style={[ES.ws19, ES.hs19, ES.objectFitContain]}
                      />
                      <Text>
                        {' '}
                        :{' '}
                        {props.item.pickup_person.name.length <= 10
                          ? props.item.pickup_person.name
                          : props.item.pickup_person.name.slice(0, 10) + '...'}
                      </Text>
                    </Text>
                  </HeadingText>
                </View>
              </View>
              <View style={[ES.fx0, ES.flexRow, ES.gap2, ES.alignItemsCenter]}>
                <View style={[ES.fx4]}>
                  <NormalText size={13}>
                    <Text style={[]}>
                      <Image
                        source={calanderIcon}
                        style={[ES.ws19, ES.hs19, ES.objectFitContain]}
                      />
                      <Text> : {props.item.createdAt.slice(0, 10)}</Text>
                    </Text>
                  </NormalText>
                </View>
                <View style={[ES.fx4]}>
                  <NormalText size={13}>
                    <Text style={[]}>
                      <Image
                        source={watchIcon}
                        style={[ES.ws19, ES.hs19, ES.objectFitContain]}
                      />
                      <Text> : {props.item.createdAt.slice(11, 16)}</Text>
                    </Text>
                  </NormalText>
                </View>
                <View style={[]}>
                  <NormalText size={13}>
                    <View
                      style={[
                        props.item.pickup_or_drop == 'pickup'
                          ? {backgroundColor: softRed}
                          : {backgroundColor: softBlue},

                        ES.px1,
                        ES.bRadius5,
                        ES.centerItems,
                      ]}>
                      <Text style={[ES.textLight, ES.capitalize]}>
                        {' '}
                        {props.item.pickup_or_drop}
                      </Text>
                    </View>
                  </NormalText>
                </View>
              </View>
            </View>
          </View>
          <View style={[ES.fx1, ES.px1]}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={
                props.item.item_list.length > 10
                  ? props.item.item_list.slice(0, 10)
                  : props.item.item_list
              }
              contentContainerStyle={[]}
              keyExtractor={(subItem, index) => index.toString()}
              renderItem={({item: subItem, index}) => (
                <View style={[s.itemContainer]}>
                  <NormalText color={whiteTextColor} size={12} capitalize>
                    {subItem.item_id.item_name}
                  </NormalText>

                  <NormalText color={whiteTextColor} size={12}>
                    : {subItem.quantity} {subItem.item_id.quantity_unit.name}
                  </NormalText>
                </View>
              )}
            />
          </View>

          <View style={[ES.fx1, ES.centerItems, ES.mt1]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('stackRecordDetails', {
                  record_id: props.item._id,
                })
              }>
              <NormalText>
                {props.item.item_list.length < 5 ? 'View' : 'View All'}{' '}
              </NormalText>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Animatable.View>
  );
};

export default RecordCard;

const s = StyleSheet.create({
  card: StyleSheet.flatten([
    ES.w95,
    ES.bRadius12,
    ES.overflowHidden,
    {
      shadowColor: '#a0a0a0',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 7,
    },
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
    ES.me06,
    ES.fx0,
    ES.centerItems,
    ES.flexRow,
    ES.px08,

    {backgroundColor: primaryColor, borderRadius: 20, paddingVertical: 1},
  ]),
  borderBottom: {
    borderBottomWidth: 0.4,
    borderColor: '#cccccc',
  },

  lightText: StyleSheet.flatten([
    ES.capitalize,
    {color: '#4a4f54', fontFamily: 'Lato-Regular'},
  ]),
});
