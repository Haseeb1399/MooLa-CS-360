import React from 'react';
import Select from "react-select";
import "./PostAd.css"
import uploadimage from "../.././images/uploadimage.png"
import newimages from "../.././images/cow1.jpg"
import axios from "axios"
import {useState} from "react";


    


function PostAd() {

    // axios.post(process.env.REACT_APP_LOCAL_KEY+"/Ad/post/animal",newObj).then((res)=>{
    //     if(res.data.error){
    //       console.log(res.data.error)
    //     }else{
    //     //   localStorage.setItem("accessToken",res.data.token)
    //     //   localStorage.setItem("permission",res.data.permission)
    //     //   localStorage.setItem("id",res.data.id)
    //     //   localStorage.setItem("username",res.data.username)
    //       if(res.data.permission == 1){
    //         window.location="/buyer/main"
    //       }else if(res.data.permission==2){
    //         window.location="/butcher/main"
    //       }else if(res.data.permission==3){
    //         window.location="/seller/main"
    //       }
    //     }
    //   })


    const [sex, setSex]=useState("")
    const [teeth, setTeeth]=useState("")
    const [weight, setWeight]=useState("")
    const [Age, setAge]=useState("")
    const [breed, setBreed]=useState("")
    const [injury, setInjury]=useState("")
    const [color, setColor]=useState("")

    const submitForm=(event)=>{
        event.preventDefault()
        const newObj={
          sex:sex,
          teeth:teeth,
          weight:weight,
          Age:Age,
          breed:breed,
          injury:injury,
          color:color
        }
        axios.post(process.env.REACT_APP_LOCAL_KEY+"/Ad/post/animal",newObj).then((res)=>{
            if(res.data.error){
              console.log(res.data.error)
            }else{
              res.send("AD Posted");
            }
          })
    }



  const sexes = [
    { value: 1, label: "Male", color: "#498205" },
    { value: 2, label: "Female", color: "#498205" },
    { value: 3, label: "Other", color: "#498205" },
  ];

  const Img = ({ success }) => (
    <img
      style={{ width: '48px', height: '48px', position: 'absolute' }}
      src={success ? newimages  : uploadimage}
    />
  );

return (
  <div className='App'>
    <div className='First'>
      <div>
        <label className="logintext">Sex</label>
      </div>
      <div>
        <Select options={sexes}/>
        <input onChange={(event)=>setSex(event.target.value)}/>
      </div>

      <div>
        <label className="logintext">No. of Teeth</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required"
          type="number" onChange={(event) => setTeeth(event.target.value)}
        />
      </div>  

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
    </div>

    <div className='Second'>
      <div>
        <label className="logintext">Age</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required (Years)"
          type="number" onChange={(event) => setAge(event.target.value)}
        />
      </div>

      <div>
        <label className="logintext">Injuries</label>
      </div>
      <div>
        <input className='boxinput' placeholder='Optional'
          type="text" onChange={(event) => setInjury(event.target.value)}
        />
      </div> 

      <div>
        <label className='logintext'>Color</label>
      </div>
      <div>
        <label >
          <input
            onChange={(event) => setColor(event.target.value)}
            type="checkbox"
          />
          Black
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          White
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Brown
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Red
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Other
        </label>
      </div>
      <div className='buttonpos'><button onClick={submitForm} className="loginbutton">Post Ad</button></div>
        
    </div>
      
    <div className='Third'>
      <div><img className='upload' src={uploadimage}/></div>
      <div><input className='custom-file-input' type="file" multiple accept="image/*"/></div>
    </div>
    
  </div>

);
};

export default PostAd;