import React from "react";

import { useState } from "react";


function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(event)=>{
        setPasswordInput(event.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

        <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} className="details" onChange={handlePasswordChange} value={passwordInput} name="password"  placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i>Show</i>:<i>Hide</i>}
                     </button>
                     {/* <button onClick={ReactDOM.render(<img src="my-app\src\Mycomponents\200w.gif" alt="ALT"></img>, document.getElementById('root'))} target="_blank" className="forgotpassword">Forgot password?</button><br></br> */}
                     {/* <Link to ="https://www.google.com/" />breufb<Link/> */}
                     
                     {/* on clicking LOGIN --> new html page khulega/ naya js file similar to this one */}
                           
                    </div>
                </div>
                
            </div>
      </div>
      
    )

}
export default ShowAndHidePassword;