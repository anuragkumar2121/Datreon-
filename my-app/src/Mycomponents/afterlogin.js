import React from 'react';
import Component from './component.js';
import Logo from "./logo.webp";
import {FcAndroidOs} from "react-icons/fc";
import Story from './story.js';
 
export default function afterlogin() {
    document.title = "Social Media Dapp";
  return (
    
    <div className='component'>
        <a href="#">
    <img src={Logo} alt="loading..." className='logo' /></a>
    
      <Component content="Home" />
      <Component content="Search"/>
      <Component content="Explore"/>
      <Component content="Reels"/>
      <Component content="Messages"/>
      <Component content="Notification"/>
      <Component content="Create"/>
      <Component content="Profile"/>
      <Component content="More"/>
      <Story/>
    </div>
  )
}
