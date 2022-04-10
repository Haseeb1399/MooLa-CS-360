import React, { useState } from "react";
import "./viewtruck.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const ViewTruck = () => {
  return (
    <div class="App">
      <div className="first">
        <div># Animal(s) Added</div>
        <div>
            {/*image of animal here*/}
            <div>Advertisement ID: #id here</div>
            <div>Sex: sex here</div>
            <div>No. of Teeth: teeth here</div>
            <div>Weight: weight here</div>
            <div>Color: colors here</div>
            <div>Breed: breed here</div>
            <div>Age: age here</div>
            <div>injuries: injury here</div>
            <div>Price: Rs price here</div>
            <button>Remove From Truck</button>
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
