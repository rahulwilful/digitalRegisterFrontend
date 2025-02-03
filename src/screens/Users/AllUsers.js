import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Image,
  Dimensions,
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
import {allUsersIcon, noDataImage} from '../../Constants/imagesAndIcons';
import UserCard from './components/UserCard';
import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import AddButton from '../../Components/AddButton';
import FullModalComponent from '../../Components/FullModalComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toggleLogin} from '../../Redux/actions/action';
import AddUser from './components/AddUser';
import KeyboardAvoidingComponent from '../../Components/KeyboardAvoidingComponent';
import UpdateUser from './components/UpdateUser';
import {useFocusEffect} from '@react-navigation/native';

import debounce from 'lodash/debounce';
import RestoreButton from '../../Components/RestoreButton';

const AllUsers = ({navigation}) => {
  const reduxItems = useSelector(state => state.items);

  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState({});
  const [originalUsers, setOriginalUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);

  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userToDeleteRestore, setUserToDeleteRestore] = useState({});

  const [searchQuery, setSearchQuery] = useState('');

  const [deleted, setDeleted] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [deletedUsers, setDeleteUsers] = useState([]);

  const [buttonLoading, setButtonLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setDeleted(false);
      setSearchQuery('');
      getUsers();
    }, []),
  );

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const getUsersByName = async name => {
    setIsLoading(true);

    let form = {
      name: name,
    };
    console.log('name: ', form);
    setSearchQuery(name);

    if (name.length === 0) {
      setUsers(originalUsers);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axiosClient.post(`/user/get/by/name`, form);

      //console.log('AllUsers res: ', res);
      setUsers(res.data.result);
    } catch (error) {
      if (error.response.data.message) {
        showToast(error.response.data.message);
      } else {
        showToast('Something went wrong');
      }
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const debouncedGetUsersByName = debounce(getUsersByName, 700);

  const handleDebounce = async text => {
    console.log('text: ', text);

    setSearchQuery(text);
    debouncedGetUsersByName(text);
  };

  const handleDeleteUser = async id => {
    console.log('handleDeleteUser: ', id);
    setButtonLoading(true);
    try {
      const res = await axiosClient.delete(`/user/delete/${id}`);
      if (res) {
        showToast(res.data.message);
      }

      let temp = users;
      let temp2 = originalUsers;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = true;
          setDeleteUsers([...deletedUsers, temp[i]]);
          setActiveUsers(activeUsers.filter(user => user.is_delete === false));
        }
      }

      setUsers(temp);
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = true;
        }
      }
      setOriginalUsers(temp2);
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

  const handleRestoreUser = async id => {
    console.log('handleRestoreUser: ', id);
    setButtonLoading(true);
    try {
      const res = await axiosClient.put(`/user/restore/${id}`);
      if (res) {
        showToast(res.data.message);
      }

      let temp = users;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = false;
          setActiveUsers([...activeUsers, temp[i]]);
          setDeleteUsers(deletedUsers.filter(user => user.is_delete === true));
        }
      }

      setUsers(temp);
      let temp2 = originalUsers;
      for (let i in temp2) {
        if (temp2[i]._id === id) {
          temp2[i].is_delete = false;
        }
      }
      setOriginalUsers(temp2);
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

  const getUsers = async () => {
    console.log('getUsers: ');
    setIsLoading(true);

    try {
      const res = await axiosClient.get(`/user/getall`);

      //console.log('res: ', res.data.result);
      setUsers(res.data.result);
      setOriginalUsers(res.data.result);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const handleSortDeleted = itemsData => {
    //console.log('itemsData: ', itemsData);
    //if (itemsData.length <= 0) return;
    const temp = itemsData.filter(item => !item.is_delete);
    const temp2 = itemsData.filter(item => item.is_delete);

    setActiveUsers(temp);
    setDeleteUsers(temp2);
    setRenderKey(renderKey + 1);
  };

  useEffect(() => {
    handleSortDeleted(users);
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = user => {
    setUserToDeleteRestore(user);
    setModalVisible(true);
  };

  const handleAddUserToList = user => {
    let temp = originalUsers;
    temp.push(user);
    setOriginalUsers(temp);
    setUsers(temp);
  };

  const handleSetUpadateUserList = userData => {
    console.log('handleSetUpadateUserList userData: ', userData);
    let temp = originalUsers;
    let temp2 = users;
    for (let i in temp) {
      if (temp[i]._id === userData._id) {
        temp[i] = userData;
        setOriginalUsers(temp);
        break;
      }
    }
    for (let i in temp2) {
      if (temp2[i]._id === userData._id) {
        temp2[i] = userData;
        setUsers(temp2);
        handleSortDeleted(temp2);
        return;
      }
    }
    setOriginalUsers([...originalUsers, userData]);
    setUsers([...users, userData]);
    setActiveUsers([...activeUsers, userData]);
    setRenderKey(renderKey + 1);
  };

  const handleRestoreFunction = () => {
    setSearchQuery('');
    getUsers();
  };

  return (
    <>
      <AddUser
        addModal={addModal}
        closeModal={() => setAddModal(false)}
        handleSetUpadateUserList={handleSetUpadateUserList}
      />

      <ModalComponent
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        height={'20%'}>
        <View style={[ES.justifyContentSpaceEvenly, ES.fx1, ES.gap1]}>
          <View style={[ES.centerItems]}>
            <HeadingText>
              <Text>{userToDeleteRestore.name}</Text>
            </HeadingText>
          </View>
          <View style={[ES.centerItems]}>
            <Btn
              buttonLoading={buttonLoading}
              width={'50%'}
              method={() =>
                userToDeleteRestore.is_delete
                  ? handleRestoreUser(userToDeleteRestore._id)
                  : handleDeleteUser(userToDeleteRestore._id)
              }>
              <Text>
                {userToDeleteRestore.is_delete ? 'Restore' : 'Delete'}
              </Text>
            </Btn>
          </View>
        </View>
      </ModalComponent>

      <View style={[ES.fx1]}>
        <View style={[s.header, ES.mt1]}>
          <TextInput  
            style={[s.textInput]}
            value={searchQuery}
            placeholder="Search"
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
          ((deleted == false && activeUsers.length > 0) ||
            (deleted == true && deletedUsers.length > 0)) && (
            <View style={[ES.w100, ES.fx1]} key={renderKey}>
              <FlatList
                removeClippedSubviews={false}
                data={deleted ? deletedUsers : activeUsers}
                contentContainerStyle={[s.list]}
                renderItem={({item, index}) => (
                  <UserCard
                    item={item}
                    handleDeleteUser={handleDeleteUser}
                    handleRestoreUser={handleRestoreUser}
                    openModal={openModal}
                    handleSetUpadateUserList={handleSetUpadateUserList}
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
            ((deleted == false && activeUsers.length <= 0) ||
              (deleted == true && deletedUsers.length <= 0))
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

export default AllUsers;

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
  list: StyleSheet.flatten([ES.px1, ES.gap2, ES.mt1, {paddingBottom: 140}]),
});
