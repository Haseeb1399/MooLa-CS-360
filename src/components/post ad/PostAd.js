import React from 'react';
import Select from "react-select";
import "./PostAd.css"
import uploadimage from "../.././images/uploadimage.png"
import newimages from "../.././images/cow1.jpg"
import axios from "axios"
import {useState} from "react";

//Sex--> 1=Male, 2=Female
    


function PostAd() {
    const [sex, setSex]=useState("")
    const [teeth, setTeeth]=useState("")
    const [weight, setWeight]=useState("")
    const [Age, setAge]=useState("")
    const [breed, setBreed]=useState("")
    const [injury, setInjury]=useState("None")
    const [color, setColor]=useState("")
    const [addImage,setAddImage]=useState()
    const [price,setPrice]=useState("")
    const [desc,setDesc]=useState("")

    const submitForm=(event)=>{
        event.preventDefault()
        const newObj=new FormData()
        newObj.append("photo",addImage)
        newObj.append("sex",sex)
        newObj.append("teeth",teeth)
        newObj.append("weight",weight)
        newObj.append("Age",Age)
        newObj.append("breed",breed)
        newObj.append("injury",injury)
        newObj.append("color",color)
        newObj.append("price",price)
        newObj.append("desc",desc)
        newObj.append("addType",localStorage.getItem("permission"))
        newObj.append("sellerId",localStorage.getItem("id"))


        axios.post(process.env.REACT_APP_LOCAL_KEY+"/Ad/post/animal",newObj).then((res)=>{
            if(res.data.error){
              console.log(res.data.error)
            }else{
              console.log(res)
              //res.send("AD Posted");
            }
          })
    }

    const handleSexChange=(event)=>{
      setSex(event.value)
    }
    const handlePictureChange=(event)=>{
      setAddImage(event.target.files[0])
    }


  const sexes = [
    { value: 1, label: "Male", color: "#498205" },
    { value: 2, label: "Female", color: "#498205" },
    { value: 3, label: "Other", color: "#498205" },
  ];


return (
  <form onSubmit={submitForm} method='post' encType='multipart/form-data'>
  <div className='App'>
    <div className='First'>
      <div>
        <label className="logintext">Sex</label>
      </div>
      <div>
        <Select onChange={handleSexChange} options={sexes}/>
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

      <div>
        <label className="logintext">Price</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required"
          type="text" onChange={(event) => setPrice(event.target.value)}
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
            value="black"
          />
          Black
        </label>
      </div>
      <div>
        <label >
          <input
            onChange={(event) => setColor(event.target.value)}
            type="checkbox"
            value="white"
          />
          White
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
            onChange={(event) => setColor(event.target.value)}
            value="brown"
          />
          Brown
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
            onChange={(event) => setColor(event.target.value)}
            value="red"
          />
          Red
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
            onChange={(event) => setColor(event.target.value)}
            value="other"
          />
          Other
        </label>
      </div>
      <div>
      <label>Description</label>
      <textarea onChange={(event)=>setDesc(event.target.value)} ></textarea>
      </div>
    </div>

    <div className='Third'>
      <div><img className='upload' src={uploadimage}/></div>
      <div><input className='custom-file-input' type="file" onChange={handlePictureChange}/></div>
    </div>

  </div>
  <br></br>
  <hr></hr>
  <div className='buttonpos'><button type="submit" className="loginbutton">Post Ad</button></div>
</form>
  

);
};

export default PostAd;