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
  blackButton,
  bluebutton,
  headerBackgroundColor,
  primaryColor,
  primaryTextColor,
  whiteButton,
} from '../../Constants/Colours';
import ES from '../../styles/ES';
import axiosClient from '../../../axiosClient';
import RecordCard from '../../Components/RecordCard';
import DatePicker from 'react-native-date-picker';
import {
  filterIcon,
  noDataImage,
  resetIcon,
} from '../../Constants/imagesAndIcons';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../Constants/Loading';
import {setHeader} from '../../Redux/actions/action';
import HeadingText from '../../Components/HeadingText';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalComponent from '../../Components/ModalComponent';
import Btn from '../../Components/Btn';
import NormalText from '../../Components/NormalText';

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
  const [pickupModalLoading, setPickupModalLoading] = useState(false);
  const [adminModalLoading, setAdminModalLoading] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const [wareHouseAdmin, setWareHouseAdmin] = useState('');
  const [pickupPerson, setPickupPerson] = useState('');

  const [fromDate, setFromDate] = useState(
    new Date('2024-01-01T00:00:00.000Z'),
  );
  const [toDate, setToDate] = useState(new Date());
  const [isFromDatePickerOpen, setIsFromDatePickerOpen] = useState(false);
  const [isToDatePickerOpen, setIsToDatePickerOpen] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

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

  const handleLoadMoreRecords = async () => {
    if (isSorting || pickupPerson != '' || wareHouseAdmin != '') return;
    setFooterLoader(true);
    let lastDate = records[records.length - 1].createdAt;
    console.log('Records handleLoadMoreRecords: ', lastDate);

    try {
      const recordRes = await axiosClient
        .get(`/register/get/by/location/${locationId}/and/${lastDate}`)
        .catch(err => {
          setFooterLoader(false);
        });

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
    setPickupModalLoading(true);
    setAdminModalLoading(true);
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
    setPickupModalLoading(false);

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

    setAdminModalLoading(false);
  };

  useEffect(() => {
    getRecords();
  }, []);

  const getSortedRecords = async searchedValue => {
    setIsLoadning(true);
    setFilterModal(false);
    setIsSorting(true);

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
        warehouse_admin: wareHouseAdmin?._id || '',
        pickup_person: pickupPerson?._id || '',
        fromDate: fromDate,
        toDate: toDate,
        item_name: searchedValue || '',
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
  useEffect(() => {
    console.log('pickupPerson: ', pickupPerson);
  }, [pickupPerson]);

  const handleSetPickupPerson = item => {
    console.log('sampleFunction', item);
    setPickupPerson(item);
    setPickupModal(false);
  };

  const handleSetWareHouseAdmin = item => {
    console.log('handleSetWareHouseAdmin', item);

    setWareHouseAdmin(item);
    setAdminModal(false);
  };

  const handleResetFilters = () => {
    setIsSorting(false);
    setPickupPerson('');
    setWareHouseAdmin('');
    setFromDate(new Date('2024-01-01T00:00:00.000Z'));
    setToDate(new Date());

    getRecords();
    setFilterModal(false);
  };

  return (
    <>
      <ModalComponent
        height={'70%'}
        isModalVisible={pickupModal}
        closeModal={() => setPickupModal(false)}>
        <View style={[ES.fx1, ES.py2]}>
          <View style={[ES.fx1, pickupModalLoading ? ES.dNone : null]}>
            <View style={[ES.fx1, s.modalListContainer]}>
              <Btn
                method={() => handleSetPickupPerson('')}
                width={'95%'}
                bgColor={whiteButton}
                color={primaryTextColor}>
                <Text> None</Text>
              </Btn>
            </View>
            <FlatList
              data={pickupPersones}
              contentContainerStyle={[ES.pb1, ES.w100]}
              renderItem={({item}) => (
                <View style={[s.modalListContainer]}>
                  {pickupPerson._id != item._id ? (
                    <Btn
                      method={() => handleSetPickupPerson(item)}
                      width={'95%'}
                      bgColor={whiteButton}
                      color={primaryTextColor}>
                      <Text> {item.name.slice(0, 9)}</Text>
                    </Btn>
                  ) : (
                    <Btn width={'95%'}>
                      <Text> {item.name.slice(0, 9)} </Text>
                    </Btn>
                  )}
                </View>
              )}
            />
          </View>
          <View style={[ES.fx1, pickupModalLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </ModalComponent>

      <ModalComponent
        height={'70%'}
        isModalVisible={adminModal}
        closeModal={() => setAdminModal(false)}>
        <View style={[ES.fx1, ES.py2]}>
          <View style={[ES.fx1, adminModalLoading ? ES.dNone : null]}>
            <View style={[ES.fx1, s.modalListContainer]}>
              <Btn
                method={() => handleSetWareHouseAdmin('')}
                width={'95%'}
                bgColor={whiteButton}
                color={primaryTextColor}>
                <Text> None</Text>
              </Btn>
            </View>
            <FlatList
              data={wareHouseAdmins}
              contentContainerStyle={[ES.pb1, ES.w100]}
              renderItem={({item}) => (
                <View style={[s.modalListContainer]}>
                  {wareHouseAdmin._id != item._id ? (
                    <Btn
                      method={() => handleSetWareHouseAdmin(item)}
                      width={'95%'}
                      bgColor={whiteButton}
                      color={primaryTextColor}>
                      <Text> {item.name.slice(0, 9)}</Text>
                    </Btn>
                  ) : (
                    <Btn width={'95%'}>
                      <Text> {item.name.slice(0, 9)} </Text>
                    </Btn>
                  )}
                </View>
              )}
            />
          </View>
          <View style={[ES.fx1, adminModalLoading ? null : ES.dNone]}>
            <Loading />
          </View>
        </View>
      </ModalComponent>

      <ModalComponent
        isModalVisible={filterModal}
        closeModal={() => setFilterModal(false)}
        height={'40%'}>
        <View
          style={[ES.fx1, ES.justifyContentSpaceEvenly, ES.alignItemsCenter]}>
          <Btn
            width={'85%'}
            method={() => {
              setPickupModal(true);
            }}>
            <Text>
              {pickupPerson == '' ? 'Select Pickup Boy' : pickupPerson.name}
            </Text>
          </Btn>

          <Btn
            width={'85%'}
            method={() => {
              setAdminModal(true);
            }}>
            <Text>
              {wareHouseAdmin == '' ? 'Select Manager' : wareHouseAdmin.name}
            </Text>
          </Btn>

          <Btn width={'85%'} method={() => setIsFromDatePickerOpen(true)}>
            <Text>
              From {fromDate ? fromDate.toLocaleDateString() : 'From Date'}
            </Text>
          </Btn>
          <Btn method={() => setIsToDatePickerOpen(true)} width={'85%'}>
            <Text>To {toDate ? toDate.toLocaleDateString() : 'To Date'}</Text>
          </Btn>
          <View style={[ES.w85, ES.flexRow, ES.justifyContentSpaceBetween]}>
            <Btn
              method={() => getSortedRecords()}
              bgColor={blackButton}
              width={'70%'}>
              <Text>Search</Text>
            </Btn>
            <Btn
              method={() => handleResetFilters()}
              bgColor={bluebutton}
              width={'25%'}
              px={1}>
              <View>
                <Image
                  source={resetIcon}
                  style={[ES.hs27, ES.objectFitContain]}
                />
              </View>
            </Btn>
          </View>
        </View>
      </ModalComponent>

      <View style={[s.header]}>
        <View style={[s.searchContainer]}>
          <TextInput
            style={[s.textInput, ES.fx1]}
            placeholder="Search"
            onChangeText={text => getSortedRecords(text)}
          />
          <TouchableOpacity onPress={() => setFilterModal(true)}>
            <Image
              source={filterIcon}
              style={[ES.hs50, ES.ws50, ES.objectFitContain]}
            />
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
      </View>

      <View
        style={[
          ES.w100,
          isLoading == true ? ES.dNone : ES.dBlock,
          s.contentContainer,
        ]}
        key={isLoading}>
        <View style={[ES.w100, {backgroundColor: '#efefef'}]}>
          <View style={[ES.mt1, ES.centerItems]}>
            <HeadingText style={[ES.headingText, ES.textCenter]}>
              <Text style={[ES.capitalize]}>{location}</Text>
            </HeadingText>
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
              onEndReached={
                !isSorting && records.length >= 10
                  ? handleLoadMoreRecords
                  : null
              }
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
              ES.h100,
              ES.gap2,
            ]}
            key={records}>
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
      /* borderBottomLeftRadius: 20, 
      borderBottomRightRadius: 20, */
    },
  ]),
  contentContainer: StyleSheet.flatten([{flex: 0.85}]),
  searchContainer: StyleSheet.flatten([
    ES.fx0,
    ES.gap1,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
  ]),
  input: StyleSheet.flatten([
    {borderBottomWidth: 1, borderColor: primaryColor, borderRadius: 5},
    ES.w99,
    ES.px1,
    ES.f16,
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
  modalListContainer: StyleSheet.flatten([ES.fx0, ES.px2, ES.mt06]),
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
