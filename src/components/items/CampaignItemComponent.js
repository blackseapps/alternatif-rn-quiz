import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import {FontSize} from '../../constants/Sizes';

const CampaignItemComponent = props => {
  const {item, onPress} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.container}></TouchableOpacity>
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
    },
    content: {
      flexDirection: 'row',
    },
  });
