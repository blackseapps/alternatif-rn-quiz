import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const BalanceScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions('Bakiye', Colors.primary, Colors.secondary, [], []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bakiye</Text>
      </View>
    </View>
  );
};

export default BalanceScreen;

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
