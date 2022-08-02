import React from 'react';
import {SvgXml} from 'react-native-svg';

const DashboardIcon = () => {
  return (
    <SvgXml xml={`
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 10V20" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 15H20" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}/>
  );
};

export default DashboardIcon;