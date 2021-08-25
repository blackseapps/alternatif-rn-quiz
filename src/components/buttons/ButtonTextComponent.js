import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {wp, hp} from '../../constants/Dimensions';
import PropTypes from 'prop-types';
import {FontSize} from '../../constants/Sizes';

const ButtonTextComponent = prop => {
  const {title, containerStyle, textStyle, onPress, textProps} = prop;
  
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text {...textProps} style={[styles.text, {...textStyle}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

ButtonTextComponent.defaultProps = {
  title: 'Text Button',
  onPress: () => {},
};

ButtonTextComponent.propTypes = {
  title: PropTypes.array,
  textStyle: PropTypes.number,
};

export default ButtonTextComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: hp(25),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    text: {
      fontSize: FontSize(12),
      color: Colors.secondary,
    },
  });
