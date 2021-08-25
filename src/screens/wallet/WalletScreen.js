import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import SubHeader from '../../views/wallets/SubHeader';
import CampaignListView from '../../views/wallets/CampaignListView';

const WalletScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions(
      'Cüzdanlar',
      Colors.primary,
      Colors.secondary,
      [],
      [],
    ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SubHeader />

        <CampaignListView />
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
      alignItems: 'center',
    },
  });
