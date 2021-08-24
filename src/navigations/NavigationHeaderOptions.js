import React from 'react';

import HeaderTitle from '../views/header/HeaderTitle';
import {
  _renderLeftButtons,
  _renderRightButtons,
} from '../views/header/HeaderEnum';
import BackButton from '../views/header/left/BackButton';
import {HeaderButtonsWrapperLeft} from '../views/header/HeaderButtonsWrapper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/**
 * Default Options for Top Header Component
 **/

export const HeaderDefaultOptions = (title = '', color, titleColor) => {
  return {
    headerTitle: props => null,
    headerTintColor: color,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
      elevation: 0,
      shadowRadius: 0,
    },
    headerLeft: props => (
      <HeaderButtonsWrapperLeft>
        <BackButton {...props} color={color} iconColor={Colors.white} />
        <HeaderTitle {...props} title={title} titleColor={titleColor} />
      </HeaderButtonsWrapperLeft>
    ),
  };
};

export const HeaderNullOptions = () => {
  return {
    headerTitle: props => null,
    headerTransparent: true,
    headerStyle: {
      elevation: 0,
      shadowRadius: 0,
    },
    headerLeft: props => null,
  };
};

/**
 *  Custom Options for Top Header Component
 **/

export const HeaderCustomOptions = (
  title = '',
  color,
  titleColor,
  leftButtons = [],
  rightButtons = [],
) => {
  return {
    headerTitle: props => (
      <HeaderTitle {...props} title={title} titleColor={titleColor} />
    ),
    headerTintColor: color,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
      elevation: 0,
      shadowRadius: 0,
    },
    headerLeft: props => _renderLeftButtons(leftButtons, props, color),
    headerRight: props => _renderRightButtons(rightButtons, props, color),
  };
};
