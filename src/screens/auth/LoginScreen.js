import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderDefaultOptions} from '../../navigations/NavigationHeaderOptions';
import {useTheme} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/stack';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const headerHeight = useHeaderHeight();
  navigation.setOptions(HeaderDefaultOptions('', Colors.secondary));

  return <View style={styles.container}></View>;
};

export default LoginScreen;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.secondary,
      alignItems: 'center',
    },
  });
