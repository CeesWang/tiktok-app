import React from 'react';
import Svg, { Path, G} from 'react-native-svg';

const ProfileSvg = ({color, focused , size } : {color : string, focused : boolean, size : number}) => {
  console.log(color, focused, size)
  return (
    <Svg fill="#000000" viewBox="0 0 32 32" width="32px" height="32px">
      <Path fill="none" stroke="#000000" stroke-miterlimit="10" strokeWidth="2" d="M16 5A6 6 0 1 0 16 17 6 6 0 1 0 16 5zM7 26c0-5 4-9 9-9s9 4 9 9"/>
    </Svg>
  );
};

export default ProfileSvg;