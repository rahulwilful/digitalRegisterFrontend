import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ES from '../../styles/ES';
import axiosClient from '../../../axiosClient';
import {Picker} from '@react-native-picker/picker';
import {
  backgroundColor,
  lightTextColor,
  primaryColor,
  primaryLightTextColor,
  primaryTextColor,
  whiteButton,
} from '../../Constants/Colours';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  cancelIcon,
  downArrowIcon,
  itemIcon,
  penIcon,
} from '../../Constants/imagesAndIcons';
import Btn from '../../Components/Btn';
import HeadingText from '../../Components/HeadingText';
import NormalText from '../../Components/NormalText';
import ModalComponent from '../../Components/ModalComponent';
import Loading from '../../Constants/Loading';

const AddRecord = () => {
  const [name, setName] = useState('rahul');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [role, setRole] = useState('');

  const [pickupPerson, setPickupPerson] = useState('');
  const [pickupPersons, setPickupPersons] = useState([]);
  const [pickPersonModal, setPickPersonModal] = useState(false);
  const [pickupModalLoading, setPickupModalLoading] = useState(false);

  const [renderKey, setRenderKey] = useState(0);
  const [originalItems, setOriginalItems] = useState([]);
  const [items, setItems] = useState([]);
  const [item_list, setItem_list] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const getData = async () => {
    setIsLoading(true);
    console.log('AddRecorduser storage_location_id', user.storage_location_id);
    try {
      const pickupRes = await axiosClient.get(
        `/user/get/pickup-persons-by-storage-location/${user.storage_location_id._id}`,
      );

      console.log('pickupRes: ', pickupRes.data.result);

      setPickupPersons(pickupRes.data.result);
      setRenderKey(renderKey + 1);
    } catch (error) {
      console.log('unique-warehouse-admins error: ', error);
    }

    try {
      const itemRes = await axiosClient.get('/item/getall/active');
      console.log('itemRes: ', itemRes.data.result);
      let temp = itemRes.data.result;
      let temp2 = [];
      for (let i in temp) {
        temp2.push({
          label: temp[i].item_name,
          value: temp[i],
        });
      }
      setItems(itemRes.data.result);
      setOriginalItems(itemRes.data.result);
      setRenderKey(renderKey + 1);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user != undefined && user != null && user != 'undefined') {
      getData();
    }
  }, [user]);

  const handleAddUser = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        name,
        mobile_no: mobileNo,
        email,
        password,
        storage_location_id: storageLocation,
        role_type: role,
      };

      const token = await AsyncStorage.getItem('token');

      const res = await axiosClient.post('/user/create', form);
      dispatch(toggleLogin(true));
      if (res) {
        showToast('User added successfully');
      }
    } catch (error) {
      if (error.response?.status === 409) {
        showToast(error.response.data.message);
      } else if (error.response?.status === 403) {
        showToast(error.response.data.message);
      } else {
        console.log('Unexpected error:', error);
      }
    }
  };

  const verifyInputs = () => {
    if (!name) {
      showToast('Please enter name');
      return false;
    }

    if (!mobileNo) {
      showToast('Please enter mobile number');
      return false;
    }

    if (!email) {
      showToast('Please enter email');
      return false;
    }

    if (!password) {
      showToast('Please enter password');
      return false;
    }

    if (!storageLocation) {
      showToast('Please select storage location');
      return false;
    }

    if (!role) {
      showToast('Please select role');
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
    console.log('item_list: ', item_list.length);
  }, [item_list]);

  const handleAddRecord = async () => {
    if (pickupPerson == '') {
      showToast('Please select a pickup person');
      return false;
    }
    if (item_list.length == 0) {
      showToast('Please add at least one item');
      return false;
    }

    try {
      const form = {
        storage_location_id: user.storage_location_id,
        warehouse_admin: user._id,
        pickup_person: pickupPerson._id,
        item_list: item_list,
      };
      console.log('form', form);

      const recordRes = await axiosClient.post(`/register/add`, form);
      console.log('recordRes: ', recordRes);

      if (recordRes) {
        showToast('Record added successfully');
      }

      setPickupPerson('');
      setItem_list([]);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleAddItem = () => {
    console.log('selectedItem: ', selectedItem);
    const parsedQuantity = parseInt(quantity, 10);

    if (!parsedQuantity || parsedQuantity <= 0) {
      showToast('Please enter a valid  quantity');
      return false;
    }

    if (!selectedItem) {
      showToast('Please select an item');
      return false;
    }

    let temp = [...item_list];

    for (let i in temp) {
      if (
        temp[i].item_id === selectedItem._id ||
        temp[i].item_id === selectedItem.item_id
      ) {
        console.log(temp[i]);
        temp[i].quantity = parsedQuantity;
        setItem_list(temp);
        setSelectedItem(null);
        setQuantity(null);
        console.log(temp[i]);
        return;
      }
    }

    let newItem = {
      item_id: selectedItem._id,
      item_name: selectedItem.item_name,
      quantity_unit: selectedItem.quantity_unit,
      quantity: parsedQuantity,
    };

    setItem_list([...item_list, newItem]);
    setSelectedItem(null);
    setQuantity(null);
    setModalVisible(true);
  };

  const handleEditItem = item => {
    /* console.log(item);
    console.log('quantity: ', quantity); */
    setSelectedItem(item);
    setQuantity(item.quantity);
  };

  useEffect(() => {
    console.log('quantity: ', quantity);
  }, [quantity]);

  const handleRemoveItem = item => {
    let temp = [...item_list];
    for (let i in temp) {
      if (temp[i].item_id === item.item_id) {
        temp.splice(i, 1);
        setItem_list(temp);
        return;
      }
    }
  };

  const getItemsByName = async name => {
    setIsLoading(true);
    setSearchQuery(name);

    let form = {
      item_name: name,
    };
    console.log('name: ', form);

    if (name.length === 0) {
      setItems(originalItems);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axiosClient.post(`/item/get/active/by/name`, form);

      // console.log('AllItems res: ', res.data.result.length);

      setItems(res.data.result);
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      setItems([]);
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ModalComponent
        isModalVisible={isModalVisible}
        height={'90%'}
        closeModal={() => setModalVisible(false)}>
        <View style={[ES.fx1, ES.gap1]}>
          <View style={[]}>
            <TextInput
              value={searchQuery}
              onChangeText={text => getItemsByName(text)}
              placeholder="Search..."
              style={[s.input]}
            />
          </View>
          <View style={[ES.p04, ES.fx1, isLoading ? ES.dNone : ES.dBlock]}>
            <FlatList
              data={items}
              contentContainerStyle={[ES.flexColumn]}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedItem(item);
                    setModalVisible(false);
                  }}
                  style={[
                    ES.p04,
                    {borderBottomWidth: 0.2, borderColor: primaryColor},
                  ]}>
                  <NormalText size={18} color={primaryTextColor}>
                    {item.item_name}{' '}
                    <Text style={[{color: lightTextColor}, ES.fw500, ES.f12]}>
                      ({item.quantity_unit})
                    </Text>
                  </NormalText>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={[ES.fx1, isLoading ? ES.dBlock : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </ModalComponent>

      <ModalComponent
        height={'70%'}
        isModalVisible={pickPersonModal}
        closeModal={() => setPickPersonModal(false)}>
        <View style={[ES.fx1, ES.py2]}>
          <View style={[ES.fx1, pickupModalLoading ? ES.dNone : null]}>
            <View style={[ES.fx1, s.modalListContainer]}>
              <Btn
                method={() => {
                  setPickupPerson(''), setPickPersonModal(false);
                }}
                width={'95%'}
                bgColor={whiteButton}
                color={primaryTextColor}>
                <Text> None</Text>
              </Btn>
            </View>
            <FlatList
              data={pickupPersons}
              contentContainerStyle={[ES.pb1, ES.w100]}
              renderItem={({item}) => (
                <View style={[s.modalListContainer]}>
                  {pickupPerson._id != item._id ? (
                    <Btn
                      method={() => {
                        setPickupPerson(item), setPickPersonModal(false);
                      }}
                      width={'95%'}
                      bgColor={whiteButton}
                      color={primaryTextColor}>
                      <Text> {item.name.slice(0, 9)}</Text>
                    </Btn>
                  ) : (
                    <Btn width={'95%'}>
                      <Text> {item.name.slice(0, 9)} </Text>
                    </Btn>
                  )}
                </View>
              )}
            />
          </View>
          <View style={[ES.fx1, pickupModalLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </ModalComponent>

      <View style={[s.container]}>
        <View style={[s.inputContainer]} key={renderKey}>
          <HeadingText style={[ES.textDark, ES.f26, ES.fw700]}>
            Add Record
          </HeadingText>

          <View style={[ES.w100, ES.relative]}>
            <View style={[ES.hs35]}>
              <TouchableOpacity
                onPress={() => setPickPersonModal(true)}
                style={[
                  ES.flexRow,
                  ES.justifyContentSpaceBetween,
                  ES.alignItemsCenter,
                  ES.py06,
                  ES.px2,
                  ES.bRadius5,
                  s.input,
                ]}>
                <NormalText color={'rgb(68, 64, 64)'}>
                  <Text>
                    {pickupPerson ? pickupPerson.name : 'Select Pickup Person'}
                  </Text>
                </NormalText>
                <Image
                  source={downArrowIcon}
                  style={[ES.hs11, ES.objectFitContain]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[ES.w100, ES.relative]}>
            {items.length > 0 && selectedItem == null && (
              <View style={[ES.hs35]}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={[
                    ES.flexRow,
                    ES.justifyContentSpaceBetween,
                    ES.alignItemsCenter,
                    ES.py06,
                    ES.px2,
                    ES.bRadius5,
                    s.input,
                  ]}>
                  <NormalText color={'rgb(68, 64, 64)'}>
                    <Text>Select Item</Text>
                  </NormalText>
                  <Image
                    source={downArrowIcon}
                    style={[ES.hs11, ES.objectFitContain]}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {selectedItem != null && (
            <View style={[ES.fx0, ES.flexRow, ES.gap1]}>
              <View
                style={[
                  ES.fx6,
                  s.input,
                  ES.flexRow,
                  ES.justifyContentSpaceBetween,
                  ES.alignItemsCenter,
                ]}>
                <TextInput
                  style={[, ES.capitalize]}
                  placeholder="Name"
                  value={selectedItem.item_name}
                />

                <TouchableOpacity
                  style={[]}
                  onPress={() => {
                    setSelectedItem(null);
                    setQuantity(null);
                  }}>
                  <Image
                    source={cancelIcon}
                    style={[ES.hs25, ES.ws25, ES.objectFitContain]}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                placeholder="Qty"
                style={[s.input, ES.fx2]}
                keyboardType="number-pad"
                value={quantity ? quantity.toString() : ''}
                onChangeText={text => {
                  const sanitizedText = text.replace(/[^0-9]/g, '');
                  setQuantity(sanitizedText);
                }}
              />

              <View style={[ES.fx0, ES.centerItems]}>
                <TouchableOpacity
                  onPress={handleAddItem}
                  style={[
                    {backgroundColor: primaryColor},
                    ES.bRadius5,
                    ES.p06,
                  ]}>
                  <Text style={[ES.textLight, ES.fw700, ES.f16]}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <TouchableOpacity>
            <Btn method={handleAddRecord}>
              <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add Record </Text>
            </Btn>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={[ES.w100, ES.fx1, ES.mt1, ES.pb3, ES.relative, ES.z1]}>
            {item_list.length > 0 && (
              <View style={[]}>
                <FlatList
                  data={item_list}
                  keyExtractor={(subItem, index) => index.toString()}
                  contentContainerStyle={[ES.fx0, ES.px04]}
                  renderItem={({item: subItem}) => (
                    <View style={[s.itemContainer]}>
                      <View style={[ES.fx0, ES.centerItems]}>
                        <Image
                          source={itemIcon}
                          style={[ES.hs50, ES.ws50, ES.objectFitContain]}
                        />
                      </View>
                      <View style={[ES.fx1]}>
                        <TouchableOpacity style={[]}>
                          <Text
                            style={[ES.f18, ES.fw500, ES.px08, ES.capitalize]}>
                            Item: {subItem.item_name}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[, ES.flexRow]}>
                          <Text
                            style={[
                              ES.f16,
                              ES.fw500,
                              ES.px08,
                              ES.capitalize,
                              ES.textSecondary,
                            ]}>
                            qty:{' '}
                            <Text style={[s.lightText]}>
                              {subItem.quantity} {subItem.quantity_unit}
                            </Text>
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleEditItem(subItem)}
                        style={[]}>
                        <Image
                          source={penIcon}
                          style={[ES.hs35, ES.ws35, ES.objectFitContain]}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleRemoveItem(subItem)}
                        style={[]}>
                        <Image
                          source={cancelIcon}
                          style={[ES.hs27, ES.ws27, ES.objectFitContain]}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AddRecord;

const s = StyleSheet.create({
  itemContainer: StyleSheet.flatten([
    ES.py02,

    ES.fx1,
    ES.w100,
    ES.flexRow,
    ES.justifyContentSpaceBetween,
    ES.alignItemsCenter,
    ES.gap2,
  ]),
  container: StyleSheet.flatten([
    ES.screenHeight,
    ES.alignItemsCenter,

    ES.w100,
    {backgroundColor},
  ]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
    ES.w99,
    ES.px1,
    ES.f16,
  ]),
  selectSearch: StyleSheet.flatten([
    {borderWidth: 0, borderColor: '#007bff', borderRadius: 5},

    ES.w99,
    ES.px1,
    ES.f16,
    ES.absolute,
    ES.w100,
    ES.z10,
  ]),
  button: StyleSheet.flatten([
    ES.tempBorder,
    ES.bgPrimary,
    ES.px3,
    ES.bRadius5,
    ES.py04,
    ES.shadow1,
  ]),
  modal: StyleSheet.flatten([
    ES.w90,
    ES.h90,
    ES.bgLight,
    ES.bRadius10,
    ES.shadow10,
    {borderWidth: 0.5, borderColor: '#000'},
  ]),
  inputContainer: StyleSheet.flatten([
    ES.w100,
    ES.fx0,
    ES.centerItems,
    ES.gap5,
    ES.px1,

    ES.shadow7,
    ES.py3,
    {
      borderBottomLeftRadius: 20, // Apply radius to bottom-left corner
      borderBottomRightRadius: 20,
      backgroundColor,
    },
  ]),
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
  modalClose: StyleSheet.flatten([
    ES.fx0,
    ES.alignItemsEnd,
    ES.w100,
    ES.pt06,
    ES.pe06,
  ]),
});
