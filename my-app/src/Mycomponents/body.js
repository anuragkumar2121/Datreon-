import React from "react";
import logo from "./logo.webp";
import Details from "./details.js";
import Password from "./password.js";
import photo from "./photo.jpg";
import afterpassforget from "./afterpassforget.js";

export default function body() {
  return (

    <div style={{backgroundImage:`url(${photo})`}}> 
    <div className="App">
      
      <h1 className="heading" >Social Media Dapp</h1>
      <img className="logo" src={logo} alt="loading..." />
      <p className="heading">Enter your login details below</p>
      <Details content="Phone number,Email or Username" />
      <Password />
      
      <a href={afterpassforget}>
        <button className="login"> <b> Log in </b></button>
        <div className="remember">
        <input type="checkbox" name="Remember me?"  />       
        Remember me
        </div>
      </a>
      <br />
      <a href="abc" className="pass">Forgot password?</a>
      <br /><br />

       <span className="sp">Dont have an account?  </span><a href="gte" className="signup">Sign up</a>
       </div>
    </div>
  );
}
