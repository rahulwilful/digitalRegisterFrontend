import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Image,
  Modal,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import axiosClient from '../../../axiosClient';
import HeadingText from '../../Components/HeadingText';
import ES from '../../styles/ES';
import ItemCard from '../Items/components/ItemCard';
import {
  headerBackgroundColor,
  primaryButtonColor,
  primaryColor,
  primaryInputBorderColor,
  primaryTextColor,
  whiteButton,
} from '../../Constants/Colours';
import Loading from '../../Constants/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {addAllItems, addIAlltems} from '../../Redux/actions/itemActions';
import {
  noDataImage,
  wareHouseIcon,
  wareHouseIcon3,
} from '../../Constants/imagesAndIcons';

import debounce from 'lodash/debounce';

import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import LocationCard from './components/LocationCard';
import AddButton from '../../Components/AddButton';
import AddLocation from './components/AddLocation';
import {useFocusEffect} from '@react-navigation/native';
import RestoreButton from '../../Components/RestoreButton';

const AllLocations = ({navigation}) => {
  const reduxItems = useSelector(state => state.items);
  const [items, setItems] = useState([]);
  const [originalLocations, setOriginalLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToDeleteRestore, setItemToDeleteRestore] = useState({});
  const [locations, setLocations] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const [deleted, setDeleted] = useState(false);
  const [activeLocations, setActiveLocations] = useState([]);
  const [deletedLocations, setDeleteLocations] = useState([]);

  const [buttonLoading, setButtonLoading] = useState(false);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      setDeleted(false);
      setSearchQuery('');
      getLocations();
    }, []),
  );

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const getLocationsByName = async name => {
    setIsLoading(true);
    setSearchQuery(name);

    let form = {
      name: name,
    };
    console.log('name: ', form);

    if (name.length == 0) {
      setLocations(originalLocations);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axiosClient.post(`/storage/location/get/by/name`, form);

      console.log('AllItems res: ', res.data.result.length);
      setLocations(res.data.result);
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      setLocations([]);
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const debouncedGetLocationsByName = debounce(getLocationsByName, 700);

  const handleDebounce = async text => {
    console.log('text: ', text);

    setSearchQuery(text);
    debouncedGetLocationsByName(text);
  };

  const handleDeleteItem = async id => {
    console.log('handleDeleteItem: ', id);
    setButtonLoading(true);
    try {
      const res = await axiosClient.delete(`/storage/location/delete/${id}`);
      if (res) {
        showToast('item deleted');
      }

      console.log('res.data: ', res.data);

      let temp = locations;
      for (let i in temp) {
        if (temp[i]._id == id) {
          temp[i].is_delete = true;
          setDeleteLocations([...deletedLocations, temp[i]]);
          setActiveLocations(activeLocations.filter(item => item._id != id));
        }
      }
      setItems(temp);
      let temp2 = originalLocations;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = true;
        }
      }
      setOriginalLocations(temp2);
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
      const res = await axiosClient.put(`/storage/location/restore/${id}`);
      if (res) {
        showToast('item restored');
      }
      console.log('res.data: ', res.data);
      let temp = locations;
      for (let i in temp) {
        if (temp[i]._id == id) {
          temp[i].is_delete = false;
          setActiveLocations([...activeLocations, temp[i]]);
          setDeleteLocations(deletedLocations.filter(item => item._id != id));
        }
      }
      setRenderKey(renderKey + 1);
      setItems(temp);
      let temp2 = originalLocations;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = false;
        }
      }
      setOriginalLocations(temp2);
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

  useEffect(() => {
    console.log('activeLocations: ', activeLocations);
    console.log('deletedLocations: ', deletedLocations);
  }, [activeLocations, deletedLocations]);

  const getLocations = async () => {
    console.log('getLocations: ');
    setSearchQuery('');
    setIsLoading(true);
    try {
      const res = await axiosClient.get(`/storage/location/getall`);
      console.log('AllItems res: ', res.data.result);
      setLocations(res.data.result);
      setOriginalLocations(res.data.result);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const handleSortDeleted = itemsData => {
    console.log('handleSortDeleted: ', itemsData);
    // if (itemsData.length <= 0) return;
    const temp = itemsData.filter(item => !item.is_delete);
    const temp2 = itemsData.filter(item => item.is_delete);

    setActiveLocations(temp);
    setDeleteLocations(temp2);
    setRenderKey(renderKey + 1);
  };

  useEffect(() => {
    handleSortDeleted(locations);
    //console.log('calling sortlocations');
  }, [locations]);

  useEffect(() => {
    getLocations();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = item => {
    setItemToDeleteRestore(item);
    setModalVisible(true);
  };

  const handleUpdateLocationList = location => {
    // console.log('handleUpdateLocationList called');
    let temp = originalLocations;
    let temp2 = locations;
    for (let i in temp) {
      if (temp[i]._id === location._id) {
        temp[i] = location;
        setOriginalLocations(temp);
        break;
      }
    }

    for (let i in temp2) {
      if (temp2[i]._id === location._id) {
        temp2[i] = location;
        setLocations(temp2);
        handleSortDeleted(temp2);
        return;
      }
    }

    temp.push(location);
    temp2.push(location);

    setOriginalLocations(temp);
    setLocations(temp2);
    setActiveLocations([...activeLocations, location]);
    setRenderKey(renderKey + 1);
  };

  const handleRestoreFunction = () => {
    setSearchQuery('');
    getLocations();
  };

  return (
    <>
      <AddLocation
        addModal={addModal}
        closeModal={() => setAddModal(false)}
        handleUpdateLocationList={handleUpdateLocationList}
      />
      <ModalComponent
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        height={'20%'}>
        <View style={[ES.justifyContentSpaceEvenly, ES.fx1, ES.gap1]}>
          <View style={[ES.centerItems]}>
            <HeadingText>
              <Text>{itemToDeleteRestore.name}</Text>
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

      <View style={[ES.fx1]}>
        <View style={[s.header]}>
          <TextInput
            style={[s.textInput, ES.mt1]}
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
          ((deleted == false && activeLocations.length > 0) ||
            (deleted == true && deletedLocations.length > 0)) && (
            <View style={[ES.w100, ES.fx1]} key={renderKey}>
              <FlatList
                removeClippedSubviews={false}
                data={deleted ? deletedLocations : activeLocations}
                contentContainerStyle={[s.list]}
                renderItem={({item, index}) => (
                  <LocationCard
                    image={wareHouseIcon3}
                    item={item}
                    handleDeleteItem={handleDeleteItem}
                    handleRestoreItem={handleRestoreItem}
                    openModal={openModal}
                    handleUpdateLocationList={handleUpdateLocationList}
                    index={index}
                  />
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
            ((deleted == false && activeLocations.length <= 0) ||
              (deleted == true && deletedLocations.length <= 0))
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

export default AllLocations;

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
});
