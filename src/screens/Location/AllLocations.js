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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosClient from '../../../axiosClient';
import HeadingText from '../../Components/HeadingText';
import ES from '../../styles/ES';
import ItemCard from '../Items/components/ItemCard';
import {headerBackgroundColor, primaryColor} from '../../Constants/Colours';
import Loading from '../../Constants/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {addAllItems, addIAlltems} from '../../Redux/actions/itemActions';
import {
  noDataImage,
  wareHouseIcon,
  wareHouseIcon3,
} from '../../Constants/imagesAndIcons';

import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import LocationCard from '../../Components/LocationCard';
import AddButton from '../../Components/AddButton';

const AllLocations = ({navigation}) => {
  const reduxItems = useSelector(state => state.items);
  const [items, setItems] = useState([]);
  const [originaLocations, setOriginaLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToDeleteRestore, setItemToDeleteRestore] = useState({});
  const [locations, setLocations] = useState([]);

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
      setLocations(originaLocations);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axiosClient.post(`/storage/location/get/by/name`, form);

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
      const res = await axiosClient.delete(`/storage/location/delete/${id}`);
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
      let temp2 = originaLocations;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = true;
        }
      }
      setOriginaLocations(temp2);
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
      const res = await axiosClient.put(`/storage/location/restore/${id}`);
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
      let temp2 = originaLocations;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = false;
        }
      }
      setOriginaLocations(temp2);
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

  const getLocations = async () => {
    console.log('getLocations: ');
    setSearchQuery('');
    setIsLoading(true);
    try {
      const res = await axiosClient.get(`/storage/location/getall`);
      console.log('AllItems res: ', res.data.result);
      setLocations(res.data.result);
      setOriginaLocations(res.data.result);
      useDispatch(addAllItems(res.data.result));
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

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

  return (
    <>
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
            onChangeText={text => getItemsByName(text)}
          />
        </View>

        {isLoading == false && locations.length > 0 && (
          <View style={[ES.w100, ES.fx1]}>
            <FlatList
              data={locations}
              contentContainerStyle={[s.list]}
              renderItem={({item}) => (
                <LocationCard
                  image={wareHouseIcon3}
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                  handleRestoreItem={handleRestoreItem}
                  openModal={openModal}
                />
              )}
              refreshing={isLoading}
              onRefresh={getLocations}
              maxToRenderPerBatch={20}
            />
          </View>
        )}

        <AddButton method={() => navigation.navigate('stackAddLocation')} />

        <View
          style={[
            isLoading == false && locations.length == 0 ? ES.dBlock : ES.dNone,
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

export default AllLocations;

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
});
