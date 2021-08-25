import React from 'react';
import {StyleSheet, View} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import CarouselComponent from '../carousels/CarouselComponent';
import CampaignItemComponent from '../items/CampaignItemComponent';

const CampaignListComponent = props => {
  const {data, style} = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const renderItem = ({item, index}) => {
    return (
      <CampaignItemComponent index={index} item={item} onPress={() => {}} />
    );
  };

  return (
    <View style={[styles.container, style]}>
      <CarouselComponent
        data={data}
        renderItem={renderItem}
        onSnapToEnd={() => {}}
        idName={'categoryId'}
        index={1}
        itemWidth={299}
        
      />
    </View>
  );
};

export default CampaignListComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: hp(25),
    },
    list: {
      width: wp(375),
      flex: 1,
      flexGrow: 1,
    },
  });
