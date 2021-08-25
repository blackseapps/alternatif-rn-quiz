import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {wp, hp} from '../../constants/Dimensions';
import PropTypes from 'prop-types';
import {FontSize} from '../../constants/Sizes';

const ButtonIconComponent = prop => {
  const {containerStyle, IconFamily, IconName, onPress} = prop;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <IconFamily name={IconName} size={hp(16)} color={Colors.secondary} />
    </TouchableOpacity>
  );
};

ButtonIconComponent.defaultProps = {
  title: 'Text Button',
  onPress: () => {},
};

ButtonIconComponent.propTypes = {
  title: PropTypes.string,
  textStyle: PropTypes.object,
};

export default ButtonIconComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: hp(25),
      height: hp(25),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
