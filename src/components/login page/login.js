import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const navigator = useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  function Back() {
    window.location = '/'
  }

  function Go() {
    navigator('/forgetPass')
  }
  
  const submitForm=(event)=>{
    event.preventDefault()
    const newObj={
      email:email,
      password:password
    }

    axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/login",newObj).then((res)=>{
      if(res.data.error){
        alert(res.data.error)
        window.location="/"
        console.log(res.data.error)
      }else{
        localStorage.setItem("accessToken",res.data.token)
        localStorage.setItem("permission",res.data.permission)
        localStorage.setItem("id",res.data.id)
        localStorage.setItem("username",res.data.username)
        console.log(res.data.permission)
        if(res.data.permission == 1){
          window.location="/about"
        }else if(res.data.permission==2){
          window.location="/about"
        }else if(res.data.permission==3){
          window.location="/about"
        }
        else if(res.data.permission==3){
          window.location="/admin";
        }
      }
    })
  }

  
  return (
    <div class="App">
      <h1 className="logintitle">LOGIN</h1>
      <div>
        <label placeholder="Type Here" >Email</label>
        <input onChange={(event)=>setEmail(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <label placeholder="Type Here" >Password</label>
        <input onChange={(event)=>setPassword(event.target.value)}
          type="password"
        /> 
      </div>    
      <div>
        <button onClick={submitForm} className="loginbutton">Login</button>
      </div> 
      <div>
        <button onClick = {Back} className = "loginbutton">Go Back</button>
        <button onClick = {Go} className = "loginbutton">Forgot Password?</button>
      </div>
    </div>
  );
};

export default LoginPage;
