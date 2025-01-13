import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  deleteIcon,
  itemIcon,
  locationPinIcon,
  penIcon,
  pickupPersonIcon,
  restoreIcon,
  userIconOrange,
} from '../Constants/imagesAndIcons';

import ES from '../styles/ES';
import NormalText from './NormalText';
import HeadingText from './HeadingText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';

const UserCard = ({item, handleDeleteUser, handleRestoreUser, openModal}) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        ES.w100,
        ES.flexRow,
        ES.gap2,
        ES.p1,
        ES.bRadius10,
        ES.shadow4,
        ES.bgLight,
        ES.fx0,
      ]}
      key={item.is_delete}>
      <View style={[ES.fx0, ES.centerItems]}>
        <Image
          source={
            item.role_type.value == 'pickup_boy'
              ? pickupPersonIcon
              : userIconOrange
          }
          style={[ES.hs50, ES.ws50]}
        />
      </View>
      <View style={[ES.flexColumn, ES.justifyContentCenter, ES.fx1]}>
        <HeadingText size={18}>{item.name}</HeadingText>
        <View style={[ES.fx0, ES.flexRow, ES.gap1]}>
          <View style={[ES.fx1]}>
            <NormalText style={[]}>Role: {item.role_type.name}</NormalText>
          </View>
          <View style={[ES.fx1]}>
            <NormalText style={[]}>
              {' '}
              <Image
                source={locationPinIcon}
                style={[ES.hs15, ES.ws15, ES.objectFitContain]}
              />
              :{' '}
              {item.storage_location_id.name.length > 10
                ? item.storage_location_id.name.slice(0, 9) + '...'
                : item.storage_location_id.name}
            </NormalText>
          </View>
        </View>
      </View>
      <View style={[ES.flexRow, ES.gap1, ES.fx0, ES.centerItems]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('stackUpdateUser', {
              id: item._id,
            })
          }>
          <Image
            source={penIcon}
            style={[ES.hs30, ES.ws30, ES.objectFitContain]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openModal(item);
          }}>
          {item.is_delete ? (
            <Image
              source={restoreIcon}
              style={[ES.hs30, ES.ws30, ES.objectFitContain]}
            />
          ) : (
            <Image
              source={deleteIcon}
              style={[ES.hs30, ES.ws25, ES.objectFitContain]}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;
