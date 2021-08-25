import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';
import ButtonBaseComponent from '../../components/buttons/ButtonBaseComponent';
import TextInputBaseComponent from '../../components/inputs/TextInputBaseComponent';
import ButtonTextComponent from '../../components/buttons/ButtonTextComponent';
import * as Icons from '../../constants/Icons';
import {useState} from 'react';

const LoginFormView = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const [form, submit] = useState( );

  const onHandleRedirect = () => {
    navigation.replace('BottomNavigation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInputBaseComponent
          title={'Telefon'}
          placeHolder={'5xx xxx xx xx'}
          value={form?.phoneNumber}
          icon={Icons.phoneIcon}
          containerStyle={styles.input}
          onChangeText={value => {
            submit({...form, phoneNumber: value});
          }}
          type={'cel-phone'}
        />

        <TextInputBaseComponent
          title={'Şifre'}
          placeHolder={'••••••••'}
          value={form?.password}
          icon={Icons.passwordIcon}
          secureTextEntry={true}
          onChangeText={value => {
            submit({...form, password: value});
          }}
          type={'default'}
        />

        <ButtonTextComponent
          title={'Şifremi Unuttum'}
          containerStyle={styles.buttonText}
        />

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
    input: {
      marginBottom: hp(10),
    },
    buttonText: {
      marginVertical: hp(17),
    },
  });
