import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Image,
  Modal,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosClient from '../../../axiosClient';
import HeadingText from '../../Components/HeadingText';
import ES from '../../styles/ES';
import ItemCard from './components/ItemCard';
import {
  backgroundColor,
  headerBackgroundColor,
  primaryColor,
  primaryTextColor,
  whiteButton,
} from '../../Constants/Colours';
import Loading from '../../Constants/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {addAllItems, addIAlltems} from '../../Redux/actions/itemActions';
import {
  addIcon,
  downArrowIcon,
  noDataImage,
} from '../../Constants/imagesAndIcons';
import LinearGradient from 'react-native-linear-gradient';
import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import AddButton from '../../Components/AddButton';
import NormalText from '../../Components/NormalText';
import UpdateItem from './components/UpdateItem';

const AllItems = ({navigation}) => {
  const reduxItems = useSelector(state => state.items);
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const [itemName, setItemName] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('');
  const [quantityUnits, setQuantityUnits] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);

  const [itemToDeleteRestore, setItemToDeleteRestore] = useState({});

  const dispatch = useDispatch();

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
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
      const res = await axiosClient.post(`/item/get/by/name`, form);

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

  const handleDeleteItem = async id => {
    console.log('handleDeleteItem: ', id);

    try {
      const res = await axiosClient.delete(`/item/${id}`);
      if (res) {
        showToast('item deleted');
      }

      console.log('res.data: ', res.data);

      let temp = items;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = true;
        }
      }

      setItems(temp);
      let temp2 = originalItems;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = true;
        }
      }
      setOriginalItems(temp2);
      setRenderKey(renderKey + 1);
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('error: ', error);
    }
    setModalVisible(false);
  };

  const handleRestoreItem = async id => {
    console.log('handleRestoreItem: ', id);

    try {
      const res = await axiosClient.put(`/item/restore/${id}`);
      if (res) {
        showToast('item restored');
      }
      console.log('res.data: ', res.data);
      let temp = items;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = false;
        }
      }

      setItems(temp);
      let temp2 = originalItems;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = false;
        }
      }
      setOriginalItems(temp2);
      setRenderKey(renderKey + 1);
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('error: ', error);
    }
    setModalVisible(false);
  };

  const getItems = async () => {
    console.log('getItems: ');
    setSearchQuery('');
    setIsLoading(true);
    try {
      const res = await axiosClient.get(`/item/getall`);
      console.log('AllItems res: ', res.data.result);
      setItems(res.data.result);
      setOriginalItems(res.data.result);
      useDispatch(addAllItems(res.data.result));
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getItems();
    getQuantityUnits();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = item => {
    setItemToDeleteRestore(item);
    setModalVisible(true);
  };

  const navigateToAddNewItem = () => {
    navigation.navigate('newItem');
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

  const handleAddItem = async () => {
    if (!verifyInputs()) return;

    try {
      const form = {
        item_name: itemName,
        quantity_unit: quantityUnit,
      };

      const res = await axiosClient.post('/item/add', form);

      if (res) {
        showToast('Item added successfully');
        let tempItems = originalItems;
        tempItems.push(res.data.result);
        setItems(tempItems);
        setOriginalItems(tempItems);
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
    setAddModal(false);
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

  const handleUpdateItemList = itemData => {
    console.log('handleUpdateItemList: ', itemData);
    let temp = originalItems;
    for (let i in temp) {
      if (temp[i]._id === itemData._id) {
        temp[i] = itemData;
        break;
      }
    }
    setItems(temp);
    setOriginalItems(temp);
    setRenderKey(renderKey + 1);
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

      <ModalComponent
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        height={'20%'}>
        <View style={[ES.justifyContentSpaceEvenly, ES.fx1, ES.gap1]}>
          <View style={[ES.centerItems]}>
            <HeadingText>
              <Text>{itemToDeleteRestore.item_name}</Text>
            </HeadingText>
          </View>
          <View style={[ES.centerItems]}>
            <Btn
              width={'50%'}
              method={() =>
                itemToDeleteRestore.is_delete
                  ? handleRestoreItem(itemToDeleteRestore._id)
                  : handleDeleteItem(itemToDeleteRestore._id)
              }>
              <Text>
                {itemToDeleteRestore.is_delete ? 'Restore' : 'Delete'}
              </Text>
            </Btn>
          </View>
        </View>
      </ModalComponent>

      <ModalComponent
        isModalVisible={addModal}
        closeModal={() => setAddModal(false)}
        height={'35%'}>
        <View style={[ES.justifyContentSpaceEvenly, ES.fx1, ES.gap1]}>
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

            <Btn width={'90%'} method={handleAddItem}>
              <Text style={[ES.textLight, ES.fw700, ES.f20]}>Add </Text>
            </Btn>
          </View>
        </View>
      </ModalComponent>

      <View style={[ES.fx1]}>
        <View style={[s.header, ES.mt1]}>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            value={searchQuery}
            onChangeText={text => getItemsByName(text)}
          />
        </View>

        {isLoading == false && items.length > 0 && (
          <View style={[ES.w100, ES.fx1]} key={renderKey}>
            <FlatList
              data={items}
              contentContainerStyle={[s.list]}
              renderItem={({item}) => (
                <ItemCard
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                  handleRestoreItem={handleRestoreItem}
                  openModal={openModal}
                  handleUpdateItemList={handleUpdateItemList}
                />
              )}
              refreshing={isLoading}
              onRefresh={getItems}
              maxToRenderPerBatch={20}
            />
          </View>
        )}

        <AddButton method={() => setAddModal(true)} />

        <View
          style={[
            isLoading == false && items.length == 0 ? ES.dBlock : ES.dNone,
            ES.fx1,
            ES.gap2,
          ]}>
          <View style={[ES.w100, ES.h50, ES.alignItemsCenter]}>
            <Image
              source={noDataImage}
              style={[ES.w70, ES.h100, ES.objectFitContain]}
            />
          </View>
          <Text style={[ES.textCenter, ES.subHeadingText]}>
            No Records Found
          </Text>
        </View>

        <View style={[isLoading ? ES.dBlock : ES.dNone, ES.h100]}>
          <Loading />
        </View>
      </View>
    </>
  );
};

export default AllItems;

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
    {borderWidth: 0.5, borderColor: '#000'},
  ]),
  modalClose: StyleSheet.flatten([
    ES.fx0,
    ES.alignItemsEnd,
    ES.w100,
    ES.pt06,
    ES.pe06,
  ]),
  list: StyleSheet.flatten([ES.px1, ES.gap2, ES.mt1, {paddingBottom: 100}]),
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
    ES.fx1,
    ES.centerItems,
    ES.gap5,
    ES.px1,
    ES.bRadius10,

    ES.py1,
  ]),
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
});
