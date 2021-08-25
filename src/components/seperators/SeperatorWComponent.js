import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles/Colors';

const SeperatorWComponent = props => {
  return <View style={[styles.container, props.style]} />;
};

export default SeperatorWComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    width: 1,
  },
});

