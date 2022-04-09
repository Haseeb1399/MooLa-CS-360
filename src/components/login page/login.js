import React from "react";
import "./login.css";
import { useState, useContext } from "react";
import { authContext } from "../../Helpers/authContext";
import { setPermissionContext } from '../../Helpers/setPermissions';
import axios from "axios";

const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {setAuthState} = useContext(authContext)
  const {setPermissionState} = useContext(setPermissionContext)
  
  // const getUsername=(event)=>{
  //   axios.get(process.env.REACT_APP_LOCAL_KEY+"/User/getUsername",{
  //     headers:{
  //       accessToken:localStorage.getItem("accessToken")
  //     }
  //   }).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }
  const submitForm=(event)=>{
    event.preventDefault()
    const newObj={
      email:email,
      password:password
    }
    axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/login",newObj).then((res)=>{
      if(res.data.error){
        console.log(res.data.error)
      }else{
        localStorage.setItem("accessToken",res.data.token)
        localStorage.setItem("permission",res.data.permission)
        localStorage.setItem("id",res.data.id)
        localStorage.setItem("username",res.data.username)
        setAuthState(true)
        setPermissionState(true)
        window.location="/"
      }
    })
  }


  return (
    <div class="App">
      <h1 className="logintitle">LOGIN</h1>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Email</label>
        <input onChange={(event)=>setEmail(event.target.value)}
          type="text"
        />
      </div>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Password</label>
        <input onChange={(event)=>setPassword(event.target.value)}
          type="password"
        /> 
      </div>     
      <button onClick={submitForm} className="loginbutton">Login</button>
    </div>
  );
};

export default LoginPage;
