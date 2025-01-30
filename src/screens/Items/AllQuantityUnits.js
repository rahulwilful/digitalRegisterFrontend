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
import {noDataImage} from '../../Constants/imagesAndIcons';
import LinearGradient from 'react-native-linear-gradient';
import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import QuantityUnitCard from './components/QuantityUnitCard';
import AddButton from '../../Components/AddButton';
import AddQuentityUnit from './components/AddQuentityUnit';
import UpdateQuantityUnit from './components/UpdateQuantityUnit';

const AllQuantityUnits = ({navigation}) => {
  const reduxItems = useSelector(state => state.items);
  const [QuantityUnits, setQuantityUnits] = useState([]);
  const [originalQuantityUnits, setOriginalQuantityUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToDeleteRestore, setItemToDeleteRestore] = useState({});
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [unit, setUnit] = useState({});

  const [buttonLoading, setButtonLoading] = useState(false);

  const [deleted, setDeleted] = useState(false);
  const [activeQuantities, setActiveQuantities] = useState([]);
  const [deletedQuantities, setDeletedQuantities] = useState([]);

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
      name: name,
    };
    console.log('name: ', form);

    if (name.length === 0) {
      setQuantityUnits(originalQuantityUnits);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axiosClient.post(`/quantity_unit/get/by/name`, form);

      console.log('AllQuntityUnits res: ', res.data.result.length);
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
    setButtonLoading(true);
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
          setDeletedQuantities([...deletedQuantities, temp[i]]);
          setActiveQuantities(activeQuantities.filter(item => item._id !== id));
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
    setButtonLoading(false);

    setModalVisible(false);
  };

  const handleRestoreItem = async id => {
    console.log('handleRestoreItem: ', id);
    setButtonLoading(true);

    try {
      const res = await axiosClient.put(`/quantity_unit/restore/${id}`);
      if (res) {
        showToast('item restored');
      }

      console.log('res.data: ', res.data);
      let temp = QuantityUnits;
      for (let i in temp) {
        if (temp[i]._id == id) {
          temp[i].is_delete = false;
          setActiveQuantities([...activeQuantities, temp[i]]);
          setDeletedQuantities(
            deletedQuantities.filter(item => item._id !== id),
          );
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
    setButtonLoading(false);

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
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const handleSortDeleted = itemsData => {
    //if (itemsData.length <= 0) return;
    const temp = itemsData.filter(item => !item.is_delete);
    const temp2 = itemsData.filter(item => item.is_delete);

    setActiveQuantities(temp);
    setDeletedQuantities(temp2);
    setRenderKey(renderKey + 1);
  };

  useEffect(() => {
    handleSortDeleted(QuantityUnits);
    //console.log('calling handleSortDeleted');
  }, [QuantityUnits]);

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

  const handleUpdateList = unit => {
    console.log('AllQuantityUnits handleUpdateList unit: ', unit);
    let temp = [...originalQuantityUnits];
    let temp2 = [...QuantityUnits];

    for (let i in temp) {
      if (temp[i]._id == unit._id) {
        temp[i] = unit;
        setOriginalQuantityUnits(temp);
        break;
      }
    }

    for (let i in temp2) {
      if (temp2[i]._id == unit._id) {
        temp2[i] = unit;
        setQuantityUnits(temp2);
        handleSortDeleted(temp2);
        return;
      }
    }
    temp.push(unit);
    temp2.push(unit);

    setOriginalQuantityUnits(temp);
    setQuantityUnits(temp2);
    //handleSortDeleted(temp2);
  };

  return (
    <>
      <AddQuentityUnit
        addModal={addModal}
        closeModal={() => setAddModal(false)}
        handleUpdateList={handleUpdateList}
      />

      {/*   <UpdateQuantityUnit
        unit={unit}
        updateModal={updateModal}
        closeModal={() => setUpdateModal(false)}
        handleUpdateList={handleUpdateList}
      /> */}

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
        <View style={[s.header, ES.mt1]}>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            value={searchQuery}
            onChangeText={text => getItemsByName(text)}
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
          isLoading == false &&
          ((deleted == false && activeQuantities.length > 0) ||
            (deleted == true && deletedQuantities.length > 0)) && (
            <View style={[ES.w100, ES.fx1]} key={renderKey}>
              <FlatList
                removeClippedSubviews={false}
                data={deleted ? deletedQuantities : activeQuantities}
                contentContainerStyle={[s.list]}
                renderItem={({item, index}) => (
                  <QuantityUnitCard
                    item={item}
                    handleDeleteItem={handleDeleteItem}
                    handleRestoreItem={handleRestoreItem}
                    openModal={openModal}
                    handleUpdateList={handleUpdateList}
                    index={index}
                  />
                )}
                refreshing={isLoading}
                onRefresh={getQuantityUnits}
              />
            </View>
          )}
        <AddButton method={() => setAddModal(true)} />

        <View
          style={[
            isLoading == false &&
            ((deleted == false && activeQuantities.length <= 0) ||
              (deleted == true && deletedQuantities.length <= 0))
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
