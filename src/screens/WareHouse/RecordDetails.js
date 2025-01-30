import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosClient from '../../../axiosClient';
import ES from '../../styles/ES';
import {
  adminIcon,
  calanderIcon,
  pickupPersonIcon,
  recordIcon,
  watchIcon,
} from '../../Constants/imagesAndIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  backgroundColor,
  modalColor,
  primaryColor,
  primaryTextColor,
} from '../../Constants/Colours';
import HeadingText from '../../Components/HeadingText';
import NormalText from '../../Components/NormalText';
import Loading from '../../Constants/Loading';

const RecordDetails = ({route}) => {
  const [record, setRecords] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Fetches the record details for a specific record ID.
   * Makes an API call to retrieve the record details using the given record ID from the route parameters.
   * Updates the state with the fetched record details upon successful retrieval.
   * Logs any errors encountered during the API call.
   */

  /******  beaadbc2-1700-4b55-9496-fba0699884e5  *******/
  const getRecordDetails = async () => {
    setIsLoading(true);
    try {
      const res = await axiosClient.get(
        `/register/get/${route.params.record_id}`,
      );
      //console.log(res.data.result);
      setRecords(res.data.result);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log('route: ', route.params.record_id);
    getRecordDetails();
  }, []);

  useEffect(() => {
    if (record) {
      console.log('record list: ', record.item_list);
    }
  }, [record]);
  return (
    <>
      {record && (
        <View style={[ES.w100, ES.fx1, isLoading ? ES.dNone : ES.dBlock]}>
          <LinearGradient
            colors={['#fff', '#fff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[s.card]}>
            <View style={[s.listConatinerHeaer]}>
              {/*  
              <View style={[ES.hs70, ES.ws70, ES.overflowHidden, ES.bRadius5]}>
                <Image source={recordIcon} style={[ES.hs70, ES.ws70]} />
              </View>
               */}

              <View style={[ES.fx1, ES.justifyContentCenter, ES.gap1]}>
                {/*   <HeadingText
                  size={20}
                  capitalize
                  style={[ES.f20, ES.fw500, ES.capitalize, ES.fx1]}>
                  {record.warehouse_admin?.name}
                </HeadingText> */}
                <View
                  style={[ES.flexRow, ES.fx0, ES.gap2, ES.alignItemsBaseline]}>
                  <View style={[ES.fx1]}>
                    <HeadingText capitalize fw={500} size={17}>
                      <Text style={[ES.tempBorder]}>
                        <Image
                          source={adminIcon}
                          style={[ES.ws22, ES.hs22, ES.objectFitContain]}
                        />
                        <Text>
                          {' '}
                          :{' '}
                          {record.warehouse_admin.name.length <= 10
                            ? record.warehouse_admin.name
                            : record.warehouse_admin.name.slice(0, 10) + '...'}
                        </Text>
                      </Text>
                    </HeadingText>
                  </View>
                  <View style={[ES.fx1]}>
                    <HeadingText capitalize fw={500} size={17}>
                      <Text style={[ES.tempBorder]}>
                        <Image
                          source={pickupPersonIcon}
                          style={[ES.ws22, ES.hs22, ES.objectFitContain]}
                        />
                        <Text>
                          {' '}
                          :{' '}
                          {record.pickup_person.name.length <= 10
                            ? record.pickup_person.name
                            : record.pickup_person.name.slice(0, 10) + '...'}
                        </Text>
                      </Text>
                    </HeadingText>
                  </View>
                </View>
                <View
                  style={[ES.fx0, ES.flexRow, ES.gap2, ES.alignItemsCenter]}>
                  <View style={[ES.fx1]}>
                    <NormalText size={17}>
                      <Text style={[]}>
                        <Image
                          source={calanderIcon}
                          style={[ES.ws22, ES.hs22, ES.objectFitContain]}
                        />
                        <Text> : {record.createdAt.slice(0, 10)}</Text>
                      </Text>
                    </NormalText>
                  </View>
                  <View style={[ES.fx1]}>
                    <NormalText size={17}>
                      <Text style={[]}>
                        <Image
                          source={watchIcon}
                          style={[ES.ws22, ES.hs22, ES.objectFitContain]}
                        />
                        <Text> : {record.createdAt.slice(11, 16)}</Text>
                      </Text>
                    </NormalText>
                  </View>
                </View>
              </View>
            </View>
            <View style={[ES.fx1]}>
              <FlatList
                data={record.item_list}
                contentContainerStyle={{paddingBottom: 100}}
                keyExtractor={(subItem, index) => index.toString()}
                renderItem={({item: subItem}) => (
                  <View style={[s.itemContainer]}>
                    <View style={[ES.fx3]}>
                      <NormalText size={17} capitalize color={primaryTextColor}>
                        {subItem.item_id.item_name}
                      </NormalText>
                    </View>
                    <View style={[ES.fx2]}>
                      <Text style={[ES.f16, ES.fw500, ES.px08, ES.capitalize]}>
                        qty:
                        <NormalText>
                          {subItem.quantity}{' '}
                          {subItem.item_id.quantity_unit.name}
                        </NormalText>
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </LinearGradient>
        </View>
      )}

      <View style={[isLoading ? ES.dBlock : ES.dNone, ES.h100]}>
        <Loading />
      </View>
    </>
  );
};

export default RecordDetails;

const s = StyleSheet.create({
  card: StyleSheet.flatten([
    ES.w100,
    ES.fx1,
    ES.bRadius12,
    ES.overflowHidden,

    ES.pb1,
    ES.px04,
  ]),
  conatainer: StyleSheet.flatten([
    ES.screenHeight,
    ES.centerItems,
    ES.w100,
    {backgroundColor: backgroundColor},
  ]),

  header: StyleSheet.flatten([
    ES.fx0,
    ES.gap4,
    ES.px1,
    ES.flexRow,
    ES.alignItemsCenter,
    ES.w100,
    {backgroundColor: 'rgb(21, 101, 239)'},
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

  listConatinerHeaer: StyleSheet.flatten([
    ES.py06,

    ES.flexRow,
    ES.px1,
    ES.py1,
    ES.gap2,
    ES.w100,
  ]),

  subInfo: StyleSheet.flatten([
    ES.f18,
    ES.fw400,
    ES.capitalize,
    ES.textSecondary,
  ]),
  itemContainer: StyleSheet.flatten([
    ES.mt06,
    ES.w100,
    ES.flexRow,
    ES.px08,
    ES.pb04,
    {
      borderBottomWidth: 0.4,
      borderColor: '#cccccc',
    },
  ]),

  lightText: StyleSheet.flatten([
    ES.capitalize,
    {color: '#4a4f54', fontFamily: 'Lato-Regular'},
  ]),
});
