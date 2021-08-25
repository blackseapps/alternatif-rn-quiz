import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const SeperatorHComponent = props => {
  const {style} = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return <View style={[styles.container, style]} />;
};

export default SeperatorHComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.secondary,
      height: 1,
    },
  });
