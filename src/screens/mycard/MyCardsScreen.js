import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import HeaderTitleLogo from '../../views/header/HeaderTitleLogo';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const MyCardsScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions('Kartlarım', Colors.primary, Colors.secondary, [], []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Kartlarım</Text>
      </View>
    </View>
  );
};

export default MyCardsScreen;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: Colors.secondary,
      fontSize: FontSize(20),
      fontFamily: Fonts.medium,
    },
  });
