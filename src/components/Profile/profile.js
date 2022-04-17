import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import {Link} from "react-router-dom";
import pic from "../../images/profilepic.png"
import storage from '../firebase/firebase'
import {ref,getDownloadURL,uploadBytesResumable, uploadBytes} from 'firebase/storage'



const Profile = () => {
    const [userType,setUserType]=useState("")
    const [userName,setUserName]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const [newProfile,setnewProfile]=useState()
    const [newUrl,setNewUrl]=useState()
    useEffect(()=>{
        axios.get(process.env.REACT_APP_LOCAL_KEY+"/User/getDetails/"+localStorage.getItem("id")).then((data)=>{
            const userData=data.data.data
            if(userData.permissions == 1){
                setUserType("Buyer")
            }else if(userData.permissions == 2){
                setUserType("Butcher")
            }else if(userData.permissions == 3){
                setUserType("Seller")
            }
            setUserEmail(userData.email)
            setUserName(userData.username)
            setNewUrl(userData.photo)
        }).catch((err)=>{
            console.log(err)
        })
    })

    const handleRemovePicture=()=>{
        axios.get(process.env.REACT_APP_LOCAL_KEY+"/User/removePicture/"+localStorage.getItem("id")).then(data=>{
            alert("Photo Removed")
        }).catch((err)=>{
            alert("Error Occured!")
        })
    }

    const handlePictureChange=(event)=>{
        const storageRef = ref(storage,`/files/${event.target.files[0].name}`)
        const uploadTask = uploadBytesResumable(storageRef,event.target.files[0]);
        uploadTask.on("state_changed",
        (snapshot)=>{
            const prog= (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (err=>{
            console.log(err)
        }),
        ()=>{
            getDownloadURL(ref(storage,storageRef.fullPath)).then(
                (url)=>{
                    const newObj={
                        url:url
                    }
                    axios.post(process.env.REACT_APP_LOCAL_KEY+"/User/updatePicture/"+localStorage.getItem("id"),newObj).then((data)=>{
                        if(data.error){
                            console.log(data.error)
                        }else{
                            setNewUrl(url)
                        }
                    })
                }
            )
        }
        )
    }


  return (
    <div class="App">
        <div class="details-container-profile">
            <form class="form-container" id="change-details-form">
                <label for="type">User Type</label>
                <input type="text" class="details-input" id="type" value={userType}/* add the users old details in the value properties *//>
                <label for="username">Username</label>
                <input type="text" class="details-input" id="username" value={userName}/>
                <label for="email">Email</label>
                <input type="text" class="details-input" id="email" value={userEmail}/>
                <input type="submit" class="button-profile submit-profile" value="Change Password"/>
            </form>
        </div>
        <div class="picture-container-profile">
            <div class="picture-profile">
                <img src={newUrl}/>
            </div>
            <div class="picture-buttons-profile">

                <a onClick={handleRemovePicture} className="button-profile remove-photo">Remove Photo</a>
                <label id="file_upload" class="button-profile change-photo">
                    <input onChange={handlePictureChange}  type="file" />
                    Change Photo
                </label>
                
            </div> 

        </div>
    </div>
  );
};

export default Profile;