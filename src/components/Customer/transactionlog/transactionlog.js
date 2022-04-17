import React, { useEffect, useState } from "react";
import "./transactionlog.css";
import pic from "../../../images/goatpic.jpeg"

const TransactionLog = () => {
    const [addArray,setAddArray]=useState()

    useEffect(()=>{
        
    })


  return (
    <div class="App">
        <div class="title">
            This Page Shows All Of Your Confirmed Orders
        </div>

        <div class="container">
            <div class="button-container">
                <input class="button-tl" type="submit" value="Open Ad"/>
                <input class="button-tl" type="submit" value="Lodge Complaint"/>
            </div>  
            
            <div class="picture">
                {/* add image here */}
                <img src={pic}/>
            </div>

            <div class="container-text">
                {/* add order details here */}
                <p>Order ID: #3212</p>
                <p>Advertisement ID: #52131</p>
                <p>Date: 24-11-2022</p>
                <p>Price: Rs 26000</p>
                <p>Payment: Cash</p>
                <p>Status: Delivered</p>
            </div> 

            
        </div>


        {/* extra logs remove later */}
        <div class="container">
            <div class="button-container">
                <input class="button-tl" type="submit" value="Open Ad"/>
                <input class="button-tl" type="submit" value="Lodge Complaint"/>
            </div>  
            
            <div class="container-text">
                {/* add order details here */}
                <p>Order ID: #3212</p>
                <p>Advertisement ID: #52131</p>
                <p>Date: 24-11-2022</p>
                <p>Price: Rs 26000</p>
                <p>Payment: Cash</p>
                <p>Status: Delivered</p>
            </div> 

            <div class="picture">
                {/* add image here */}
                <img src={pic}/>
            </div>
        </div>

        <div class="container">
            <div class="button-container">
                <input class="button-tl" type="submit" value="Open Ad"/>
                <input class="button-tl" type="submit" value="Lodge Complaint"/>
            </div>  
            
            <div class="container-text">
                {/* add order details here */}
                <p>Order ID: #3212</p>
                <p>Advertisement ID: #52131</p>
                <p>Date: 24-11-2022</p>
                <p>Price: Rs 26000</p>
                <p>Payment: Cash</p>
                <p>Status: Delivered</p>
            </div> 

            <div class="picture">
                {/* add image here */}
                <img src={pic}/>
            </div>
        </div>


    </div>
  );
};

export default TransactionLog;
