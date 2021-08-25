import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const CampaignItemComponent = props => {
  const {item, onPress} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.container}>
      <View style={[styles.headerColor, {backgroundColor: item.headerColor}]} />

      <View style={styles.content}>
        <View style={styles.headerView}>
          <Image source={item.campaignImage} style={styles.image} />
          <Text style={styles.campaignTitle}>{item.campaignTitle}</Text>
        </View>
        <View style={styles.footerView}>
          <View style={styles.row}>
            <Text style={styles.activeCount}>{item.activeCount}</Text>
            <Text style={styles.activeCountTitle}>AKTIF KAMPANYA</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceUnit}>{item.priceUnit}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CampaignItemComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: wp(299),
      height: hp(168),
      backgroundColor: Colors.primary,
      borderRadius: hp(15),
      marginRight:(-100)
    },
    content: {},
    headerColor: {
      width: wp(299),
      height: hp(25),
      borderTopLeftRadius: hp(15),
      borderTopRightRadius: hp(15),
    },
    headerView: {
      flexDirection: 'row',
    },
    footerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(30),
    },
    image: {
      width: hp(80),
      height: hp(80),
      borderRadius: hp(45),
      marginTop: hp(-15),
      marginLeft: wp(20),
      backgroundColor: Colors.white,
    },
    campaignTitle: {
      fontSize: FontSize(18),
      fontFamily: Fonts.bold,
      color: Colors.primaryText,
      marginLeft: wp(20),
      marginTop: hp(10),
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: wp(30),
      paddingRight: wp(20),
    
    },
    activeCount: {
      fontSize: FontSize(21),
      fontFamily: Fonts.bold,
      color: Colors.primaryText,
      marginRight: wp(5),
    },
    activeCountTitle: {
      fontSize: FontSize(11),
      color: Colors.primaryText,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    price: {
      fontSize: FontSize(14),
      fontFamily: Fonts.bold,
      color: Colors.primaryText,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    priceUnit: {
      fontSize: FontSize(11),
      fontFamily: Fonts.bold,
      color: Colors.primaryText,
      marginLeft: wp(2),
      marginTop: hp(3),
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  });
