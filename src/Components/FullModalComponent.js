import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

const FullModalComponent = ({children, isModalVisible, closeModal, height}) => {
  return (
    <>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={[ES.fx1, ES.centerItems, ES.p1]}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <LinearGradient
                colors={modalColor}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[s.modal, height ? {height: height} : ES.h90]}>
                <View style={[ES.fx1, ES.p06]}>{children}</View>
                <View style={[s.modalClose]}>
                  <TouchableOpacity onPress={() => closeModal()} style={[]}>
                    <Image
                      source={cancelIcon}
                      style={[ES.hs30, ES.ws30, ES.objectFitContain]}
                    />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
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
    ES.w90,
    ES.h90,
    ES.bgLight,
    ES.bRadius10,
    ES.shadow10,
    ES.overflowHidden,
    ES.flexRow,

    {borderWidth: 0.5, borderColor: '#000'},
  ]),
  modalClose: StyleSheet.flatten([ES.fx0, ES.alignItemsEnd, ES.pt06, ES.pe06]),
});
