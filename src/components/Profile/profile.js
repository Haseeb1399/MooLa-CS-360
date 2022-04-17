import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import {Link} from "react-router-dom";
import pic from "../../images/profilepic.png"
import storage from '../firebase/firebase'
import { useNavigate } from "react-router-dom";
import {ref,getDownloadURL,uploadBytesResumable, uploadBytes} from 'firebase/storage'

const Profile = () => {
    const navigate = useNavigate();
    function Go() {
        navigate('/password');   
    }
    const [userType,setUserType]=useState("")
    const [userName,setUserName]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const [newProfile,setnewProfile]=useState()
    const [newUrl,setNewUrl]=useState(pic)
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
            if(userData.photo == "null"){
                setNewUrl(pic)
            }else{
                setNewUrl(userData.photo)
            }
        }).catch((err)=>{
            console.log(err)
        })
    })

    const handleRemovePicture=()=>{
        axios.get(process.env.REACT_APP_LOCAL_KEY+"/User/removePicture/"+localStorage.getItem("id")).then(data=>{
            alert("Photo Removed")
            window.location="/profile"
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
                <label for="location">Location</label>
                <select type="select" class="details-input select-profile" id="location">
                   {/* add location options here */}
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>

                </select>
                <button onClick={Go} className="changebutton">Change Password</button>
            </form>
        </div>
        <div class="picture-container-profile">
            <div class="picture-profile">
                <img src={newUrl}/>
            </div>
            <div class="picture-buttons-profile">

                <a onClick={handleRemovePicture} className="button-profile remove-photo">Remove Photo</a>
                <label id="file_upload" class="button-profile change-photo">
                    <input class="profile-input" onChange={handlePictureChange}  type="file" />
                    Change Photo
                </label>
            </div> 

        </div>
    </div>
  );
};

export default Profile;