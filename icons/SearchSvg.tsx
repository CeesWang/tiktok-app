import React from 'react';
import Svg, { Path, G} from 'react-native-svg';
const SearchSvg = ({color, focused , size } : {color : string, focused : boolean, size : number}) => {
  return (
    <Svg fill="#000000" viewBox="0 0 50 50" width="28" height="28">
      <Path fill="none" stroke={focused ? "#000000" : "grey"} strokeLinecap="round" strokeMiterlimit="10" strokeWidth={focused ? "6" : "4"} d="M21 4A16 16 0 1 0 21 36A16 16 0 1 0 21 4Z"/>
      <Path fill="none" stroke={focused ? "#000000" : "grey"} strokeMiterlimit="10" strokeWidth={focused ? "6" : "4"} d="M32.229 32.229L45.5 45.5"/>
    </Svg>
  );
};

export default SearchSvg;