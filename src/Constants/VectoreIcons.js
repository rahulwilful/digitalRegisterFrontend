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
import {iconPrimaryColor, primaryColor} from './Colours';

export const MapMarkerVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="map-marker"
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
    <Fa5
      name="boxes"
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
      size={size ? size : 25}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const TrashVectoreIcon = ({size, color}) => {
  return (
    <Fa
      name="trash"
      size={size ? size : 28}
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
      size={size ? size : 30}
      color={color ? color : iconPrimaryColor}
    />
  );
};

export const NewFileVectoreIcon = ({size, color}) => {
  return (
    <Fa5
      name="file-signature
  "
      size={size ? size : 34}
      color={color ? color : iconPrimaryColor}
    />
  );
};
