import React from "react";
import "./profile.css";
import {Link} from "react-router-dom";
import pic from "../../images/profilepic.png"


const Profile = () => {

  return (
    <div class="App">
        <div class="details-container-profile">
            <form class="form-container" id="change-details-form">
                <label for="type">User Type</label>
                <input type="text" class="details-input" id="type"/>
                <label for="name">Name</label>
                <input type="text" class="details-input" id="name"/>
                <label for="username">Username</label>
                <input type="text" class="details-input" id="username"/>
                <label for="email">Email</label>
                <input type="text" class="details-input" id="email"/>
                <label for="location">Location</label>
                <select type="select" class="details-input select-profile" id="location">
                   {/* add location options here */}
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>

                </select>
                <input type="submit" class="button-profile submit-profile" value="Change Password"/>
            </form>
        </div>
        <div class="picture-container-profile">
            <div class="picture-profile">
                <img src={pic}/>
            </div>
            <div class="picture-buttons-profile">
                <a href="#" class="button-profile remove-photo">Change Photo</a>
                <a href="#" class="button-profile change-photo">Remove Photo</a>
            </div> 

        </div>
    </div>
  );
};

export default Profile;