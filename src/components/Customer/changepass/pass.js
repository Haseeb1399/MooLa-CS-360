import React, { useEffect } from "react";
import "./pass.css";
import { useState } from "react";

import axios from "axios";
import {useNavigate} from 'react-router-dom';
const bcrypt = require('bcryptjs')

const ChangePass = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [fromDB, setDB] = useState("");
  const [changed, setChanged] = useState("");
  const [changed1, setChanged1] = useState("");
  const [salted, setSalted] = useState("");
  let check = false;

  function Move() {
      navigate('/profile');
  }

    function hashIt(pass,salt) {
    //const salty = await bcrypt.genSalt(10);
    // console.log(salt)
    const hashed =  bcrypt.hashSync(pass,salt); //STORE SALT ON DB 
    return hashed
  }

  async function hashIt1(pass) {
    const salt = await bcrypt.genSalt(10);
    // console.log(salt)
    const hashed = await bcrypt.hash(pass,salt); //STORE SALT ON DB 
    return [hashed,salt]
  }

  const Submit =(event) => {
    event.preventDefault();
    if (changed != changed1) {
      alert("Your new passwords don't match!")
      window.location.reload()
    }
    axios.post(process.env.REACT_APP_LOCAL_KEY+'/User/getpass',{id:localStorage.getItem("id")}).then(function (res) {
      //console.log(res.data[0].password)
      setDB(res.data[0].password);
      setSalted(res.data[0].salt)
      //console.log(res.data[0].salt)
    }).catch(function(err) {
      console.log(err)
    })
    
    let x = ""
    //let hash_curr = ""
    try{
      x = hashIt(current,salted);
    }
    catch(err) {
      console.log(err)
    }
    
      if(fromDB != x) {
        window.location.reload()
        // console.log(fromDB)
        // console.log(val)
        // console.log(current)
        //window.location.reload()
       }else{
        console.log("same")
        // let new_pass = ""
        hashIt1(changed).then(val1 => {
          console.log(val1)
          const newObj = {
            "new":val1[0],
            "type":localStorage.getItem("permission"),
            "salted":val1[1],
            "id":localStorage.getItem("id")
          }
    
          axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/updatepass",newObj).then((res)=> {
            if(res.data.error) {
              console.log(res.data.error)
            }
            else {
              console.log("Password Updated")
              navigate('/profile')
            }
          })
          }).catch(err => {console.log(err)})
        
  
      }
  
  }

  return (
    <div class="App">
      <h1 className="logintitle">CHANGE PASSWORD</h1>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Current Password</label>
        <input 
          type="password" onChange={(event) => setCurrent(event.target.value)}
        />
      </div>
      <div className="pls">
        <label placeholder="Type Here" className="logintext">New Password</label>
        <input 
          type="password" onChange={(event) => setChanged(event.target.value)}
        /> 
      </div> 
      <div className="pls">
        <label placeholder="Type Here" className="logintext">Confirm New Password</label>
        <input 
          type="password" onChange={(event) => setChanged1(event.target.value)}
        /> 
      </div>
      <button onClick={Move} className="chnagebutton">Go Back</button>
      <button onClick = {Submit} className="chnagebutton">Change Password</button>       
      
    </div>
  );
};

export default ChangePass;
