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
  backArrowIcon,
  image,
  locationIcon,
  wareHouseIcon,
  wareHouseIcon4,
} from '../../Constants/imagesAndIcons';
import {useDispatch} from 'react-redux';
import {setHeader} from '../../Redux/actions/action';
import {addUser} from '../../Redux/actions/userActions';

const WareHouses = ({navigation}) => {
  const [locations, setLocations] = useState([]);
  const [orginalLocations, setOrginalLocations] = useState([]);
  const dispatch = useDispatch();
  dispatch(setHeader('Home'));

  const getCurrent = async () => {
    try {
      const currentRes = await axiosClient.get('/user/getcurrentuser');
      //console.log('App currentRes: ', currentRes.data.result);
      dispatch(addUser(currentRes.data.result));
    } catch (error) {
      console.log('App error: ', error);
    }
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
    } else {
      const newData = orginalLocations.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : '';
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setLocations(newData);
    }
  };

  return (
    <ScrollView style={[ES.w100]}>
      <View style={[ES.minScreenHeight, {backgroundColor: '#efefef'}]}>
        <View style={[s.header]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={backArrowIcon}
              style={[ES.hs17, ES.ws17, ES.objectFitContain]}
            />
          </TouchableOpacity>
          <TextInput
            style={[s.textInput]}
            placeholder="Search"
            onChangeText={text => handleSearchFilter(text)}
          />
        </View>

        <View
          style={[
            locations.length > 0 ? ES.dBlock : ES.dNone,
            ES.fx0,
            ES.gap2,
          ]}>
          <FlatList
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
                  <View
                    style={[
                      ES.hs58,
                      ES.ws52,
                      ES.overflowHidden,

                      ES.fx0,
                      ES.centerItems,
                    ]}>
                    <Image source={wareHouseIcon4} style={[ES.hs50, ES.ws50]} />
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
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WareHouses;

const s = StyleSheet.create({
  conatainer: StyleSheet.flatten([
    ES.screenHeight,
    ES.centerItems,
    ES.w100,
    ES.tempBorder,
    {backgroundColor: backgroundColor},
  ]),

  header: StyleSheet.flatten([
    ES.fx0,
    ES.gap3,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.w100,
    ES.py1,
    {backgroundColor: headerBackgroundColor},

    ES.shadow10,
  ]),
  textInput: StyleSheet.flatten([
    ES.px1,
    ES.py06,
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
    ES.pt2,
    {paddingBottom: 100},
    ES.w100,
    ES.fx0,
    ES.alignItemsCenter,
  ]),
  listContainer: StyleSheet.flatten([
    ES.bRadius12,
    ES.shadow1,
    ES.bgLight,
    ES.flexRow,
    ES.pe1,
    ES.ps02,
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
