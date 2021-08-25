import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';
import SearchInputComponent from '../../components/inputs/SearchInputComponent';
import ButtonTextComponent from '../../components/buttons/ButtonTextComponent';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';
import ButtonIconComponent from '../../components/buttons/ButtonIconComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SubHeader = () => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchInputComponent
          placeHolder={'Cüzdan Ara...'}
          containerStyle={styles.searchInput}
        />

        <View style={styles.row}>
          <ButtonTextComponent
            title={'TÜM CÜZDANLAR'}
            textStyle={styles.allWallets}
            containerStyle={styles.allWalletsContainer}
          />

          <ButtonIconComponent IconName={'filter'} IconFamily={FontAwesome} />
        </View>
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
    },
    content: {
      width: '100%',
      height: hp(45),
      marginLeft: wp(15),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    searchInput: {
      width: wp(190),
    },
    row: {
      marginRight: wp(30),
      flexDirection: 'row',
    },
    allWallets: {
      fontFamily: Fonts.bold,
      fontSize: FontSize(11),
    },
    allWalletsContainer: {
      marginRight: wp(5),
    },
  });
