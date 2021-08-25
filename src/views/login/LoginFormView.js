import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';
import ButtonBaseComponent from '../../components/buttons/ButtonBaseComponent';

const LoginFormView = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const onHandleRedirect = () => {
    navigation.replace('BottomNavigation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ButtonBaseComponent title={'Giriş Yap'} onPress={onHandleRedirect} />
      </View>
    </View>
  );
};

export default LoginFormView;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    content: {
      alignItems: 'center',
    },
  });
