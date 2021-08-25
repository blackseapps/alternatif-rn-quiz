import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import SubHeader from '../../views/wallets/SubHeader';
import CampaignListView from '../../views/wallets/CampaignListView';
import ButtonBaseComponent from '../../components/buttons/ButtonBaseComponent';
import {hp, wp} from '../../constants/Dimensions';
import * as Icons from '../../constants/Icons';
import * as Images from '../../constants/Images';
import MaskOval from '../../../assets/images/wallets/MaskOval';
import MenuButton from '../../views/header/left/MenuButton';
import NotificationButton from '../../views/header/right/NotificationButton';

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
    <View style={styles.container}>
      <View style={styles.content}>
        <SubHeader />

        <CampaignListView />

        <MaskOval color={Colors.secondary} style={styles.maskOval} />

        <View style={styles.footer}>
          <Image source={Images.walletsBgImage} style={styles.walletsBgImage} />

          <View style={styles.buttons}>
            <ButtonBaseComponent
              title={'Kampanyalar'}
              containerStyle={styles.buttonCampaign}
              textStyle={styles.textCampaign}
              IconRight={Icons.giftImage}
            />

            <ButtonBaseComponent
              title={'Cüzdan Ekle'}
              stycontainerStyle={styles.buttonWallet}
              IconRight={Icons.addWalletImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletScreen;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    content: {
      flex: 1,
      alignItems: 'center',
    },
    buttonWallet: {},
    buttonCampaign: {
      borderWidth: 2,
      borderColor: Colors.secondary,
      backgroundColor: Colors.primary,
      marginBottom: hp(15),
    },
    textCampaign: {
      color: Colors.secondary,
    },
    maskOval: {
      marginTop: hp(-35),
      zIndex: -1,
    },
    walletsBgImage: {
      width: wp(335),
      height: hp(78),
      resizeMode: 'contain',
      marginTop: hp(-60),
      zIndex: -999,
    },
    footer: {zIndex: -2},
    buttons: {
      marginTop: hp(-20),
    },
  });
