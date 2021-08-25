import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
import { wp } from '../../../src/constants/Dimensions';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BottomUnTab(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={wp(60)}
      height={wp(60)}
      viewBox="0 0 66 66"
      {...props}>
      <Defs></Defs>
      <G filter="url(#a)">
        <Path d="M33 2A30 30 0 113 32 30 30 0 0133 2z" fill="#fff" />
      </G>
    </Svg>
  );
}

export default BottomUnTab;
