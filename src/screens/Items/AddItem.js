import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {backgroundColor, primaryColor} from '../../Constants/Colours';
import axiosClient from '../../../axiosClient';
import {toggleLogin} from '../../Redux/actions/action';
import {Picker} from '@react-native-picker/picker';
import Btn from '../../Components/Btn';
import HeadingText from '../../Components/HeadingText';
import {addAllItems, addItem} from '../../Redux/actions/itemActions';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('');
  const [name, setName] = useState('rahul');
  const [email, setEmail] = useState('rahre49@gmail.com');
  const [password, setPassword] = useState('111111');
  const [mobileNo, setMobileNo] = useState('1234567890');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

  const items = useSelector(state => state.items);

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('items.length', items.length);
  }, [items]);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch(toggleLogin(true));
  };

  const getData = async () => {
    try {
      const storageRes = await axiosClient.get('/storage/location/getall');
      setStorageLocations(storageRes.data.result);
      console.log('storageRes: ', storageRes.data.result);
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

  useEffect(() => {
    checkLogin();
    getData();
  }, []);

  const handleAddItem = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit,
      };

      const token = await AsyncStorage.getItem('token');

      const res = await axiosClient.post('/item/add', form);

      let tempItems = items;

      dispatch();
      if (res) {
        dispatch(addItem(res.data.result));
        showToast('Item added successfully');
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

        <TextInput
          style={[s.input]}
          placeholder="Quantity Unit"
          value={quantityUnit}
          onChangeText={setQuantityUnit}
        />

        <Btn method={handleAddItem}>
          <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
        </Btn>
      </View>
    </View>
  );
};

export default AddItem;

const s = StyleSheet.create({
  container: StyleSheet.flatten([
    ES.fx1,
    ES.centerItems,
    ES.w100,
    {backgroundColor},
  ]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
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
    ES.w80,
    ES.fx0,
    ES.centerItems,
    ES.gap5,
    ES.px1,
    ES.bRadius10,
    ES.shadow7,
    ES.py3,
    {backgroundColor},
  ]),
});
