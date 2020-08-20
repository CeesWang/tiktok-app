import React from 'react';
import Svg, { Path} from 'react-native-svg';

const HomeSvg = ({color, focused , size } : {color : string, focused : boolean, size : number}) => {
  console.log(color, focused, size)
  return (
    <Svg fill={"#000000"} 
      viewBox="0 0 50 50" 
      width="25" 
      height="25">
      <Path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M45 18L45 46 5 46 5 18"/>
      <Path fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" d="M19 46L19 27 31 27 31 46"/>
      <Path d="M35 6L35 9.016 37 11.094 37 8 39 8 39 13.203 41 15.266 41 6z"/>
      <Path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M2 20L25 2.053 48 20"/>
    </Svg>
  );
};

export default HomeSvg;