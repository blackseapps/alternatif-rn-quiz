import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.536}
      height={23.75}
      viewBox="0 0 30.536 23.75"
      {...props}
    >
      <Path
        d="M0 21.205a2.545 2.545 0 002.545 2.545h25.446a2.545 2.545 0 002.545-2.545v-9.33H0zm10.179-3.6a.638.638 0 01.636-.636h7.21a.638.638 0 01.636.636v2.121a.638.638 0 01-.636.636h-7.21a.638.638 0 01-.636-.636zm-6.786 0a.638.638 0 01.636-.636h3.817a.638.638 0 01.636.636v2.121a.638.638 0 01-.636.636H4.029a.638.638 0 01-.636-.636zm27.143-15.06v2.544H0V2.545A2.545 2.545 0 012.545 0h25.446a2.545 2.545 0 012.545 2.545z"
        fill={props.color}
      />
    </Svg>
  )
}

export default CardIcon
