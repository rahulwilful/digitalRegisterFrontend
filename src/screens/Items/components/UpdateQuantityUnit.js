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

const UpdateQuantityUnit = ({
  updateModal,
  closeModal,
  handleUpdateList,
  unit,
}) => {
  const [itemName, setItemName] = useState('');
  const [name, setName] = useState('');

  const [quantityUnit, setQuantityUnit] = useState('');
  const [quantityUnits, setQuantityUnits] = useState([]);
  const [quantityModal, setQuantityModal] = useState(false);

  const items = useSelector(state => state.items);
  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  //console.log('UpdateQuantityUnit : route.params.id', route.params.id);

  useEffect(() => {
    setName(unit?.name);
  }, [unit]);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const getQuantityUnit = async () => {
    setIsLoading(true);
    try {
      const res = await axiosClient.get(
        `/quantity_unit/get/${route.params.id}`,
      );

      setName(res.data.result.name);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    checkLogin();
    getQuantityUnit();
  }, []);

  const handleUpdateQuantityUnit = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        name: name,
      };

      const res = await axiosClient.put(
        `/quantity_unit/update/${unit?._id}`,
        form,
      );

      let tempItems = items;

      if (res) {
        showToast('Quantity unit updated');
        handleUpdateList(res.data.result);
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
        isModalVisible={updateModal}
        closeModal={closeModal}>
        <KeyboardAvoidingComponent bg={false}>
          <View style={[s.container, isLoading ? ES.dNone : null]}>
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
                <Btn width={'100%'} method={handleUpdateQuantityUnit}>
                  <Text style={[ES.textLight, ES.fw700, ES.f20]}>Update</Text>
                </Btn>
              </View>
            </View>
          </View>
          <View style={[ES.fx1, isLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </KeyboardAvoidingComponent>
      </FullModalComponent>
    </>
  );
};

export default UpdateQuantityUnit;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.fx1, ES.centerItems, ES.w100]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
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
