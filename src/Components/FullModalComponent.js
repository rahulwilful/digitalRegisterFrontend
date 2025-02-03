import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../styles/ES';
import {
  modalColor,
  primaryColor,
  primaryColorOrange,
  primaryTextColor,
} from '../Constants/Colours';
import LinearGradient from 'react-native-linear-gradient';
import {cancelIcon} from '../Constants/imagesAndIcons';
import {CrossVectoreIcon} from '../Constants/VectoreIcons';
import {ScrollView} from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('window').height;

const FullModalComponent = ({
  children,
  isModalVisible,
  closeModal,
  height,
  fullHeight,
}) => {
  return (
    <>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <ScrollView contentContainerStyle={[ES.p1]}>
          <View style={[{height: screenHeight}, ES.centerItems]}>
            <TouchableOpacity
              style={[ES.fx1, ES.w100]}
              onPress={() => closeModal()}></TouchableOpacity>
            <LinearGradient
              colors={modalColor}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={[s.modal, height ? {height: height} : ES.h90]}>
              <View style={[ES.fx1, ES.p06]}>{children}</View>
              <View style={[s.modalClose]}>
                <TouchableOpacity
                  onPress={() => {
                    closeModal();
                  }}
                  style={[]}>
                  <CrossVectoreIcon />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <TouchableOpacity
              style={[ES.fx1, ES.w100]}
              onPress={() => closeModal()}></TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};

export default FullModalComponent;

const s = StyleSheet.create({
  header: StyleSheet.flatten([ES.px1, ES.flexRow, ES.centerItems, ES.w100]),

  textInput: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
    ES.w90,
    ES.px1,
    ES.f16,
  ]),
  modal: StyleSheet.flatten([
    ES.tempBorder2,
    ES.w90,
    ES.h90,
    ES.bgLight,
    ES.bRadius10,
    ES.shadow10,
    ES.overflowHidden,
    ES.flexRow,

    {borderWidth: 0.5, borderColor: '#000'},
  ]),
  modalClose: StyleSheet.flatten([
    ES.fx0,
    ES.absolute,
    ES.alignItemsEnd,
    ES.pt06,
    ES.pe06,

    ES.right0,
  ]),
});
