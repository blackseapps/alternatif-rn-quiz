import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';

import {selectBackgroundColor, selectIconColor} from './HeaderTheme';
import {useTheme} from '@react-navigation/native';

const HeaderButton = props => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const {
    IconFontFamily,
    iconName,
    iconColor = Colors.headerIconColor,
    color = Colors.tertiary,
    containerStyle,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, {backgroundColor: color}]}
      onPress={onPress}>
      <IconFontFamily size={wp(16)} color={iconColor} name={iconName} />
    </TouchableOpacity>
  );
};

export default HeaderButton;

const Styles = Colors =>
  StyleSheet.create({
    container: {
     
      height: wp(32),
      width: wp(32),
      marginLeft: wp(22),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp(7),

      shadowColor: 'rgba(0,0,0,0.1)',
      shadowOffset: {width: 1, height: 3},
      //shadowOpacity: 1,
      shadowRadius: 2.22,
      elevation: 3,
    },
  });
