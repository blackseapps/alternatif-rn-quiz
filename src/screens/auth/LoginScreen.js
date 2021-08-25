import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import {useTheme} from '@react-navigation/native';
import * as Images from '../../constants/Images';
import {hp, wp} from '../../constants/Dimensions';
import ButtonBaseComponent from '../../components/buttons/ButtonBaseComponent';
import LoginFormView from '../../views/login/LoginFormView';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions(
      'Giriş Yapın',
      Colors.primary,
      Colors.secondary,
      [],
      [],
    ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Images.Logo} style={styles.logo} />

        <LoginFormView />
      </View>
    </View>
  );
};

export default LoginScreen;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    content: {
      alignItems: 'center',
    },
    logo: {
      width: wp(126),
      height: hp(54),
      marginTop: hp(165),
      resizeMode: 'contain',
    },
  });
