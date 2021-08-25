import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowTop(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={11}
      viewBox="0 0 12 11"
      {...props}
    >
      <Path
        d="M5.122 1.609a1 1 0 011.756 0l4.315 7.912A1 1 0 0110.315 11h-8.63a1 1 0 01-.878-1.479z"
        fill="#2c2c58"
      />
    </Svg>
  )
}

export default ArrowTop