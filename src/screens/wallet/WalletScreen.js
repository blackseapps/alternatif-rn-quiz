import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import SubHeader from '../../views/wallets/SubHeader';
import CampaignListView from '../../views/wallets/CampaignListView';
import {hp, wp} from '../../constants/Dimensions';
import MaskOval from '../../../assets/images/wallets/MaskOval';
import MenuButton from '../../views/header/left/MenuButton';
import NotificationButton from '../../views/header/right/NotificationButton';
import FooterView from '../../views/wallets/FooterView';

const WalletScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions(
      'Cüzdanlar',
      Colors.primary,
      Colors.secondary,
      [<MenuButton />],
      [<NotificationButton iconColor={Colors.secondary} />],
    ),
  );

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.content}>
          <SubHeader />

          <CampaignListView />

          <MaskOval color={Colors.secondary} style={styles.maskOval} />

          <FooterView />
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletScreen;

const Styles = Colors =>
  StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    content: {
      width: '100%',
      alignItems: 'center',
    },
    maskOval: {
      marginTop: hp(-35),
      zIndex: -1,
    },
  });
