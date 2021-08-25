import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {wp, hp} from '../../constants/Dimensions';
import PropTypes from 'prop-types';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const ButtonBaseComponent = ({
  title,
  buttonStyle,
  textStyle,
  onPress,
  textProps,
  buttonProps,
  IconLeft,
  IconRight,
}) => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {...buttonStyle}]}
      {...buttonProps}>
      {IconLeft}

      <Text color="white" {...textProps} style={[styles.text, {...textStyle}]}>
        {title}
      </Text>

      {IconRight}
    </TouchableOpacity>
  );
};

ButtonBaseComponent.defaultProps = {
  title: 'Text',
  onPress: () => {},
};

ButtonBaseComponent.propTypes = {
  title: PropTypes.array,
  buttonStyle: PropTypes.number,
  textStyle: PropTypes.number,
};

export default ButtonBaseComponent;

const Styles = Colors =>
  StyleSheet.create({
    button: {
      width: wp(315),
      height: hp(60),
      borderRadius: hp(30),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: Colors.secondary,
    },
    text: {
      fontSize: FontSize(21),
      fontFamily: Fonts.bold,
      color: Colors.white,
    },
  });
