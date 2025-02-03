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
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import axiosClient from '../../../axiosClient';
import HeadingText from '../../Components/HeadingText';
import ES from '../../styles/ES';
import ItemCard from './components/ItemCard';
import {
  backgroundColor,
  headerBackgroundColor,
  primaryButtonColor,
  primaryColor,
  primaryDarkColor,
  primaryInputBorderColor,
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
import {DownArrowVectoreIcon} from '../../Constants/VectoreIcons';
import AddItem from './components/AddItem';
import {useFocusEffect} from '@react-navigation/native';

import debounce from 'lodash/debounce';
import RestoreButton from '../../Components/RestoreButton';

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

  const [deleted, setDeleted] = useState(false);
  const [activeItems, setActiveItems] = useState([]);
  const [deletedItems, setDeleteItems] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [itemToDeleteRestore, setItemToDeleteRestore] = useState({});

  useFocusEffect(
    useCallback(() => {
      setDeleted(false);
      setSearchQuery('');
      getItems();
    }, []),
  );

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  useEffect(() => {
    if (searchQuery.length == 0) {
      setItems(originalItems);
    }
  }, [searchQuery]);

  const getItemsByName = async name => {
    console.log('text: ', name);
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
      setItems([]);
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const debouncedGetItemsByName = debounce(getItemsByName, 700);

  const handleDebounce = async text => {
    console.log('text: ', text);

    setSearchQuery(text);
    debouncedGetItemsByName(text);
  };

  const handleDeleteItem = async id => {
    console.log('handleDeleteItem: ', id);
    setButtonLoading(true);
    try {
      const res = await axiosClient.delete(`/item/${id}`);
      if (res) {
        showToast('item deleted');
      }

      console.log('res.data: ', res.data);

      let temp = items;
      let temp2 = originalItems;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = true;
          setDeleteItems([...deletedItems, temp[i]]);
          setActiveItems(activeItems.filter(item => !item.is_delete));
        }
      }

      setItems(temp);
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
    setButtonLoading(false);

    setModalVisible(false);
  };

  const handleRestoreItem = async id => {
    console.log('handleRestoreItem: ', id);
    setButtonLoading(true);

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
          setActiveItems([...activeItems, temp[i]]);
          setDeleteItems(deletedItems.filter(item => item.is_delete));
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
    setButtonLoading(false);

    setModalVisible(false);
  };

  const getItems = async () => {
    //console.log('getItems: ');
    setSearchQuery('');
    setIsLoading(true);
    try {
      const res = await axiosClient.get(`/item/getall`);
      // console.log('AllItems res: ', res.data.result);

      setItems(res.data.result);
      setOriginalItems(res.data.result);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const handleSortDeleted = itemsData => {
    //if (itemsData.length <= 0) return;
    const temp = itemsData.filter(item => !item.is_delete);
    const temp2 = itemsData.filter(item => item.is_delete);

    setActiveItems(temp);
    setDeleteItems(temp2);
    setRenderKey(renderKey + 1);
  };

  useEffect(() => {
    handleSortDeleted(items);
    //console.log('calling handleSortDeleted');
  }, [items]);

  useEffect(() => {
    console.log('AllItems');
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
    let temp = [...originalItems];
    let temp2 = [...items];
    for (let i in temp) {
      if (temp[i]._id === itemData._id) {
        temp[i] = itemData;
        setOriginalItems(temp);

        break;
      }
    }

    for (let i in temp2) {
      if (temp2[i]._id === itemData._id) {
        temp2[i] = itemData;
        setItems(temp2);

        handleSortDeleted(temp2);
        return;
      }
    }

    temp.push(itemData);
    temp2.push(itemData);

    setItems(temp2);
    setOriginalItems(temp);

    handleSortDeleted(temp2);
  };

  const handleRestoreFunction = () => {
    setSearchQuery('');
    getItems();
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
              buttonLoading={buttonLoading}
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

      <AddItem
        addModal={addModal}
        closeModal={() => setAddModal(false)}
        handleUpdateItemList={handleUpdateItemList}
      />

      <View style={[ES.fx1]}>
        <View style={[s.header, ES.mt1]}>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            value={searchQuery}
            onChangeText={text => handleDebounce(text)}
          />
        </View>
        <View
          style={[
            ES.w100,
            ES.flexRow,
            ES.gap2,
            ES.px1,
            ES.py04,
            ES.centerItems,
          ]}>
          <Btn
            width={'45%'}
            color={deleted ? primaryTextColor : null}
            bgColor={deleted ? whiteButton : primaryButtonColor}
            method={() => {
              setDeleted(false), setRenderKey(renderKey + 1);
            }}>
            Active
          </Btn>
          <Btn
            width={'45%'}
            color={deleted ? null : primaryTextColor}
            bgColor={!deleted ? whiteButton : primaryButtonColor}
            method={() => {
              setDeleted(true), setRenderKey(renderKey + 1);
            }}>
            Deleted
          </Btn>
        </View>

        {isLoading == false &&
          ((deleted == false && activeItems.length > 0) ||
            (deleted == true && deletedItems.length > 0)) && (
            <View style={[ES.w100, ES.fx1]} key={renderKey}>
              <FlatList
                removeClippedSubviews={false}
                data={deleted ? deletedItems : activeItems}
                contentContainerStyle={[s.list]}
                renderItem={({item, index}) => (
                  <View style={[]}>
                    <ItemCard
                      item={item}
                      index={index}
                      handleDeleteItem={handleDeleteItem}
                      handleRestoreItem={handleRestoreItem}
                      openModal={openModal}
                      handleUpdateItemList={handleUpdateItemList}
                    />
                  </View>
                )}
                refreshing={isLoading}
                onRefresh={handleRestoreFunction}
                maxToRenderPerBatch={20}
              />
            </View>
          )}

        <AddButton method={() => setAddModal(true)} />

        <View
          style={[
            isLoading == false &&
            ((deleted == false && activeItems.length <= 0) ||
              (deleted == true && deletedItems.length <= 0))
              ? ES.dBlock
              : ES.dNone,
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
          <RestoreButton method={handleRestoreFunction} />
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
    {
      borderBottomWidth: 1,
      borderColor: primaryInputBorderColor,
      borderRadius: 5,
    },
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
  list: StyleSheet.flatten([ES.px1, ES.gap2, ES.mt1, {paddingBottom: 140}]),
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
    ES.fx1,
    ES.centerItems,
    ES.gap5,
    ES.px1,
    ES.bRadius10,

    ES.py1,
  ]),
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
});
