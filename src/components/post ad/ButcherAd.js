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
    const [progress,setProgress]=useState(0)
    const [picUrl,setPicUrl]=useState(uploadimage)

    const submitForm=(event)=>{
        event.preventDefault()
        console.log(addImage)
        const storageRef = ref(storage,`/files/${addImage.name}`)
        const uploadTask = uploadBytesResumable(storageRef,addImage);
        uploadTask.on("state_changed",
        (snapshot) => {
          const prog = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(prog);
        },
        (err=>{
          console.log(err)
        }),
        ()=>{
          getDownloadURL(ref(storage,storageRef.fullPath)).then(
            (url)=>{
              console.log(url)
              const newObj={
                "photo":url,
                "sex":sex,
                "teeth":teeth,
                "weight":weight,
                "Age":Age,
                "breed":breed,
                "injury":injury,
                "color":color,
                "price":price,
                "desc":desc,
                "addType":localStorage.getItem("permission"),
                "sellerId":localStorage.getItem("id")
              }
              axios.post(process.env.REACT_APP_LOCAL_KEY+"/Ad/post/animal",newObj).then((res)=>{
                  if(res.data.error){
                    console.log(res.data.error)
                  }else{
                    console.log(res)
                    alert("Add Posted!")
                    //res.send("AD Posted");
                  }
                })
                setPicUrl(url)
            }
          )
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
  <div>
      <label className="logintext">Animal Type</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required"
          type="text" onChange={(event) => setBreed(event.target.value)}
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

      <div><button type="submit" className="loginbutton">Post Ad</button></div>
    
  </div>
</form>
  

);
};

export default PostAd;