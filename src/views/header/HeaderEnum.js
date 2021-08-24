import React from 'react';
import {
  HeaderButtonsWrapperLeft,
  HeaderButtonsWrapperRight,
} from './HeaderButtonsWrapper';
import {useTheme} from '@react-navigation/native';

/**
 * All Header Buttons Import
 **/

import BackButton from './left/BackButton';

export function _renderRightButtons(rightButtons, props, color) {
  return (
    <HeaderButtonsWrapperRight>
      {rightButtons.map(item => {
        let key = Math.floor(Math.random() * 10);
        const ItemButton = item;
        return React.cloneElement(ItemButton, (key = key));
      })}
    </HeaderButtonsWrapperRight>
  );
}

export function _renderLeftButtons(leftButtons, props, color) {
  return (
    <HeaderButtonsWrapperLeft>
      {leftButtons.map(item => {
        let key = Math.floor(Math.random() * 10);
        const ItemButton = item;
        return React.cloneElement(ItemButton, (key = key));
      })}
    </HeaderButtonsWrapperLeft>
  );
}
