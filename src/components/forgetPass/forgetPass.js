import React, { useEffect } from "react";
import "./forgetPass.css";
import { useState } from "react";

import axios from "axios";
import {Navigate, useNavigate} from 'react-router-dom';
const bcrypt = require('bcryptjs')

const ForgetPass = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState()
  const [serverCode,setServerCode]=useState()
  const [validCode,setValidCode]=useState()
  const [newPassword,setNewPasswrd]=useState()

  const getCode=()=>{
    axios.get(process.env.REACT_APP_LOCAL_KEY+'/User/checkEmail').then((res)=>{
      if(res.error){
        console.log("Email address invalid")
        alert("Entered email does not exist")
        window.location="/forgetPass"
        return
      }
    }).catch((err)=>{
      console.log(err)
    })

    const newObj={
      email:email
    }
    axios.post(process.env.REACT_APP_LOCAL_KEY+'/User/forgotPass',newObj).then(res=>{
      const code = res.data.data
      console.log(code)
      setServerCode(code)
    })
  }
  
  async function hashIt1(pass) {
    const salt = await bcrypt.genSalt(10);
    // console.log(salt)
    const hashed = await bcrypt.hash(pass,salt); //STORE SALT ON DB 
    return [hashed,salt]
  }

  const changePass=()=>{
    if(serverCode==validCode){
      hashIt1(newPassword).then((val1)=>{
        console.log(val1)
        const newObj={
          "new":val1[0],
          "email":email,
          "salted":val1[1]
        }
        axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/updatePassForgetPass",newObj).then((res)=>{
          if(res.data.error){
            console.log(res.data.error)
          }else{
            console.log("Password Changed")
            navigate('/login')
          }
        })

      })
    }else{
      alert("Code is invalid! Please try again")
      window.location="/forgetPass"
    }
  }

  return (
    <div class="App">
      <h1 className="logintitle">Forgot Password</h1>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Email</label>
        <input 
          type="email" onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button onClick={getCode} className="loginbutton">Get Code</button>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Email Code</label>
        <input 
          type="text" onChange={(event) => setValidCode(event.target.value)}
        /> 
      </div> 
      <div className="pls">
        <label placeholder="Type Here" className="logintext">New Password</label>
        <input 
          type="password" onChange={(event) => setNewPasswrd(event.target.value)}
        /> 
      </div>
      <div>
        <button onClick = {changePass} className="loginbutton">Change Password</button>  
        <button onClick={()=>navigate("/")} className="loginbutton">Go Back</button>
      </div>       
      
    </div>
  );
};

export default ForgetPass;
