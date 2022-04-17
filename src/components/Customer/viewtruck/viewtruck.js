import React, { useState } from "react";
import "./viewtruck.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const ViewTruck = () => {
  return (
    <div class="App">
      <div className="first">

        <div className="ffirst">
          <div># Animal(s) Added</div>
        </div>
        <div className="fsecond">
          <div>Total: Rs price</div>
        </div>
        <div className="contain">
          <div className="ffirst">
            <img className="pic" src={image}></img>           
          </div>

          <div className="fsecond info" >
            <div>Price: Rs price here</div>
            <button className="gobutton">Go To Advertisement</button> 
            <button className="removebutton">Remove From Truck</button> 
          </div>
            
        </div>
        <div className="fillbox">
        </div>
      </div>

      <div className="second">
        <div>Please select one of the following</div>
        <div>Home Delivery</div>
        <div>Pick Up From Seller</div>
        <div>Subtotal: Rs pricehere</div>
        <div>Delivery Fees: Rs pricehere</div>
        <div>Total: Rs total here</div>
        <div><button>Place Order</button></div>
      </div>
    </div>
  );
};

export default ViewTruck;
