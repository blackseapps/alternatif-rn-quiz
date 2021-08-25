import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../HeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useTheme} from '@react-navigation/native';

const MenuButton = props => {
  const {iconColor, color, style, onPress} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const navigation = useNavigation();

  return (
    <HeaderButton
      IconFontFamily={Ionicons}
      iconName={'md-menu-outline'}
      color={color}
      iconColor={iconColor}
      containerStyle={[styles.containerStyle, style]}
      onPress={onPress}
    />
  );
};

export default MenuButton;

const Styles = Colors =>
  StyleSheet.create({
    containerStyle: {
      height: wp(32),
      width: wp(32),
      marginLeft: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
