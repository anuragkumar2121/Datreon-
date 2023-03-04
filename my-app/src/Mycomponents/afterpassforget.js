import React from "react";
// import logo from "./logo.webp";
import lock from "./lock.jpg";
import Details from "./details.js";
// import Dropdown1 from "./dropdown.js";
export default function afterpassforget() {
  document.title="forgot password"
  return (
    <div>
        <a href="#" className="head">Go back to home page</a>
        {/* <Dropdown1/>*/}
      <br />
      <br />
      <br />
      <hr className="hr" />
      <div className="App2">
        <h3 className="tlogin">Trouble logging in?</h3>
        <img className="lock" src={lock} alt="loading..." />

        <p className="detail">
          Enter your email, phone, or username and we'll send you a link to get
          back into your account.
        </p>
        <Details content="Phone/Email/Username" />
        <br />

        <a href={afterpassforget}>
          <button className="btnlogin">
            {" "}
            <b> Send Login link </b>
          </button>
          <br />{" "}
        </a>
        <a href="#" className="help">
          <i className="help"> Need help? </i>
        </a>
        <br />
        <div className="span">
          <span>Dont have an account? </span>
          <a href="#" className="signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
