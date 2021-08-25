import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';
import CampaignListComponent from '../../components/listing/CampaignListComponent';
import {campaignData} from '../../data/data';

const CampaignListView = () => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CampaignListComponent data={campaignData} />
      </View>
    </View>
  );
};

export default CampaignListView;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: hp(220),
      backgroundColor: Colors.secondary,
    },
    content: {
      alignItems: 'center',
    },
  });
