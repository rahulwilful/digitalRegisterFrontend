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
import headingText from '../../Components/HeadingText';
import HeadingText from '../../Components/HeadingText';
import Loading from '../../Constants/Loading';

const UpdateItem = ({route}) => {
  const [itemName, setItemName] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('');
  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(true);

  console.log(' route.params.item_id: ', route);
  const id = route.params.item_id;

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
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

  useEffect(() => {
    getData();
  }, [route]);

  const handleUpdateItem = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit,
      };

      const res = await axiosClient.put(`/item/${id}`, form);

      if (res) {
        showToast(res.data.message);
      }
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('Unexpected error:', error);
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
        <TextInput
          style={[s.input]}
          placeholder="Quantity Unit"
          value={quantityUnit}
          onChangeText={setQuantityUnit}
        />

        <Btn method={handleUpdateItem}>
          <Text style={[ES.textLight, ES.fw700, ES.f20]}>Update </Text>
        </Btn>
      </View>

      <View style={[loading ? ES.dBlock : ES.dNone]}>
        <Loading />
      </View>
    </View>
  );
};

export default UpdateItem;

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
