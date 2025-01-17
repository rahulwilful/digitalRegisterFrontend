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
import ES from '../../styles/ES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  primaryColor,
  primaryTextColor,
  whiteButton,
} from '../../Constants/Colours';
import axiosClient from '../../../axiosClient';
import {toggleLogin} from '../../Redux/actions/action';
import {Picker} from '@react-native-picker/picker';
import Btn from '../../Components/Btn';
import HeadingText from '../../Components/HeadingText';
import {addAllItems, addItem} from '../../Redux/actions/itemActions';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';
import ModalComponent from '../../Components/ModalComponent';
import Loading from '../../Constants/Loading';
import NormalText from '../../Components/NormalText';
import {downArrowIcon} from '../../Constants/imagesAndIcons';

const AddItem = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [name, setName] = useState('rahul');
  const [email, setEmail] = useState('rahre49@gmail.com');
  const [password, setPassword] = useState('111111');
  const [mobileNo, setMobileNo] = useState('1234567890');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

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
      setQuantityUnits(quantityUnitRes.data.result);
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

    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit,
      };

      const res = await axiosClient.post('/item/add', form);

      let tempItems = items;

      if (res) {
        dispatch(addItem(res.data.result));
        showToast('Item added successfully');
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
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
    <>
      <ModalComponent
        height={'70%'}
        isModalVisible={quantityModal}
        closeModal={() => setQuantityModal(false)}>
        <View style={[ES.fx1, ES.py2]}>
          <View style={[ES.fx1, isLoading ? ES.dNone : null]}>
            <View style={[ES.fx1, s.modalListContainer]}>
              <Btn
                method={() => {
                  setQuantityUnit(''), setQuantityModal(false);
                }}
                width={'95%'}
                bgColor={whiteButton}
                color={primaryTextColor}>
                <Text> None</Text>
              </Btn>
            </View>
            <FlatList
              data={quantityUnits}
              contentContainerStyle={[ES.pb1, ES.w100]}
              refreshing={isLoading}
              onRefresh={() => getQuantityUnits()}
              renderItem={({item}) => (
                <View style={[s.modalListContainer]}>
                  {quantityUnit != item.name ? (
                    <Btn
                      method={() => {
                        setQuantityUnit(item.name), setQuantityModal(false);
                      }}
                      width={'95%'}
                      bgColor={whiteButton}
                      color={primaryTextColor}>
                      <Text style={[ES.capitalize]}>
                        {' '}
                        {item.name.slice(0, 9)}
                      </Text>
                    </Btn>
                  ) : (
                    <Btn width={'95%'}>
                      <Text style={[ES.capitalize]}>
                        {' '}
                        {item.name.slice(0, 9)}{' '}
                      </Text>
                    </Btn>
                  )}
                </View>
              )}
            />
          </View>
          <View style={[ES.fx1, isLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </ModalComponent>

      <KeyboardAvoidingComponent>
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
                <TouchableOpacity
                  onPress={() => setQuantityModal(true)}
                  style={[
                    ES.flexRow,
                    ES.justifyContentSpaceBetween,
                    ES.alignItemsCenter,
                    ES.py06,
                    ES.ps06,
                    ES.bRadius5,
                    s.input,
                  ]}>
                  <NormalText color={'rgb(68, 64, 64)'}>
                    <Text
                      style={[
                        !quantityUnit ? ES.placeHolderText : null,
                        ES.capitalize,
                      ]}>
                      {quantityUnit ? quantityUnit : 'Select Quantity Unit'}
                    </Text>
                  </NormalText>
                  <Image
                    source={downArrowIcon}
                    style={[ES.hs11, ES.objectFitContain]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Btn method={handleAddItem}>
              <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
            </Btn>
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </>
  );
};

export default AddItem;

const s = StyleSheet.create({
  container: StyleSheet.flatten([
    ES.fx1,
    ES.centerItems,
    ES.my2,
    ES.w100,
    {backgroundColor},
  ]),
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
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
});
