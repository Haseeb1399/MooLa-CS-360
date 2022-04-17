import React from 'react';
import Select from "react-select";
import "./ButcherAd.css"
import uploadimage from "../.././images/uploadimage.png"
import newimages from "../.././images/cow1.jpg"
import axios from "axios"
import {useState} from "react";
import storage from '../firebase/firebase'
import {ref,getDownloadURL,uploadBytesResumable, uploadBytes} from 'firebase/storage'

//Sex--> 1=Male, 2=Female
    


function PostAd() {
    const [weight, setWeight] = useState("");
    const [breed, setBreed] = useState("");

    const submitForm=(event)=>{
        event.preventDefault()
        const newObj = {
          weight:weight,
          breed:breed
        }
        axios.post(process.env.REACT_APP_LOCAL_KEY+'/Ad/add/butchAd',newObj).then((data)=>{
          console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
        }
    

    

    


return (
  <form onSubmit={submitForm} method='post' encType='multipart/form-data'>
  <div className='App'>
      <div>
        <label className="logintext">Weight</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required (KG)"
          type="number" onChange={(event) => setWeight(event.target.value)}
        />
      </div>

      <div>
        <label className="logintext">Breed</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required"
          type="text" onChange={(event) => setBreed(event.target.value)}
        />
      </div>

      <div className='buttonpos'><button type="submit" className="loginbutton">Post Ad</button></div>
    
  </div>
</form>
  

);
};

export default PostAd;