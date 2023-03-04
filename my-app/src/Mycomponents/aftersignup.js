import React from 'react';
import Details from "./details.js";
import Password from "./password.js";
export default function aftersignup() {
  document.title="Sign up"
  return (
    <div className='App1'>
      <h1>Create a new account</h1>
      <p className='detail'>Sign up to connect with your friends and family</p>
      
      <Details content="Full Name" />
      <Details content="Mobile Number or Email Id"/>
      <Details content="Username"/>
      <Details content="New Password" type="password"/>
      <Details content="Re-enter your Password" type="password"/>
     <button className="signup1"> <a href="gte" className='signup' >Create Account!</a>
     </button>
    </div>
  )
}
