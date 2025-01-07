import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosClient from '../../../axiosClient';
import HeadingText from '../../Components/HeadingText';
import ES from '../../styles/ES';
import ItemCard from '../../Components/ItemCard';
import {headerBackgroundColor, primaryColor} from '../../Constants/Colours';
import Loading from '../../Constants/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {addAllItems, addIAlltems} from '../../Redux/actions/itemActions';

const AllItems = () => {
  const reduxItems = useSelector(state => state.items);
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
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

  const handleDeleteItem = async id => {
    console.log('handleDeleteItem: ', id);

    try {
      const res = await axiosClient.delete(`/item/${id}`);
      if (res) {
        showToast(res.data.message);
      }

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
  };

  const handleRestoreItem = async id => {
    console.log('handleRestoreItem: ', id);

    try {
      const res = await axiosClient.put(`/item/restore/${id}`);

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
  };

  const getItems = async () => {
    console.log('getItems: ');
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

  return (
    <>
      <View style={[ES.fx1]}>
        <View style={[ES.py1]}>
          <HeadingText center>All Items</HeadingText>
        </View>

        <View style={[s.header]}>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            onChangeText={text => getItemsByName(text)}
          />
        </View>

        {isLoading == false && items.length > 0 && (
          <View style={[ES.w100, ES.fx1]}>
            <FlatList
              data={items}
              contentContainerStyle={[ES.px1, ES.gap2, ES.mt1, ES.pb5]}
              renderItem={({item}) => (
                <ItemCard
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                  handleRestoreItem={handleRestoreItem}
                />
              )}
              refreshing={isLoading}
              onRefresh={getItems}
              maxToRenderPerBatch={20}
            />
          </View>
        )}

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
});
