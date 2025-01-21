import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  deleteIcon,
  itemIcon,
  locationPinIcon,
  penIcon,
  pickupPersonIcon,
  restoreIcon,
  userIconOrange,
} from '../../../Constants/imagesAndIcons';
import {
  MapMarkerVectoreIcon,
  PenVectoreIcon,
  RestoreVectoreIcon,
  TrashVectoreIcon,
} from '../../../Constants/VectoreIcons';

import ES from '../../../styles/ES';
import NormalText from '../../../Components/NormalText';
import HeadingText from '../../../Components/HeadingText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import UpdateUser from './UpdateUser';

const UserCard = ({item, handleSetUpadateUserList, openModal}) => {
  const navigation = useNavigation();
  const [updateModal, setUpdateModal] = useState(false);
  const [updateUser, setUpdateUser] = useState({});
  const updateList = user => {
    console.log('updateList: ', user);
    handleSetUpadateUserList(user);
  };
  return (
    <>
      <UpdateUser
        userData={item}
        updateModal={updateModal}
        closeModal={() => setUpdateModal(false)}
        handleSetUpadateUserList={updateList}
      />
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
                <MapMarkerVectoreIcon size={14} />:{' '}
                {item.storage_location_id.name.length > 10
                  ? item.storage_location_id.name.slice(0, 9) + '...'
                  : item.storage_location_id.name}
              </NormalText>
            </View>
          </View>
        </View>
        <View style={[ES.flexRow, ES.gap3, ES.fx0, ES.centerItems]}>
          <TouchableOpacity onPress={() => setUpdateModal(true)}>
            <PenVectoreIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              item.is_delete ? openModal(item) : openModal(item);
            }}>
            {item.is_delete ? <RestoreVectoreIcon /> : <TrashVectoreIcon />}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UserCard;
