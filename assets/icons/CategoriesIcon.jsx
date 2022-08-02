import React from 'react';
import {SvgXml} from 'react-native-svg';

const CategoriesIcon = () => {
  return (
    <SvgXml xml={`
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.5 3.75H3.75V12.5H12.5V3.75Z" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M26.25 3.75H17.5V12.5H26.25V3.75Z" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M26.25 17.5H17.5V26.25H26.25V17.5Z" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M12.5 17.5H3.75V26.25H12.5V17.5Z" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}/>
  );
};

export default CategoriesIcon;