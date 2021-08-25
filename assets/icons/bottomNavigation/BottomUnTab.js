
import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { hp } from "../../../src/constants/Dimensions"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BottomUnTab(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={hp(66)}
      height={hp(66)}
      viewBox="0 0 66 66"
      {...props}
    >
      <Defs></Defs>
      <G filter="url(#a)">
        <Path
          data-name="Mask"
          d="M30 0A30 30 0 110 30 30 30 0 0130 0z"
          transform="translate(3 2)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default BottomUnTab
