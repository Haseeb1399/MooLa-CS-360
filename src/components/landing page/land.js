import React from "react";
import "./land.css";
import image1 from '../../assets/moolalogo.png'

const LandingPage = () => {

  return (
    <div class="App">
      <h1 className="landingtitle">Welcome To</h1>
      <img src={image1} className="landinglogo" />
      <div className="loginleft">
        <h1 className="qtext">Already have an account?</h1>
        <button className="loginbuttons">
          Login
        </button>
      </div>
      <div className="loginright">
        <h1 className="qtext">Don't have an account?</h1>
        <button className="loginbuttons">
          Sign Up
        </button>
      </div>      
    </div>
  );
};

export default LandingPage;
