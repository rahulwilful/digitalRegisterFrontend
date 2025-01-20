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
import headingText from '../../../Components/HeadingText';
import HeadingText from '../../../Components/HeadingText';
import Loading from '../../../Constants/Loading';
import KeyboardAvoidingComponent from '../../../Components/KeyboardAvoidingComponent';
import FullModalComponent from '../../../Components/FullModalComponent';
import ModalComponent from '../../../Components/ModalComponent';
import {downArrowIcon} from '../../../Constants/imagesAndIcons';
import NormalText from '../../../Components/NormalText';

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
  const [quantityUnit, setQuantityUnit] = useState('');
  const [item, setItem] = useState({});

  const [quantityUnits, setQuantityUnits] = useState([]);
  const [quantityModal, setQuantityModal] = useState(false);

  //const id = route.params.item_id;

  const [storageLocations, setStorageLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  const isLoggedIn = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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
      setQuantityUnits(quantityUnitRes.data.result);
    } catch (error) {
      console.log('Error fetching storage locations:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setItemName(itemData?.item_name);
    setQuantityUnit(itemData?.quantity_unit);
    getData();
    getQuantityUnits();
  }, [itemData]);

  const handleUpdateItem = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit,
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
                color={primaryColor}>
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
                        {item.name.slice(0, 9)}
                      </Text>
                    </Btn>
                  ) : (
                    <Btn width={'95%'}>
                      <Text style={[ES.capitalize]}>
                        {item.name.slice(0, 9)}
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
              <View style={[ES.w100, ES.centerItems, ES.mt1]}>
                <Btn width={'90%'} method={handleUpdateItem}>
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
  container: StyleSheet.flatten([ES.fx1, ES.my2, ES.centerItems, ES.w100]),
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
