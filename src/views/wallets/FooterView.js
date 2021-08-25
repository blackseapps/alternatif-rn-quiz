import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';
import ButtonBaseComponent from '../../components/buttons/ButtonBaseComponent';
import * as Icons from '../../constants/Icons';
import * as Images from '../../constants/Images';

const FooterView = () => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
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
  );
};

export default FooterView;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      zIndex: -2,
    },
    buttons: {
      marginTop: hp(-25),
    },
    walletsBgImage: {
      width: wp(335),
      height: hp(78),
      resizeMode: 'contain',
      marginTop: hp(-60),
      zIndex: -999,
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
  });
