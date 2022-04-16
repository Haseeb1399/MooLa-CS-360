import React, { useState } from "react";
import "./bid.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const Bid = () => {
  return (
    <div class="App">
      <div class="title-bid">Advertisement ID: insert id</div>

      <div class="first-bid">
        <div class="subtitle-bid">DETAILS</div>
        <div class="break"></div>
          <div class="bid-details">
            <div class="bid-text">
              <p>Sex: sex here</p>
              <p>No. of Teeth: teeth here</p>
              <p>Weight: weight here</p>
              <p>Color: colors here</p>
              <p>Breed: breed here</p>
              <p>Age: age here</p>
              <p>injuries: injury here</p>
            </div>
            <a class="maps" target={"_blank"} href="https://www.google.com/maps/place/Sohrab+Goth+Gaye+Mandi/@24.9912912,67.164752,15z/data=!4m2!3m1!1s0x0:0xe0b72951539871aa?sa=X&ved=2ahUKEwjViZ7Lvon3AhVBRBoKHTM5CWUQ_BJ6BAg1EAU">
                  <img src={image}></img>
            </a>
          </div>
        <div>
            
        </div>
        <div>images from database should come here</div>
      </div>

      <div class="second-bid">
        <div class="subtitle-bid">BIDDING</div>
        <div class="break"></div>
        <div class="bid-options">
          <div class="bid-text">
            <p>Starting Price: price here</p>
            <p>Start Time: time here</p>
            <p>End Time: time here</p>
            <p>Current Bid: bid here</p>
            <p>Time Since Last Bid: time here</p>
          </div>
        </div>
        <div class="break"></div>
        <div class="bidding">
            <p>Place Your Bid: <button class="button">Bid 1</button> <button class="button">Bid 2</button> <button class="button">Bid 3</button> </p> 
            <p>OR</p>
            <p><input class="input-bid" placeholder="Type Here"></input> <button class="button">Bid</button></p>
        </div>
      </div>
    </div>
  );
};

export default Bid;
