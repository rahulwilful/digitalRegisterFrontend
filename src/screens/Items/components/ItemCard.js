import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import * as Animatable from 'react-native-animatable';

import {
  ItemsVectoreIcon,
  ItemVectoreIcon,
  MapMarkerVectoreIcon,
  PenVectoreIcon,
  RestoreVectoreIcon,
  TrashVectoreIcon,
} from '../../../Constants/VectoreIcons';
import {
  animationDuration,
  Animations,
  fadeIn,
} from '../../../Constants/AnimationTypes';

const ItemCard = ({
  item,
  handleDeleteItem,
  handleRestoreItem,
  handleUpdateItemList,
  openModal,
  image,
  index,
}) => {
  const navigation = useNavigation();
  const [updateModal, setUpdateModal] = useState(false);

  const handleCloseModal = () => {
    setUpdateModal(false);
  };
  useEffect(() => {
    console.log(' ItemCard updateModal: ', updateModal);
  }, [updateModal]);

  return (
    <>
      <UpdateItem
        updateModal={updateModal}
        itemData={item}
        closeModal={() => {
          handleCloseModal();
        }}
        handleUpdateItemList={handleUpdateItemList}
      />

      <Animatable.View
        animation={fadeIn}
        duration={animationDuration}
        delay={index * 100}
        style={[
          ES.w100,
          ES.flexRow,
          ES.gap2,
          ES.p1,
          ES.bRadius10,
          ES.shadow1,
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
          <NormalText capitalize>Unit: {item.quantity_unit.name}</NormalText>
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
      </Animatable.View>
    </>
  );
};

export default ItemCard;
