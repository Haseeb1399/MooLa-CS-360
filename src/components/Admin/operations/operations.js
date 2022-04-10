import React, { useState } from "react";
import "./viewtruck.css";
import image1 from "./../../../assets/block.png"
import image2 from "./../../../assets/best-price.png"
import axios from "axios";

const Ops = () => {
  return (
    <div class="App">
      <div className="first">
        <div><img src={image1}></img></div>
        <div><button>Ban A User</button></div>
      </div>
      <div className="second">
        <div><img src={image2}></img></div>
        <div><button>Edit Minimum Prices</button></div>
      </div>
    </div>
  );
};

export default Ops;
