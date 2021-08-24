import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashSScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomNavigation');
    }, 1000);
  }, []);

  return (
    <View>
      <StatusBar hidden />
    </View>
  );
};

export default SplashSScreen;
