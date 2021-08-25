import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {hp, wp} from '../../../src/constants/Dimensions';

function MaskOval(props) {
  return (
    <Svg
      width="500"
      height="140"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}>
      <Path d="M 0 0 C 140 140 380 140 500 0" fill={props.color} />
    </Svg>
  );
}

export default MaskOval;
