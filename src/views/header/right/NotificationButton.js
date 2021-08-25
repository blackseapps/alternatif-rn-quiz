import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

const NotificationButton = props => {
  const {iconColor, style, onPress} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity style={[styles.containerStyle, style]} onPress={onPress}>
      <Ionicons size={hp(16)} color={iconColor} name={'notifications'} />
      <View style={styles.notificationStatus} />
    </TouchableOpacity>
  );
};

export default NotificationButton;

const Styles = Colors =>
  StyleSheet.create({
    containerStyle: {
      height: wp(32),
      width: wp(32),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(15),
    },
    notificationStatus: {
      width: hp(8),
      height: hp(8),
      backgroundColor: Colors.notificationStatus,
      position: 'absolute',
      top: hp(12),
      left: wp(5),
      borderRadius: hp(4),
      borderWidth: 2,
      borderColor: Colors.white,
    },
  });
