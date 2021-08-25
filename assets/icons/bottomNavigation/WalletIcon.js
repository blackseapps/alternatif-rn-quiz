import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WalletIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29.25}
      height={27.001}
      viewBox="0 0 29.25 27.001"
      {...props}
    >
      <Path
        d="M25.031 6.751H4.219A4.222 4.222 0 000 10.97v11.812a4.222 4.222 0 004.219 4.219h20.812a4.222 4.222 0 004.219-4.219V10.97a4.222 4.222 0 00-4.219-4.219zM20.735.071L4.219 3.301c-1.266.279-3.094 1.552-3.094 3.1A4.43 4.43 0 014.57 5.064h20.18V3.622a4.037 4.037 0 00-.977-2.644 3.325 3.325 0 00-3.038-.907z"
        fill={props.color}
      />
    </Svg>
  )
}

export default WalletIcon
