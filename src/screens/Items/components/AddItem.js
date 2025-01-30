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
  modalColor,
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
import {DownArrowVectoreIcon} from '../../../Constants/VectoreIcons';
import {Dropdown} from 'react-native-element-dropdown';

const AddItem = ({addModal, closeModal, handleUpdateItemList}) => {
  const [itemName, setItemName] = useState('');
  const [name, setName] = useState('rahul');
  const [email, setEmail] = useState('rahre49@gmail.com');
  const [password, setPassword] = useState('111111');
  const [mobileNo, setMobileNo] = useState('1234567890');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

  const [buttonLoading, setButtonLoading] = useState(false);

  const [quantityUnit, setQuantityUnit] = useState('');
  const [quantityUnits, setQuantityUnits] = useState([]);
  const [quantityModal, setQuantityModal] = useState(false);

  const items = useSelector(state => state.items);
  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log('items.length', items.length);
  }, [items]);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const getData = async () => {
    try {
      const storageRes = await axiosClient.get('/storage/location/getall');
      setStorageLocations(storageRes.data.result);
      //console.log('storageRes: ', storageRes.data.result);
    } catch (error) {
      console.log('Error fetching storage locations:', error);
    }

    try {
      const rolesRes = await axiosClient.get('/role/getall');
      setRoles(rolesRes.data.result);
    } catch (error) {
      console.log('Error fetching roles:', error);
    }
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
    checkLogin();
    getData();
    getQuantityUnits();
  }, []);

  const handleAddItem = async () => {
    if (!verifyInputs()) return;
    setButtonLoading(true);
    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit._id,
      };

      const res = await axiosClient.post('/item/add', form);

      let tempItems = items;

      if (res) {
        dispatch(addItem(res.data.result));
        showToast('Item added successfully');
        handleUpdateItemList(res.data.result);
        closeModal();
        setItemName('');
        setQuantityUnit('');
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
        console.log('Unexpected error:', error);
      }
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

  return (
    <>
      <FullModalComponent
        height={'40%'}
        isModalVisible={addModal}
        closeModal={closeModal}>
        <KeyboardAvoidingComponent bg={false}>
          <View style={[s.container]}>
            <View style={[s.card]}>
              <HeadingText style={[ES.textDark, ES.f26, ES.fw700]}>
                Add Item
              </HeadingText>

              <TextInput
                style={[s.input]}
                placeholder="Item Name"
                value={itemName}
                onChangeText={setItemName}
              />

              <View style={[ES.w100]}>
                <View style={[ES.w100, ES.fx0, ES.centerItems]}>
                  <View style={[s.input]}>
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
                      iconStyle={{width: 26, height: 26}}
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

              <Btn
                buttonLoading={buttonLoading}
                width={'90%'}
                method={handleAddItem}>
                <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
              </Btn>
            </View>
          </View>
        </KeyboardAvoidingComponent>
      </FullModalComponent>
    </>
  );
};

export default AddItem;

const s = StyleSheet.create({
  container: StyleSheet.flatten([ES.fx1, ES.centerItems, ES.my2, ES.w100]),
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
