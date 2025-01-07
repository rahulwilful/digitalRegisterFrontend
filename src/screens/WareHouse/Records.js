import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Modal,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  backgroundColor,
  headerBackgroundColor,
  primaryTextColor,
} from '../../Constants/Colours';
import ES from '../../styles/ES';
import axiosClient from '../../../axiosClient';
import RecordCard from '../../Components/RecordCard';
import DatePicker from 'react-native-date-picker';
import {noDataImage} from '../../Constants/imagesAndIcons';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../Constants/Loading';
import {setHeader} from '../../Redux/actions/action';

const renderLoader = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} color={headerBackgroundColor} />
    </View>
  );
};


const Records = ({route}) => {
  const dispatch = useDispatch();

  const [records, setRecords] = useState([]);

  const [originalRecords, setOriginalRecords] = useState([]);
  const [location, setLocation] = useState('');
  const [renderKey, setRenderKey] = useState(0);
  const [isLoading, setIsLoadning] = useState(true);

  const [pickupPersones, setPickupPersones] = useState([]);
  const [wareHouseAdmins, setWareHouseAdmins] = useState([]);

  const [adminModal, setAdminModal] = useState(false);
  const [pickupModal, setPickupModal] = useState(false);

  const [wareHouseAdmin, setWareHouseAdmin] = useState('');
  const [pickupPerson, setPickupPerson] = useState('');

  const [fromDate, setFromDate] = useState(
    new Date('2024-01-01T00:00:00.000Z'),
  );
  const [toDate, setToDate] = useState(new Date());
  const [isFromDatePickerOpen, setIsFromDatePickerOpen] = useState(false);
  const [isToDatePickerOpen, setIsToDatePickerOpen] = useState(false);

  const [footerLoader, setFooterLoader] = useState(false);

  const locationId = route.params.locationId;

  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('rout.params.locationId', route.params.locationId);
  }, [route]);

  useEffect(() => {
    if (user != undefined && user != null && user != 'undefined') {
      console.log('Register user: ', user.storage_location_id);
      getRecords();
    }
    dispatch(setHeader('Records'));
  }, [user]);

  const handleLoadMoreRecords = async item => {
    setFooterLoader(true);
    let lastDate = records[records.length - 1].createdAt;
    console.log('Records handleLoadMoreRecords: ', lastDate);

    try {
      const recordRes = await axiosClient
        .get(`/register/get/by/location/${locationId}/and/${lastDate}`)
        .catch(err => {
          setFooterLoader(false);
        });
      /* console.log(
        'Register Log recordRes : ',
        recordRes.data.result[0].warehouse_admin.name,
      ); */
      setRecords([...records, ...recordRes.data.result]);
      setOriginalRecords([...originalRecords, ...recordRes.data.result]);
      setLocation(recordRes.data.result[0].storage_location_id.name);
    } catch (error) {
      console.log('error', error);
      setFooterLoader(false);
    }

    return;
  };

  const getRecords = async () => {
    setIsLoadning(true);
    try {
      const recordRes = await axiosClient.get(
        `/register/get/by/location/${locationId}`,
      );
      /* console.log(
        'Register Log recordRes : ',
        recordRes.data.result[0].warehouse_admin.name,
      ); */
      setRecords(recordRes.data.result);
      setOriginalRecords(recordRes.data.result);
      setLocation(recordRes.data.result[0].storage_location_id.name);
    } catch (error) {
      console.log('error', error);
    }

    try {
      const pickupRes = await axiosClient.get(
        `/register/get/pickup-persons-by-storage-location/${locationId}`,
      );

      //console.log("pickupRes: ",pickupRes.data.result)

      let temp = pickupRes.data.result;
      let temp2 = [];

      for (let i in temp) {
        temp2.push({_id: temp[i]._id, name: temp[i].name, selected: false});
      }

      setPickupPersones(temp2);
    } catch (error) {
      console.log('error', error);
    }

    try {
      const adminsRes = await axiosClient.get(
        `/register/get/warehouse-admins-by-storage-location/${locationId}`,
      );

      //console.log("adminsRes: ",adminsRes.data.result)

      let temp = adminsRes.data.result;
      let temp2 = [];

      for (let i in temp) {
        temp2.push({_id: temp[i]._id, name: temp[i].name, selected: false});
      }

      setWareHouseAdmins(temp2);
    } catch (error) {
      console.log('error', error);
    }
    setIsLoadning(false);
  };

  useEffect(() => {
    getRecords();
  }, []);

  const handleSearchItems = searchedValue => {
    setIsLoadning(true);
    if (searchedValue.trim() === '') {
      setRecords(originalRecords);
      setIsLoadning(false);
      return;
    }

    const filteredRecords = [];
    for (let i = 0; i < originalRecords.length; i++) {
      const record = originalRecords[i];
      const matchingItems = [];

      for (let j = 0; j < record.item_list.length; j++) {
        const item = record.item_list[j];
        if (
          item.item_id.item_name
            .toLowerCase()
            .includes(searchedValue.toLowerCase())
        ) {
          matchingItems.push(item);
        }
      }

      if (matchingItems.length > 0) {
        filteredRecords.push({
          ...record,
          item_list: matchingItems,
        });
      }
    }

    setRecords(filteredRecords);
    setRenderKey(renderKey + 1);
    setIsLoadning(false);
  };

  const selectPickupPerson = id => {
    let temp = [...pickupPersones];
    let flag = 0;
    for (let i in temp) {
      if (temp[i]._id == id) {
        temp[i].selected = true;
        setPickupPerson(temp[i]);
        flag = 1;
      } else {
        temp[i].selected = false;
      }
    }
    if (flag == 0) setPickupPerson('');
    setPickupPersones(temp);
    setPickupModal(false);
  };

  const selectWareHouseAdmin = id => {
    let temp = [...wareHouseAdmins];
    let flag = 0;
    for (let i in temp) {
      if (temp[i]._id == id) {
        temp[i].selected = true;
        flag = 1;
        setWareHouseAdmin(temp[i]);
      } else {
        temp[i].selected = false;
      }
    }

    if (flag == 0) setWareHouseAdmin('');
    setWareHouseAdmins(temp);
    setAdminModal(false);
  };

  const getSortedRecords = async () => {
    setIsLoadning(true);
    console.log('fromDate: ', fromDate, 'toDate: ', toDate);
    console.log(
      'pickupPerson: ',
      pickupPerson,
      'wareHouseAdmin: ',
      wareHouseAdmin,
    );

    try {
      const sortedRes = await axiosClient.post(`/register/get/sorted/records`, {
        storage_location_id: locationId,
        warehouse_admin: wareHouseAdmin._id || '',
        pickup_person: pickupPerson._id || '',
        fromDate: '',
        toDate: '',
      });
      console.log('sortedRes: ', sortedRes.data.result);
      if (sortedRes.data.result.length > 0) {
        setRecords(sortedRes.data.result);
        setOriginalRecords(sortedRes.data.result);
      }
    } catch (error) {
      console.log('error', error);
      if (error.response?.status === 404) {
        ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
        setRecords([]);
        setOriginalRecords([]);
      } else {
        ToastAndroid.show('Error while sorting', ToastAndroid.SHORT);
      }
    }
    setIsLoadning(false);
  };

  return (
    <>
      <Modal
        visible={adminModal}
        onRequestClose={() => setAdminModal(false)}
        style={[]}
        animationType="slide"
        presentationStyle="formSheet">
        <ScrollView style={[ES.py1]}>
          <View style={[]}>
            <Text style={[ES.modalHeadingText, ES.textCenter, ES.mb2]}>
              Select warehouse admin
            </Text>

            <View style={[s.modalListContainer]}>
              <Text style={[ES.textDark, ES.f16, ES.fw500]}>None</Text>
              <TouchableOpacity
                onPress={() => selectWareHouseAdmin('none')}
                style={[s.radio, ES.bgLight]}></TouchableOpacity>
            </View>
            <FlatList
              data={wareHouseAdmins}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={[]}
              renderItem={({item}) => (
                <View style={[s.modalListContainer]}>
                  <Text style={[ES.textDark, ES.f16, ES.fw500]}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => selectWareHouseAdmin(item._id)}
                    style={[
                      s.radio,
                      item.selected ? ES.bgPrimary : ES.bgLight,
                    ]}></TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </Modal>

      <Modal
        visible={pickupModal}
        style={[]}
        onRequestClose={() => setPickupModal(false)}
        animationType="slide"
        presentationStyle="pageSheet">
        <ScrollView style={[ES.py1]}>
          <View style={[]}>
            <Text style={[ES.modalHeadingText, ES.textCenter, ES.mb2]}>
              Select Pickup Person
            </Text>

            <View style={[s.modalListContainer]}>
              <Text style={[ES.textDark, ES.f16, ES.fw500]}>None</Text>
              <TouchableOpacity
                onPress={() => selectPickupPerson('none')}
                style={[s.radio, ES.bgLight]}></TouchableOpacity>
            </View>
            <FlatList
              data={pickupPersones}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={[]}
              renderItem={({item}) => (
                <View style={[s.modalListContainer]}>
                  <Text style={[ES.textDark, ES.f16, ES.fw500]}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => selectPickupPerson(item._id)}
                    style={[
                      s.radio,
                      item.selected ? ES.bgPrimary : ES.bgLight,
                    ]}></TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </Modal>

      <View style={[s.header]}>
        <View style={[s.searchContainer]}>
          <TextInput
            style={[s.textInput, ES.textDanger]}
            placeholder="Search"
            onChangeText={text => handleSearchItems(text)}
          />
        </View>

        <View style={[s.sortContainer]}>
          <TouchableOpacity
            onPress={() => setAdminModal(true)}
            style={[s.sortButton]}>
            <Text style={[s.buttonText]}>
              {wareHouseAdmin == '' ? 'Select Manager' : wareHouseAdmin.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPickupModal(true)}
            style={[s.sortButton]}>
            <Text style={[s.buttonText]}>
              {pickupPerson == '' ? 'Select Pickup Boy' : pickupPerson.name}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[s.inputContainer]}>
          <TouchableOpacity
            style={[s.dateButton]}
            onPress={() => setIsFromDatePickerOpen(true)}>
            <Text style={[s.buttonText]}>
              From {fromDate ? fromDate.toLocaleDateString() : 'From Date'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsToDatePickerOpen(true)}
            style={[s.dateButton]}>
            <Text style={[s.buttonText]}>
              To {toDate ? toDate.toLocaleDateString() : 'To Date'}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={isFromDatePickerOpen}
          date={fromDate}
          mode="date"
          onConfirm={date => {
            setIsFromDatePickerOpen(false);
            setFromDate(date);
          }}
          onCancel={() => {
            setIsFromDatePickerOpen(false);
          }}
        />

        <DatePicker
          modal
          open={isToDatePickerOpen}
          date={toDate}
          mode="date"
          onConfirm={date => {
            setIsToDatePickerOpen(false);
            setToDate(date);
          }}
          onCancel={() => {
            setIsToDatePickerOpen(false);
          }}
        />

        <View style={[ES.w100, ES.alignItemsCenter]}>
          <TouchableOpacity
            onPress={() => getSortedRecords()}
            style={[s.searchButton]}>
            <Text style={[s.searchText]}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          ES.w100,
          isLoading == true ? ES.dNone : ES.dBlock,
          s.contentContainer,
        ]}>
        <View style={[ES.w100, {backgroundColor: '#efefef'}]}>
          <View style={[ES.mt1]}>
            <Text style={[ES.headingText, ES.textCenter]}>{location}</Text>
          </View>

          <View
            style={[
              records.length > 0 ? ES.dBlock : ES.dNone,
              s.recordsContainer,
            ]}
            key={renderKey}>
            <FlatList
              data={records}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={[s.flatList]}
              renderItem={({item}) => <RecordCard item={item} />}
              onEndReached={handleLoadMoreRecords}
              onEndReachedThreshold={0.3}
              maxToRenderPerBatch={20}
              ListFooterComponent={() => {
                return (
                  <View style={[footerLoader ? ES.dBlock : ES.dNone]}>
                    <ActivityIndicator
                      size={'large'}
                      color={headerBackgroundColor}
                    />
                  </View>
                );
              }}
            />
          </View>

          <View
            style={[
              records.length == 0 ? ES.dBlock : ES.dNone,
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
        </View>
      </View>

      <View style={[isLoading ? ES.dBlock : ES.dNone, ES.fx1]}>
        <Loading />
      </View>
    </>
  );
};

export default Records;

const s = StyleSheet.create({
  conatainer: StyleSheet.flatten([
    ES.fx1,
    ES.centerItems,
    ES.w100,

    {backgroundColor: backgroundColor},
  ]),

  header: StyleSheet.flatten([
    ES.py2,
    ES.w100,
    ES.justifyContentSpaceAround,
    ES.gap2,
    ES.shadow10,
    {
      backgroundColor: headerBackgroundColor,
      borderBottomLeftRadius: 20, // Apply radius to bottom-left corner
      borderBottomRightRadius: 20,
    },
  ]),
  contentContainer: StyleSheet.flatten([{flex: 0.85}]),
  searchContainer: StyleSheet.flatten([
    ES.fx0,
    ES.gap4,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
  ]),

  textInput: StyleSheet.flatten([
    ES.px1,
    ES.py1,
    ES.bRadius8,
    ES.bgWhite,
    ES.fx1,
    ES.bgLight,
  ]),

  searchButton: StyleSheet.flatten([
    ES.bgLight,
    ES.shadow5,
    ES.bRadius5,
    ES.hs40,
    ES.ws100,
    ES.fx0,
    ES.centerItems,
  ]),

  searchText: StyleSheet.flatten([
    ES.textCenter,
    ES.f16,
    ES.fw700,
    ES.capitalize,
    {color: primaryTextColor},
  ]),

  flatList: StyleSheet.flatten([
    ES.gap2,
    ES.py2,
    ES.w100,
    ES.fx0,
    ES.alignItemsCenter,
  ]),
  recordsContainer: StyleSheet.flatten([ES.fx0, ES.gap2, ES.px08, ,]),

  subInfo: StyleSheet.flatten([
    ES.f18,
    ES.fw400,
    ES.capitalize,
    ES.textSecondary,
  ]),
  modalListContainer: StyleSheet.flatten([
    ES.fx0,
    ES.flexRow,
    ES.justifyContentSpaceBetween,
    ES.px2,
    ES.alignItemsCenter,
    ES.mt06,
  ]),
  radio: StyleSheet.flatten([
    ES.hs15,
    ES.ws15,
    ES.tempBorder,
    {borderRadius: '50%'},
  ]),
  sortButton: StyleSheet.flatten([
    ES.w48,
    ES.py08,
    ES.bgLight,
    ES.bRadius8,
    ES.shadow5,
  ]),
  dateButton: StyleSheet.flatten([
    ES.w48,
    ES.py08,
    ES.bgLight,
    ES.bRadius8,
    ES.shadow5,
  ]),
  sortContainer: StyleSheet.flatten([
    ES.px1,
    ES.w100,
    ES.fx0,
    ES.flexRow,
    ES.gap2,
    ES.justifyContentSpaceBetween,
  ]),
  inputContainer: StyleSheet.flatten([
    ES.px1,
    ES.w100,
    ES.fx0,
    ES.flexRow,
    ES.gap2,
    ES.justifyContentSpaceBetween,
  ]),

  buttonText: StyleSheet.flatten([
    ES.textCenter,
    ES.capitalize,
    ES.textDark,
    ES.fw600,
    ES.f14,
  ]),
});
