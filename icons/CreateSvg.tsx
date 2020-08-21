import React from 'react';
import Svg, { Path, G} from 'react-native-svg';

const CreateSvg = ({color, focused , size } : {color : string, focused : boolean, size : number}) => {
  return (
    // <Svg fill="#000000" viewBox="0 0 50 50" width="50px" height="50px"> filled svg
    //   <Path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"/>
    // </Svg>
      <Svg fill="#000000" viewBox="0 0 50 50" width="40" height="40">
        <Path fill="none" stroke={focused ? "#000000" :"grey"} stroke-miterlimit="10" strokeWidth="4" d="M13 25L37 25M25 13L25 37M25 3A22 22 0 1 0 25 47 22 22 0 1 0 25 3z"/>
      </Svg>
  );
};

export default CreateSvg;