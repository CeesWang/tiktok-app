import React from 'react';
import Svg, { Path, G} from 'react-native-svg';

const ProfileSvg = ({color, active , size } : {color : string, active : boolean, size : number}) => {
  if (active){
    console.log("PROFILE");
  }
  return (
    <Svg fill={active ? "#FFFFFF" : "grey"} viewBox="0 0 32 32" width="32px" height="32px">
      <Path fill={active ? "#000000" :"grey"} stroke={active ? "#000000" :"grey"} stroke-miterlimit="10" strokeWidth="2" d="M16 5A6 6 0 1 0 16 17 6 6 0 1 0 16 5zM7 26c0-5 4-9 9-9s9 4 9 9"/>
    </Svg>
  );
};

export default ProfileSvg;