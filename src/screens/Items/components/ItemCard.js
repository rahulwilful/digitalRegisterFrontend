import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  deleteIcon,
  itemIcon,
  penIcon,
  restoreIcon,
} from '../../../Constants/imagesAndIcons';
import ES from '../../../styles/ES';
import NormalText from '../../../Components/NormalText';
import HeadingText from '../../../Components/HeadingText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import UpdateItem from './UpdateItem';

import {
  ItemsVectoreIcon,
  ItemVectoreIcon,
  MapMarkerVectoreIcon,
  PenVectoreIcon,
  RestoreVectoreIcon,
  TrashVectoreIcon,
} from '../../../Constants/VectoreIcons';

const ItemCard = ({
  item,
  handleDeleteItem,
  handleRestoreItem,
  handleUpdateItemList,
  openModal,
  image,
}) => {
  const navigation = useNavigation();
  const [updateModal, setUpdateModal] = useState(false);

  return (
    <>
      <UpdateItem
        updateModal={updateModal}
        itemData={item}
        closeModal={() => setUpdateModal(false)}
        handleUpdateItemList={handleUpdateItemList}
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
          {/*  <Image source={image ? image : itemIcon} style={[ES.hs50, ES.ws50]} /> */}
          <ItemVectoreIcon />
        </View>
        <View style={[ES.flexColumn, ES.justifyContentCenter, ES.fx1]}>
          <HeadingText capitalize size={18}>
            {item.item_name}
          </HeadingText>
          <NormalText capitalize>Unit: {item.quantity_unit}</NormalText>
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

export default ItemCard;
