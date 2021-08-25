import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HistoryIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      {...props}
    >
      <Path
        d="M25 12.476a12.5 12.5 0 01-20.345 9.756 1.209 1.209 0 01-.093-1.795l.568-.568a1.212 1.212 0 011.607-.1 9.275 9.275 0 10-.592-14.027L8.703 8.3a.806.806 0 01-.566 1.377H.806A.806.806 0 010 8.871V1.543a.806.806 0 011.377-.57l2.488 2.488A12.5 12.5 0 0125 12.475zm-9.119 3.971l.5-.637a1.21 1.21 0 00-.212-1.7l-2.051-1.6V7.258a1.21 1.21 0 00-1.21-1.21h-.806a1.21 1.21 0 00-1.21 1.21v6.837l3.3 2.564a1.21 1.21 0 001.7-.212z"
        fill={props.color}
      />
    </Svg>
  )
}

export default HistoryIcon
