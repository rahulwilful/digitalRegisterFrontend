import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  Image,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import ES from '../../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  primaryColor,
  primaryInputBorderColor,
  primaryTextColor,
  whiteButton,
} from '../../../Constants/Colours';
import axiosClient from '../../../../axiosClient';
import {toggleLogin} from '../../../Redux/actions/action';
import {Picker} from '@react-native-picker/picker';
import Btn from '../../../Components/Btn';
import HeadingText from '../../../Components/HeadingText';
import {addAllItems, addItem} from '../../../Redux/actions/itemActions';
import KeyboardAvoidingComponent from '../../../Components/KeyboardAvoidingComponent';
import ModalComponent from '../../../Components/ModalComponent';
import Loading from '../../../Constants/Loading';
import NormalText from '../../../Components/NormalText';
import {downArrowIcon} from '../../../Constants/imagesAndIcons';
import FullModalComponent from '../../../Components/FullModalComponent';

const AddQuentityUnit = ({addModal, closeModal, handleUpdateList}) => {
  const [itemName, setItemName] = useState('');
  const [name, setName] = useState('');

  const [quantityUnit, setQuantityUnit] = useState('');
  const [quantityUnits, setQuantityUnits] = useState([]);
  const [quantityModal, setQuantityModal] = useState(false);

  const items = useSelector(state => state.items);
  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('items.length', items.length);
  }, [items]);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleAddQuantityUnit = async () => {
    if (!verifyInputs()) return;
    setButtonLoading(true);
    try {
      const form = {
        name: name,
      };

      const res = await axiosClient.post('/quantity_unit/add', form);

      if (res) {
        handleUpdateList(res.data.result);
        showToast('Quantity unit added successfully');
        setName('');
      }
    } catch (error) {
      if (error.response?.status === 409) {
        showToast(error.response.data.message);
      } else if (error.response?.status === 403) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
        console.log('Unexpected error:', error);
      }
    }
    setButtonLoading(false);
    closeModal();
  };

  const verifyInputs = () => {
    if (!name) {
      showToast('Please enter unit name');
      return false;
    }

    return true;
  };

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <>
      <FullModalComponent
        height={'30%'}
        isModalVisible={addModal}
        closeModal={closeModal}>
        <KeyboardAvoidingComponent bg={false}>
          <View style={[s.container]}>
            <View style={[s.card]}>
              <HeadingText style={[ES.textDark, ES.f26, ES.fw700]}>
                Add Unit
              </HeadingText>

              <TextInput
                style={[s.input]}
                placeholder="Unit Name"
                value={name}
                onChangeText={setName}
              />

              <View style={[ES.w90]}>
                <Btn
                  buttonLoading={buttonLoading}
                  width={'100%'}
                  method={handleAddQuantityUnit}>
                  <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
                </Btn>
              </View>
            </View>
          </View>
        </KeyboardAvoidingComponent>
      </FullModalComponent>
    </>
  );
};

export default AddQuentityUnit;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.centerItems, ES.w100]),
  input: StyleSheet.flatten([
    {
      borderBottomWidth: 1,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
    ES.w90,
    ES.f16,
  ]),
  button: StyleSheet.flatten([
    ES.tempBorder,
    ES.bgPrimary,
    ES.px3,
    ES.bRadius5,
    ES.py04,
    ES.shadow1,
  ]),
  card: StyleSheet.flatten([
    ES.w90,
    ES.fx0,
    ES.centerItems,
    ES.gap5,
    ES.px1,
    ES.bRadius10,

    ES.py3,
  ]),
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
});
