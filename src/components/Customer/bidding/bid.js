import React, { useState } from "react";
import "./bid.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const Bid = () => {
  return (
    <div class="App">
      <div>Advertisement ID: insert id</div>

      <div className="first">
        <div>Details</div>
        <div className="third">
            <div>Sex: sex here</div>
            <div>No. of Teeth: teeth here</div>
            <div>Weight: weight here</div>
            <div>Color: colors here</div>
            <div>Breed: breed here</div>
            <div>Age: age here</div>
            <div>injuries: injury here</div>
        </div>
        <div className="fourth">
            <a target={"_blank"} href="https://www.google.com/maps/place/Sohrab+Goth+Gaye+Mandi/@24.9912912,67.164752,15z/data=!4m2!3m1!1s0x0:0xe0b72951539871aa?sa=X&ved=2ahUKEwjViZ7Lvon3AhVBRBoKHTM5CWUQ_BJ6BAg1EAU">
                <img src={image}></img>
            </a>
        </div>
        <div>images from database should come here</div>
      </div>

      <div className="first">
        <div>Bidding</div>
        <div>Starting Price: price here</div>
        <div>Start Time: time here</div>
        <div>End Time: time here</div>
        <div>Current Bid: bid here</div>
        <div>Time Since Last Bid: time here</div>
        <div>Place Your Bid: <button>Bid 1</button> <button>Bid 2</button> <button>Bid 3</button> </div> 
        <div>OR</div>
        <div><input placeholder="Type Here"></input> <button>Bid</button></div>
      </div>
    </div>
  );
};

export default Bid;
