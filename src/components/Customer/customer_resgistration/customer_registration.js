import React, { useState } from "react";
import "./customer_registration.css";
import image from "./../../../assets/preview.jpeg"
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const CustomerRegistration = () => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [phoneNumb,setPhoneNumb]=useState("")
  const [location,setLocation]=useState("")
  const navigate = useNavigate();

  const onSubmit=(event)=>{
    event.preventDefault()
    if(userName == "" || password == "" || email == "" || email == "" || location == "" || phoneNumb == ""){
      window.location.reload();
    }
    else {

      const newObject={
        username:userName,
        pass:password,
        email:email,
        address:location,
        phone:phoneNumb,
        permissions:1,
        ban_bool:0
      }
      if(!email.includes("@")){
        alert("Please enter a correct email!")
        return;
      }

      axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/add",newObject,{
        headers:{ "Content-Type": "application/json; charset=UTF-8" }
      }).then((response)=>{
        console.log(response)
        navigate('/')
      // window.location('/')
      }).catch((err)=>{
        console.log(err)
      })
    }
    
  }
  
  const handleName = (event)=>{
    setUserName(event.target.value)
  }

  const handlePass = (event)=>{
    setPassword(event.target.value)
  }
  
  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handlePhone = (event)=>{
    setPhoneNumb(event.target.value)
  }
  const handleLocation=(event)=>{
    setLocation(event.target.value)
  }
  return (
    <div class="App">
      <h1 class="title">CUSTOMER REGISTRATION</h1>
      <h1 className="subtitle">Please fill in the following details</h1>
      <form id="myform" action="#" method="post">
            <div>
              <label for="Username">Username</label>
              <input onChange={handleName} class="input username" placeholder="Type Here" type="text" name="Username" id="Username"/>  
              <p>Username will be displayed to other users on the app</p>
            </div>
            <div>
              <label for="Pass">Password</label>
              <input onChange={handlePass} class="input" placeholder="Type Here" type="password" name="Pass" id="Pass"/>
            </div>
            <div>
              <label for="Email">Email</label>
              <input onChange={handleEmail} class="input" placeholder="Type Here" type="email" name="Email" id="Email"/>
            </div>
            <div>
              <label for="Phone">Cell No.</label>
              <input onChange={handlePhone} class="input" placeholder="Type Here" type="text" name="phpne" id="phone"/>
            </div>
            <div>
              <label for="Location">Location</label>
              <select onChange={handleLocation} class="input select" name="Location" id="Location">
                <option value="default">Please Choose your location</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
          </form>
        <Link to = '/signup'><button class = "button">Go Back</button></Link>
        <input onClick={onSubmit} class="button" type="submit" form="myform" value="Register"/>
        
      </div>
      
  );
};

export default CustomerRegistration;
