import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import {useSelector} from 'react-redux';
import Fonts from '../../constants/Fonts';

import {FontSize} from '../../constants/Sizes';
import {useTheme} from '@react-navigation/native';

const HeaderTitle = props => {
  const {title, titleColor} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: wp(218),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: FontSize(16),
      fontFamily: Fonts.bold,
      textAlign: 'center',
      color: Colors.TextColorPrimary,
    },
  });
