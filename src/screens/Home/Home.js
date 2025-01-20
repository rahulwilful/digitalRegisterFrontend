import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  backgroundColor,
  headerBackgroundColor,
  primaryTextColor,
} from '../../Constants/Colours';
import ES from '../../styles/ES';
import axiosClient from '../../../axiosClient';
import {
  allItemsIcon,
  allLocationsIcon,
  allRecordsIcon,
  allUsersIcon,
  image,
  kgIcon,
  locationIcon,
  locationOrangeIcon,
  newItemIcon,
  newRecordIcon,
  newUserIcon,
  wareHouseIcon,
  wareHouseIcon3,
  wareHouseNoBgIcon,
} from '../../Constants/imagesAndIcons';
import {useDispatch} from 'react-redux';
import {setHeader} from '../../Redux/actions/action';
import {addUser} from '../../Redux/actions/userActions';
import Card from '../../Components/Card';
import Loading from '../../Constants/Loading';

const Home = ({navigation}) => {
  const [locations, setLocations] = useState([]);
  const [orginalLocations, setOrginalLocations] = useState([]);
  const [displaySuperAdminOptions, setDisplaySuperAdminOptions] =
    useState(false);
  const [displayAdminOptions, setDisplayAdminOptions] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  dispatch(setHeader('Home'));

  const getCurrent = async () => {
    setLoading(true);
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      //console.log('App currentRes: ', currentRes.data.result);
      if (currentRes.data.result.role_type.value === 'super_admin') {
        setDisplaySuperAdminOptions(true);
        setDisplayAdminOptions(true);
      }
      if (currentRes.data.result.role_type.value === 'admin') {
        setDisplayAdminOptions(true);
      }
      dispatch(addUser(currentRes.data.result));
      setCurrentUser(currentRes.data.result);
    } catch (error) {
      console.log('App error: ', error);
    }
    setLoading(false);
  };

  const getLocations = async () => {
    try {
      const res = await axiosClient.get(`/storage/location/getall`);
      //console.log('Home Log: ', res.data.result);
      setLocations(res.data.result);
      setOrginalLocations(res.data.result);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCurrent();
    getLocations();
  }, []);

  const handleSearchFilter = text => {
    if (text.length === 0) {
      setLocations(orginalLocations);
    }
    {
      const newData = orginalLocations.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setLocations(newData);
    }
  };

  return (
    <View style={[ES.fx1]}>
      <ScrollView style={[ES.w100, loading ? ES.dNone : ES.dBlock]}>
        <View style={[{backgroundColor: '#efefef'}]}>
          <View
            style={[
              locations.length > 0 ? ES.dBlock : ES.dNone,
              ES.fx0,
              ES.gap2,
              ES.py2,
            ]}>
            <TouchableOpacity
              onPress={() => {
                displaySuperAdminOptions
                  ? navigation.navigate('stackWareHouses')
                  : navigation.navigate('stackRecord', {
                      locationId: currentUser.storage_location_id._id,
                    });
              }}>
              <Card image={allRecordsIcon}>All Records</Card>
            </TouchableOpacity>

            {displayAdminOptions && (
              <View style={[ES.w100, ES.fx0, ES.gap2]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('stackAddRecord')}>
                  <Card image={newRecordIcon}>New Record</Card>
                </TouchableOpacity>
              </View>
            )}

            {displaySuperAdminOptions && (
              <View style={[ES.w100, ES.fx0, ES.gap2]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('stackAllQuantityUnits')}>
                  <Card image={kgIcon}>All Quantity Units</Card>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={[loading ? ES.dBlock : ES.dNone, ES.fx1]}>
        <Loading />
      </View>
    </View>
  );
};

export default Home;

const s = StyleSheet.create({
  conatainer: StyleSheet.flatten([
    ES.centerItems,
    ES.w100,
    ES.tempBorder,
    {backgroundColor: backgroundColor},
  ]),

  header: StyleSheet.flatten([
    ES.fx0,
    ES.gap4,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.w100,

    {backgroundColor: headerBackgroundColor},
    {flex: 0.1},
    ES.shadow10,
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
    ES.textPrimary,
  ]),
  flatList: StyleSheet.flatten([
    ES.gap2,
    ES.py2,
    ES.w100,
    ES.fx0,
    ES.alignItemsCenter,
  ]),
  listContainer: StyleSheet.flatten([
    ES.bRadius12,
    ES.shadow5,
    ES.bgLight,
    ES.flexRow,
    ES.pe1,
    ES.overflowHidden,

    ES.gap2,
    ES.w100,
  ]),
  subInfo: StyleSheet.flatten([
    ES.f17,
    ES.fw400,
    ES.capitalize,
    ES.textSecondary,
  ]),
});

{
  /*  <FlatList
            data={locations}
            keyExtractor={(item, index) => index.toString()} // Add this
            contentContainerStyle={[s.flatList]}
            renderItem={({item}) => (
              <View style={[ES.w95]}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('stackRecord', {locationId: item._id})
                  }
                  style={[s.listContainer]}>
                  <View style={[ES.h100, ES.ws90, ES.overflowHidden]}>
                    <Image source={wareHouseIcon} style={[ES.hs90, ES.ws90]} />
                  </View>

                  <View style={[ES.fx1, ES.py06]}>
                    <Text
                      style={[
                        ES.f20,
                        ES.fw500,
                        ES.capitalize,
                        ES.fx1,
                        {color: primaryTextColor},
                      ]}>
                      {item.name}
                    </Text>
                    <View style={[ES.fx1, ES.flexRow, ES.gap1]}>
                      <Text style={[s.subInfo]}>State: {item.state}</Text>

                      <Text style={[s.subInfo]}>City: {item.city}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          /> */
}
