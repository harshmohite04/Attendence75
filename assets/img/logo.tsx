import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"

import {Dimensions, View} from 'react-native'
const {width} = Dimensions.get('window')
const scale = width/320;
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Logo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={223}
    height={140}
    fill="none"
    {...props}
  >
    <View></View>
    <G fill="#21005D" filter="url(#a)">
      <Path
        fillRule="evenodd"
        d="M130.851 71.6c0 9.444-7.32 17.1-16.35 17.1-9.03 0-16.35-7.656-16.35-17.1 0-9.444 7.32-17.1 16.35-17.1 9.03 0 16.35 7.656 16.35 17.1Zm-5.45 0c0 6.296-4.88 11.4-10.9 11.4-6.02 0-10.9-5.104-10.9-11.4s4.88-11.4 10.9-11.4c6.02 0 10.9 5.104 10.9 11.4Z"
        clipRule="evenodd"
      />
      <Path d="M114.501 97.25c-17.643 0-32.675 10.911-38.401 26.197a55.642 55.642 0 0 0 4.402 4.104c4.264-14.034 17.64-24.601 33.999-24.601s29.735 10.567 33.999 24.601a55.733 55.733 0 0 0 4.402-4.104c-5.727-15.286-20.759-26.197-38.401-26.197Z" />
    </G>
    <G fill="#21005D" filter="url(#b)">
      <Path
        fillRule="evenodd"
        d="M184.851 51.6c0 9.444-7.32 17.1-16.35 17.1-9.03 0-16.35-7.656-16.35-17.1 0-9.444 7.32-17.1 16.35-17.1 9.03 0 16.35 7.656 16.35 17.1Zm-5.45 0c0 6.296-4.88 11.4-10.9 11.4-6.02 0-10.9-5.104-10.9-11.4s4.88-11.4 10.9-11.4c6.02 0 10.9 5.104 10.9 11.4Z"
        clipRule="evenodd"
      />
      <Path d="M168.501 77.25c-17.643 0-32.675 10.911-38.401 26.197a55.559 55.559 0 0 0 4.402 4.104c4.264-14.034 17.64-24.601 33.999-24.601s29.735 10.567 33.999 24.601a55.733 55.733 0 0 0 4.402-4.104c-5.727-15.286-20.759-26.197-38.401-26.197Z" />
    </G>
    <G fill="#21005D" filter="url(#c)">
      <Path
        fillRule="evenodd"
        d="M70.85 50.6c0 9.444-7.32 17.1-16.35 17.1-9.03 0-16.35-7.656-16.35-17.1 0-9.444 7.32-17.1 16.35-17.1 9.03 0 16.35 7.656 16.35 17.1Zm-5.45 0c0 6.296-4.88 11.4-10.9 11.4-6.02 0-10.9-5.104-10.9-11.4s4.88-11.4 10.9-11.4c6.02 0 10.9 5.104 10.9 11.4Z"
        clipRule="evenodd"
      />
      <Path d="M54.5 76.25c-17.642 0-32.674 10.911-38.4 26.197a55.642 55.642 0 0 0 4.402 4.104C24.766 92.517 38.142 81.95 54.5 81.95S84.236 92.517 88.5 106.551a55.626 55.626 0 0 0 4.401-4.104c-5.726-15.286-20.758-26.197-38.4-26.197Z" />
    </G>
    <Path
      stroke="#21005D"
      strokeLinejoin="bevel"
      strokeWidth={5}
      d="M146.5 17.5c0 8.353-6.56 15-14.5 15s-14.5-6.647-14.5-15 6.56-15 14.5-15 14.5 6.647 14.5 15ZM106.5 17.5c0 8.353-6.56 15-14.5 15s-14.5-6.647-14.5-15 6.56-15 14.5-15 14.5 6.647 14.5 15Z"
    />
    <Defs></Defs>
  </Svg>
)
export default Logo
