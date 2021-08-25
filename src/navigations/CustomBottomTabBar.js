import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {hp, wp} from '../constants/Dimensions';
import {useNavigation, useTheme} from '@react-navigation/native';
import {FontSize} from '../constants/Sizes';
import ArrowTop from '../../assets/images/bottomNavigation/ArrowTop';
import WalletIcon from '../../assets/icons/bottomNavigation/WalletIcon';
import BalanceIcon from '../../assets/icons/bottomNavigation/BalanceIcon';
import CardIcon from '../../assets/icons/bottomNavigation/CardIcon';
import HistoryIcon from '../../assets/icons/bottomNavigation/HistoryIcon';
import BottomUnTab from '../../assets/icons/bottomNavigation/BottomUnTab';
import Fonts from '../constants/Fonts';

export default function CustomBottomTabBar(props) {
  const {state} = props;

  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const redirectScreen = name => {
    navigation.navigate(name);
  };

  const RenderTab = ({title, onPress, IconSource, index}) => {
    return (
      <View style={styles.tab}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          {state.index == index ? (
            <View style={styles.tabButton}>
              <ArrowTop style={styles.arrowTop} />
              <View style={styles.circle}>
                <IconSource color={Colors.primary} />
              </View>
              <Text style={styles.activeTabTitle}>{title}</Text>
            </View>
          ) : (
            <View style={styles.tabButton}>
              <View style={styles.bottomUnTab}>
                <BottomUnTab />
              </View>

              <View style={[styles.circle, {...styles.unCircle}]}>
                <IconSource color={Colors.secondary} />
              </View>
              <Text style={styles.activeTabTitle}>{title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.TabBarMainContainer}>
      <RenderTab
        onPress={() => redirectScreen('Wallets')}
        IconSource={WalletIcon}
        index={0}
        title={'CÜZDANLAR'}
      />

      <RenderTab
        onPress={() => redirectScreen('MyCards')}
        IconSource={CardIcon}
        index={1}
        title={'KARTLARIM'}
      />

      <RenderTab
        onPress={() => redirectScreen('Balance')}
        IconSource={BalanceIcon}
        index={2}
        title={'BAKIYE'}
      />

      <RenderTab
        onPress={() => redirectScreen('History')}
        IconSource={HistoryIcon}
        index={3}
        title={'GEÇMIŞ'}
      />
    </View>
  );
}

const Styles = Colors =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: 75,
      alignItems: 'center',
    },
    TabBarMainContainer: {
      justifyContent: 'space-around',
      height: hp(80),
      flexDirection: 'row',
      width: '100%',
      marginTop: hp(25),
    },
    arrowTop: {
      marginBottom: hp(-2),
    },
    tab: {
      height: 80,
      paddingBottom: hp(5),
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    tabButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: wp(60),
      height: wp(60),
      backgroundColor: Colors.secondary,
      borderRadius: hp(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    unCircle: {
      backgroundColor: Colors.primary,
    },
    bottomUnTab: {
      position: 'absolute',
    },
    activeTabTitle: {
      fontSize: FontSize(8),
      color: Colors.secondary,
      fontFamily: Fonts.bold,
    },
    passiveTabTitle: {
      fontSize: FontSize(8),
      color: Colors.TextColorPrimary,
      fontFamily: Fonts.bold,
    },
  });
