import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  deleteIcon,
  itemIcon,
  penIcon,
  restoreIcon,
  wareHouseIcon,
  wareHouseIcon3,
} from '../../../Constants/imagesAndIcons';
import ES from '../../../styles/ES';
import NormalText from '../../../Components/NormalText';
import HeadingText from '../../../Components/HeadingText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import UpdateLocation from './UpdateLocation';
import {
  PenVectoreIcon,
  RestoreVectoreIcon,
  TrashVectoreIcon,
} from '../../../Constants/VectoreIcons';

const LocationCard = ({
  item,
  handleDeleteItem,
  handleRestoreItem,
  openModal,
  image,
  handleUpdateLocationList,
}) => {
  const navigation = useNavigation();
  const [updateModal, setUpdateModal] = useState(false);

  return (
    <>
      <UpdateLocation
        updateModal={updateModal}
        item={item}
        handleUpdateLocationList={handleUpdateLocationList}
        closeModal={() => setUpdateModal(false)}
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
          <Image source={wareHouseIcon3} style={[ES.hs50, ES.ws50]} />
        </View>
        <View style={[ES.flexColumn, ES.justifyContentCenter, ES.fx1]}>
          <HeadingText capitalize size={18}>
            {item.name}
          </HeadingText>
          <NormalText capitalize>City: {item.city}</NormalText>
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

export default LocationCard;
{
  /* <Image
                source={restoreIcon}
                style={[ES.hs30, ES.ws30, ES.objectFitContain]}
              /> 
              
              <Image
                source={deleteIcon}
                style={[ES.hs30, ES.ws25, ES.objectFitContain]}
              />*/
}
