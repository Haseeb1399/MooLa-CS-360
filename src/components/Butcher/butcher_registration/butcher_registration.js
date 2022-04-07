import React from "react";
import "./butcher_registration.css";
import image from "./../../../assets/preview.jpeg"

const ButcherRegistration = () => {

  return (
    <div class="App">
      <h1 class="title">BUTCHER REGISTRATION</h1>
      <div class="layout">
        <div class="column" id="left">
          <h1 class="subtitle">Please fill in the following details</h1>
          <form id="myform" action="#" method="post">
            <div>
              <label for="Name">Name</label>
              <input class="input" placeholder="Type Here" type="text" name="Name" id="Name" required/>
            </div>
            <div>
              <label for="Username">Username</label>
              <input class="input username" placeholder="Type Here" type="text" name="Username" id="Username"/>  
              <p>Username will be displayed to other users on the app</p>
            </div>
            <div>
              <label for="Pass">Password</label>
              <input class="input" placeholder="Type Here" type="password" name="Pass" id="Pass"/>
            </div>
            <div>
              <label for="Email">Email</label>
              <input class="input" placeholder="Type Here" type="email" name="Email" id="Email"/>
            </div>
            <div>
              <label for="Location">Location</label>
              <select class="input select" name="Location" id="Location">
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
      <input class="button" type="submit" form="myform" value="Register"/>
    </div>
  );
};

export default ButcherRegistration;
