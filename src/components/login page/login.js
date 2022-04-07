import React from "react";
import "./login.css";

const LoginPage = () => {

  return (
    <div class="App">
      <h1 className="logintitle">LOGIN</h1>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">User Name   </label>
        <input
          type="text"
        />
      </div>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Password   </label>
        <input
          type="password"
        /> 
      </div>     
      <button className="loginbutton">Login</button>
    </div>
  );
};

export default LoginPage;
