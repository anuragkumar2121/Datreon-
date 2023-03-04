import React from "react";
import {FcAndroidOs} from "react-icons/fc";
import { BiAnalyse } from "react-icons/bi";
export default function component(props) {
  return (
    <div>
      <a href={props.location} target={props.target}>
      
        <button className="button"> <BiAnalyse/> {props.content}</button>
      </a>
      
    </div>
  ); 
}
