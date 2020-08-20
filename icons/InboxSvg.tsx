import React from 'react';
import Svg, { Path } from 'react-native-svg';

const InboxSvg = ({color, focused , size } : {color : string, focused : boolean, size : number}) => {
  console.log(color, focused, size)
  return (
    <Svg fill="#000000" viewBox="0 0 32 32" width="32" height="32">
      <Path fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M26 10L26 26 6 26 6 10M5 6H27V10H5z"/>
      <Path fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M13 14L19 14"/>
    </Svg>
  );
};

export default InboxSvg;