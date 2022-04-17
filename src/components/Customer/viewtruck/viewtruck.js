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
            <button className="removebutton">Go To Advertisement</button> 
            <button className="removebutton">Remove From Truck</button> 
          </div>
            
        </div>
        <div className="fillbox">
        </div>
      </div>

      <div className="second">
        <div className="info2">Please select one of the following</div>
        <div className="sfirst info2"> 
          <label className="label1 info2">
            <input className="info2" type="radio"></input>
            Home Delivery
          </label>
          <label className="label1 info2">
            <input className="info2" type="radio"></input>
            Pick Up From Seller
          </label>
          <div className="info2">Subtotal</div>
          <div className="info2">Delivery Fees</div>
          <div className="info2">Total</div>
        </div>

        <div className="ssecond">
          <div className="info3">Rs sub</div><br></br>
          <div className="info3">Rs df</div><br></br>
          <div className="info3">Rs total</div>
        </div>
        <div><button className="placebutton">Place Order</button></div>
      </div>
    </div>
  );
};

export default ViewTruck;
