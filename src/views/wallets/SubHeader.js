import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';

const SubHeader = () => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
       
      </View>
    </View>
  );
};

export default SubHeader;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: hp(45),
      backgroundColor: Colors.primary,
    },
    content: {
      alignItems: 'center',
    },
  });
