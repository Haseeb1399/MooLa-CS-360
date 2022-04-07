import React from "react";
import "./land.css";
import image1 from '../../assets/moolalogo.png'
import LoginPage from '../login page/login'
import Signup from '../signup/signup'
import {Link} from "react-router-dom";

const LandingPage = () => {


  return (
    <div class="App">
      <h1 className="landingtitle">Welcome To</h1>
      <img src={image1} className="landinglogo" />
      <div className="loginleft">
        <h1 className="qtext">Already have an account?</h1>
        <Link to='/login'>
        <button className="loginbuttons">Login</button>
        </Link>
      </div>
      <div className="loginright">
        <h1 className="qtext">Don't have an account?</h1>
        <Link to='/signup'><button className="loginbuttons">Sign Up</button></Link>
      </div>      
    </div>
  );
};

export default LandingPage;
