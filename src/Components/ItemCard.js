import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  deleteIcon,
  itemIcon,
  penIcon,
  restoreIcon,
} from '../Constants/imagesAndIcons';
import ES from '../styles/ES';
import NormalText from './NormalText';
import HeadingText from './HeadingText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';

const ItemCard = ({item, handleDeleteItem, handleRestoreItem}) => {
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
        <Image source={itemIcon} style={[ES.hs50, ES.ws50]} />
      </View>
      <View style={[ES.flexColumn, ES.justifyContentCenter, ES.fx1]}>
        <HeadingText size={18}>{item.item_name}</HeadingText>
        <NormalText>Unit: {item.quantity_unit}</NormalText>
      </View>
      <View style={[ES.flexRow, ES.gap1, ES.fx0, ES.centerItems]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('drawerHome', {
              screen: 'Home',
              params: {
                screen: 'stackUpdateItem',
                params: item._id,
              },
            })
          }>
          <Image
            source={penIcon}
            style={[ES.hs30, ES.ws30, ES.objectFitContain]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            item.is_delete
              ? handleRestoreItem(item._id)
              : handleDeleteItem(item._id);
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

export default ItemCard;
