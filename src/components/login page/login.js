import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import {useNavigate, useEffect} from 'react-router-dom';

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
  const [ban, setBan] = useState("");

  
  
  
  
  const submitForm=(event)=>{
    event.preventDefault()


    


    const newObj={
      email:email,
      password:password
    }


    const obj = {
      "email":email
    }
    axios.post(process.env.REACT_APP_LOCAL_KEY+'/User/getban',obj).then((data)=>{
        setBan(data.data)
        //setBan(data.data);
        //console.log(data.data[0])

        axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/login",newObj).then((res)=>{
          if(res.data.error){
            alert(res.data.error)
            window.location="/"
            console.log(res.data.error)
          }else{
            let data = ban[0];
            //console.log(data.ban_bool)
            if(data.ban_bool == true) {
              alert("You are banned")
              window.location = '/'
            }
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
            else if(res.data.permission==4){
              window.location="/admin";
            }
          }
        })


    }).catch((err)=>{
        console.log(err)
    })

    
  }

  
  return (
    <div class="App">
      <h1 className="logintitle">LOGIN</h1>
      <div>
        <label >Email</label>
        <input placeholder="Type Here" onChange={(event)=>setEmail(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <label >Password</label>
        <input placeholder="Type Here" onChange={(event)=>setPassword(event.target.value)}
          type="password"
        /> 
      </div>    
      <div>
        <button onClick={submitForm} className="logbutton">Login</button>
      </div> 
      <div>
        <button onClick = {Back} className = "logbutton">Go Back</button>
        <button onClick = {Go} className = "logbutton">Forgot Password?</button>
      </div>
    </div>
  );
};

export default LoginPage;
