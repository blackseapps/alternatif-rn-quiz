import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import {useSelector} from 'react-redux';
import Fonts from '../../constants/Fonts';
import {appLogo} from '../../constants/Images';
import {FontSize} from '../../constants/Sizes';
import {useTheme} from '@react-navigation/native';

const HeaderTitle = props => {
  const {title, titleColor} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
      <Image source={appLogo} style={styles.logo} />
    </View>
  );
};

export default HeaderTitle;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: wp(350),

      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: wp(150),
      height: hp(50),
      resizeMode: 'contain',
    },
  });
