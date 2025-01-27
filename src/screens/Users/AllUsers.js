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
import React, {useEffect, useState} from 'react';
import axiosClient from '../../../axiosClient';
import HeadingText from '../../Components/HeadingText';
import ES from '../../styles/ES';
import ItemCard from '../Items/components/ItemCard';
import {headerBackgroundColor, primaryColor} from '../../Constants/Colours';
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

  const dispatch = useDispatch();

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

      console.log('AllItems res: ', res);
      setItems(res.data.result);
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

  const handleDeleteUser = async id => {
    console.log('handleDeleteUser: ', id);

    try {
      const res = await axiosClient.delete(`/user/delete/${id}`);
      if (res) {
        showToast(res.data.message);
      }

      let temp = users;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = true;
        }
      }

      setUsers(temp);
      let temp2 = originalUsers;
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
    setModalVisible(false);
  };

  const handleRestoreUser = async id => {
    console.log('handleRestoreUser: ', id);

    try {
      const res = await axiosClient.put(`/user/restore/${id}`);
      if (res) {
        showToast(res.data.message);
      }

      let temp = users;
      for (let i in temp) {
        if (temp[i]._id === id) {
          temp[i].is_delete = false;
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

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearchFilter = text => {
    if (text.length === 0) {
      setItems(originalItems);
    }
    {
      const newData = originalItems.filter(item => {
        const itemData = item.item_name
          ? item.item_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setItems(newData);
    }
  };

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
    console.log('userData: ', userData);
    let temp = originalUsers;
    for (let i in temp) {
      if (temp[i]._id === userData._id) {
        temp[i] = userData;
        break;
      }
    }
    setOriginalUsers(temp);
    setUsers(temp);
    setRenderKey(renderKey + 1);
  };

  return (
    <>
      <AddUser
        addModal={addModal}
        closeModal={() => setAddModal(false)}
        handleAddUserToList={handleAddUserToList}
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

      <View style={[ES.fx1, ES.w100]}>
        <View style={[s.header, ES.mt1]}>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            onChangeText={text => getUsersByName(text)}
          />
        </View>

        {isLoading == false && users.length > 0 && (
          <KeyboardAvoidingComponent>
            <View style={[ES.w100, ES.fx1]} key={renderKey}>
              <FlatList
                data={users}
                contentContainerStyle={[s.list]}
                renderItem={({item}) => (
                  <UserCard
                    item={item}
                    handleDeleteUser={handleDeleteUser}
                    handleRestoreUser={handleRestoreUser}
                    openModal={openModal}
                    handleSetUpadateUserList={handleSetUpadateUserList}
                  />
                )}
                refreshing={isLoading}
                onRefresh={getUsers}
                maxToRenderPerBatch={20}
              />
            </View>
          </KeyboardAvoidingComponent>
        )}

        {/*   <AddButton method={() => navigation.navigate('newUser')} /> */}
        <AddButton method={() => setAddModal(true)} />

        <View
          style={[
            isLoading == false && users.length == 0 ? ES.dBlock : ES.dNone,
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

export default AllUsers;

const s = StyleSheet.create({
  header: StyleSheet.flatten([ES.px1, ES.flexRow, ES.centerItems, ES.w100]),

  textInput: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
    ES.w90,
    ES.px1,
    ES.f16,
  ]),
  list: StyleSheet.flatten([ES.px1, ES.gap2, ES.mt1, {paddingBottom: 100}]),
});
