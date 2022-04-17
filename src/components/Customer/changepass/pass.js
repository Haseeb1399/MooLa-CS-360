import React from "react";
import "./pass.css";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const ChangePass = () => {
  const navigate = useNavigate();

  function Move() {
      navigate('/profile');
  }

  return (
    <div class="App">
      <h1 className="logintitle">CHANGE PASSWORD</h1>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Current Password</label>
        <input 
          type="password"
        />
      </div>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">New Password</label>
        <input 
          type="password"
        /> 
      </div> 
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Confirm New Password</label>
        <input 
          type="password"
        /> 
      </div>
      <div>
        <button onClick={Move} className="loginbutton">Go Back</button>
        <button  className="loginbutton">Change Password</button>  
      </div>       
      
    </div>
  );
};

export default ChangePass;
