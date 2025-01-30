import {View, Text} from 'react-native';
import React from 'react';
import Mat from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Fa from 'react-native-vector-icons/FontAwesome';
import Fa5 from 'react-native-vector-icons/FontAwesome5';
import Fa6 from 'react-native-vector-icons/FontAwesome6';
import Ev from 'react-native-vector-icons/EvilIcons';
import EntyPo from 'react-native-vector-icons/Entypo';
import feather from 'react-native-vector-icons/Feather';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  iconPrimaryColor,
  lightDarkColor,
  primaryColor,
  primaryDarkColor,
} from './Colours';

export const CrossVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="cross"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const KeyVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="key"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const DownArrowVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="chevron-down"
      size={size ? size : 20}
      color={color ? color : lightDarkColor}
    />
  );
};

export const MapMarkerVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="map-marker"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const TruckVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="truck"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const UserCircleVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="user-circle"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const UserVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="user"
      size={size ? size : 40}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const LockVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="lock"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const MailVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="mail"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const TextVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="file-text"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const ItemVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="box"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const ItemsVectoreIcon = ({size, color}) => {
  return (
    <Fa6
      name="boxes-stacked"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const HomeVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="home"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const UsersVectoreIcon = ({size, color}) => {
  return (
    <EntyPo
      name="users"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const PenVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="pencil"
      size={size ? size : 23}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const TrashVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="trash"
      size={size ? size : 25}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const BikeVectoreIcon = ({size, color}) => {
  return (
    <Mat
      name="bike-fast"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const WareHouseVectoreIcon = ({size, color}) => {
  return (
    <Mat
      name="warehouse"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const FolderVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="folder-open"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const RestoreVectoreIcon = ({size, color}) => {
  return (
    <Mat
      name="settings-backup-restore"
      size={size ? size : 25}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const AccountSettingsVectoreIcon = ({size, color}) => {
  return (
    <Mat
      name="manage-accounts"
      size={size ? size : 30}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const NewFileVectoreIcon = ({size, color}) => {
  return (
    <Fa5
      name="file-signature"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const WeightVectoreIcon = ({size, color}) => {
  return (
    <Mci
      name="weight"
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};
