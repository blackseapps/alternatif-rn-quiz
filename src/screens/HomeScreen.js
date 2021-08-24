import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../constants/Dimensions';
import {FontSize} from '../constants/Sizes';
import {useTheme} from '@react-navigation/native';
import HeaderTitleLogo from '../views/header/HeaderTitleLogo';
import {HeaderCustomOptions} from '../navigations/NavigationHeaderOptions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.secondary,
      Colors.white,
      [<HeaderTitleLogo />],
      [],
    ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  );
};

export default HomeScreen;

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
