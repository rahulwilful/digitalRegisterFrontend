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
import headingText from '../../../Components/HeadingText';
import HeadingText from '../../../Components/HeadingText';
import Loading from '../../../Constants/Loading';
import KeyboardAvoidingComponent from '../../../Components/KeyboardAvoidingComponent';
import FullModalComponent from '../../../Components/FullModalComponent';
import ModalComponent from '../../../Components/ModalComponent';
import {downArrowIcon} from '../../../Constants/imagesAndIcons';
import NormalText from '../../../Components/NormalText';
import {DownArrowVectoreIcon} from '../../../Constants/VectoreIcons';
import {Dropdown} from 'react-native-element-dropdown';

const UpdateItem = ({
  route,
  navigation,
  id,
  updateModal,
  handleUpdateItemList,
  itemData,
  closeModal,
}) => {
  const [itemName, setItemName] = useState('');
  const [quantityUnit, setQuantityUnit] = useState({
    label: 'kg',
    value: 'kg',
    _id: 'dsdsd',
  });
  const [item, setItem] = useState({});

  const [quantityUnits, setQuantityUnits] = useState([]);
  const [quantityModal, setQuantityModal] = useState(false);

  //const id = route.params.item_id;

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const dispatch = useDispatch();

  const getData = async () => {
    setLoading(true);

    try {
      const storageRes = await axiosClient.get(`/item/get/${id}`);
      setItem(storageRes.data.result);
      setItemName(storageRes.data.result.item_name);
      setQuantityUnit(storageRes.data.result.quantity_unit);
      console.log('storageRes: ', storageRes.data.result);
    } catch (error) {
      console.log('Error fetching storage locations:', error);
    }

    setLoading(false);
  };

  const getQuantityUnits = async () => {
    setIsLoading(true);
    try {
      const quantityUnitRes = await axiosClient.get('/quantity_unit/getall');
      const temp = quantityUnitRes.data.result;
      let temp2 = [];
      for (let i = 0; i < temp.length; i++) {
        temp2.push({
          label: temp[i].name,
          value: temp[i].name,
          _id: temp[i]._id,
        });
      }

      setQuantityUnits(temp2);
    } catch (error) {
      console.log('Error fetching storage locations:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    //console.log('itemData: ', itemData);
    setItemName(itemData?.item_name);
    if (itemData?.quantity_unit) {
      const temp = {
        lable: itemData?.quantity_unit.name,
        value: itemData?.quantity_unit.name,
        _id: itemData?.quantity_unit._id,
      };
      setQuantityUnit(temp);
    }
    //setQuantityUnit(itemData?.quantity_unit);
    getData();
    getQuantityUnits();
  }, [itemData]);

  useEffect(() => {
    console.log('uantityUnit', quantityUnit);
  }, [quantityUnit]);

  const handleUpdateItem = async () => {
    if (!verifyInputs()) return;
    setButtonLoading(true);
    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit._id,
      };
      console.log('form: ', form);
      const res = await axiosClient.put(`/item/${itemData._id}`, form);

      if (res) {
        showToast(res.data.message);
        handleUpdateItemList(res.data.result);
        closeModal();
      }
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('Unexpected error:', error);
    }
    setButtonLoading(false);
  };

  const verifyInputs = () => {
    if (!itemName) {
      showToast('Please enter item name');
      return false;
    }

    if (!quantityUnit) {
      showToast('Please enter quantity unit');
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

  useEffect(() => {
    console.log('UpdateItem updateModal: ', updateModal);
  }, [updateModal]);

  return (
    <>
      <FullModalComponent
        height={'40%'}
        isModalVisible={updateModal}
        closeModal={closeModal}>
        <KeyboardAvoidingComponent bg={false}>
          <View style={[s.container]}>
            <View style={[s.card, loading ? ES.dNone : ES.dBlock]}>
              <HeadingText style={[ES.textDark, ES.f26, ES.fw700]}>
                Update Item
              </HeadingText>
              <TextInput
                style={[s.input]}
                placeholder="Item Name"
                value={itemName}
                onChangeText={setItemName}
              />
              <View style={[ES.w100]}>
                <View style={[ES.w100, ES.fx0, ES.centerItems]}>
                  <View style={[s.input]} key={quantityUnit}>
                    <Dropdown
                      style={[
                        {
                          marginBottom: 8,
                          width: '100%',
                          padding: 0,
                        },
                      ]}
                      placeholderStyle={[ES.f16]}
                      selectedTextStyle={[ES.f16]}
                      inputSearchStyle={[ES.hs40, ES.f16]}
                      iconStyle={{width: 20, height: 20}}
                      data={quantityUnits}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder="Select item"
                      searchPlaceholder="Search..."
                      value={quantityUnit}
                      onChange={item => {
                        setQuantityUnit(item);
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={[ES.w100, ES.centerItems, ES.mt1]}>
                <Btn
                  buttonLoading={buttonLoading}
                  width={'90%'}
                  method={handleUpdateItem}>
                  <Text style={[ES.textLight, ES.fw700, ES.f20]}>Update </Text>
                </Btn>
              </View>
            </View>

            <View style={[loading ? ES.dBlock : ES.dNone]}>
              <Loading />
            </View>
          </View>
        </KeyboardAvoidingComponent>
      </FullModalComponent>
    </>
  );
};

export default UpdateItem;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.fx1, , ES.centerItems, ES.w100]),
  input: StyleSheet.flatten([
    {
      borderBottomWidth: 1,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
    ES.w90,
    ES.px1,
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
    ES.w100,
    ES.fx0,
    ES.centerItems,
    ES.gap5,
    ES.px1,
    ES.bRadius10,

    ES.py3,
  ]),
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
});
