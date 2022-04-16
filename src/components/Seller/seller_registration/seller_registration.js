import React,{useState} from "react";
import "./seller_registration.css";
import image from "./../../../assets/preview.jpeg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SellerRegistration = () => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [phoneNumb,setPhoneNumb]=useState("")
  const [location,setLocation]=useState("")
  const navigate = useNavigate();

  const onSubmit=(event)=>{
    event.preventDefault()
    const newObject={
      username:userName,
      pass:password,
      email:email,
      address:location,
      phone:phoneNumb,
      permissions:3,
      ban_bool:0,
      rating:0,
      numSold:0
    }
    if(!email.includes("@")){
      alert("Please Enter a correct email")
      return
    }
    console.log(newObject)
    axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/add",newObject,{
      headers:{ "Content-Type": "application/json; charset=UTF-8" }
    }).then((response)=>{
      console.log(response)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    })
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
      <h1 class="title">SELLER REGISTRATION</h1>
      <div class="layout">
        <div class="column" id="left">
          <h1 class="subtitle">Please fill in the following details</h1>
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
                <option defaultValue>Select Location</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
          </form>
        </div>
        <div class="column" id="right">
          <h1 class="subtitle">Please upload a profile photo</h1>
          <div class="picture">
            <img class="preview" src={image}></img>
          </div>
          <form action="#" method="post" enctype="multipart/form-data">
            <input class="file" type="file" name="image" id="image"/>
            <label for="image" class="upload" >Upload Image</label>
          </form>
        </div>
      </div>
      <input onClick={onSubmit} class="button" type="submit" form="myform" value="Register"/>
    </div>
  );
};

export default SellerRegistration;
