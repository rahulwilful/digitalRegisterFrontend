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
import ItemCard from './components/ItemCard';
import {headerBackgroundColor, primaryColor} from '../../Constants/Colours';
import Loading from '../../Constants/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {addAllItems, addIAlltems} from '../../Redux/actions/itemActions';
import {noDataImage} from '../../Constants/imagesAndIcons';
import LinearGradient from 'react-native-linear-gradient';
import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import QuantityUnitCard from '../../Components/QuantityUnitCard';
import AddButton from '../../Components/AddButton';

const AllQuantityUnits = ({navigation}) => {
  const reduxItems = useSelector(state => state.items);
  const [QuantityUnits, setQuantityUnits] = useState([]);
  const [originalQuantityUnits, setOriginalQuantityUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
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
      setQuantityUnits(originalQuantityUnits);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axiosClient.post(`/item/get/by/name`, form);

      // console.log('AllItems res: ', res.data.result.length);
      setQuantityUnits(res.data.result);
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      setQuantityUnits([]);
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const handleDeleteItem = async id => {
    console.log('handleDeleteItem: ', id);

    try {
      const res = await axiosClient.delete(`/quantity_unit/delete/${id}`);
      if (res) {
        showToast('item deleted');
      }

      console.log('res.data: ', res.data);

      let temp = QuantityUnits;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = true;
        }
      }

      setQuantityUnits(temp);
      let temp2 = originalQuantityUnits;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = true;
        }
      }
      setOriginalQuantityUnits(temp2);
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
      const res = await axiosClient.put(`/quantity_unit/restore/${id}`);
      if (res) {
        showToast('item restored');
      }

      console.log('res.data: ', res.data);
      let temp = QuantityUnits;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = false;
        }
      }

      setQuantityUnits(temp);
      let temp2 = originalQuantityUnits;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = false;
        }
      }
      setOriginalQuantityUnits(temp2);
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

  const getQuantityUnits = async () => {
    console.log('getQuantityUnits: ');
    setSearchQuery('');
    setIsLoading(true);
    try {
      const res = await axiosClient.get(`/quantity_unit/getall`);
      console.log('AllQuantityUnits res: ', res.data.result);
      setQuantityUnits(res.data.result);
      setOriginalQuantityUnits(res.data.result);
      useDispatch(addAllItems(res.data.result));
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getQuantityUnits();
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
        <View style={[s.header, ES.mt1]}>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            value={searchQuery}
            onChangeText={text => getItemsByName(text)}
          />
        </View>

        {isLoading == false && QuantityUnits.length > 0 && (
          <View style={[ES.w100, ES.fx1]}>
            <FlatList
              data={QuantityUnits}
              contentContainerStyle={[s.list]}
              renderItem={({item}) => (
                <QuantityUnitCard
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                  handleRestoreItem={handleRestoreItem}
                  openModal={openModal}
                />
              )}
              refreshing={isLoading}
              onRefresh={getQuantityUnits}
              maxToRenderPerBatch={20}
            />
          </View>
        )}
        <AddButton
          method={() => navigation.navigate('stackAddQuantityUnits')}
        />

        <View
          style={[
            isLoading == false && QuantityUnits.length == 0
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
        </View>

        <View style={[isLoading ? ES.dBlock : ES.dNone, ES.h100]}>
          <Loading />
        </View>
      </View>
    </>
  );
};

export default AllQuantityUnits;

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
