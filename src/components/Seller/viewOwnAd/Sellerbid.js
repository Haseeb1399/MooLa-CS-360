import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import "./Sellerbid.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const SellerBidPage = (props) => {
  const location = useLocation()
  const data = location.state.data
  console.log(data)
  const [bidAmount,setBidAmount]=useState(0)
  const [startBid,setStartBid]=useState(0)
  const [buyerId,setBuyerId]=useState("")

  useEffect(()=>{
    axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/getLatestBid/'+data._id).then((res)=>{
      console.log(res)
      setStartBid(res.data[0].bid_value_original)
      setBidAmount(res.data[0].bid_value)
      setBuyerId(res.data[0].buyer_id)
    }).catch((err)=>{
      console.log(err)
    })
  })
  
  const confirmSell=()=>{
    console.log(buyerId)
    if(buyerId==null){
      alert("No bids have been placed on this ad! Cannot sell")
      window.location="/seller/viewlistings"
    }else{
      const newObj={
        buyer_id:buyerId,
        sellPrice:bidAmount
      }
      axios.post(process.env.REACT_APP_LOCAL_KEY+'/Ad/markSold/'+data._id,newObj).then((res)=>{
        console.log(res)
        const tempObj={
          ad_id:data._id
        }
        axios.post(process.env.REACT_APP_LOCAL_KEY+'/Ad/addToBuyer/'+buyerId,tempObj).then((res)=>{
          console.log(res)
          alert("SOLD!")
          window.location="/seller/viewlistings"
        })
      })
    }
  }


  return (
    <div class="App">
      <div class="title-bid">Advertisement ID:{data._id}</div>

      <div class="first-bid">
        <div class="subtitle-bid">DETAILS</div>
        <div class="break"></div>
          <div class="bid-details">
            <div class="bid-text">
              <p>Sex: {data.animal_id.sex}</p>
              <p>No. of Teeth: {data.animal_id.teeth}</p>
              <p>Weight: {data.animal_id.weight}</p>
              <p>Color: {data.animal_id.color}</p>
              <p>Breed: {data.animal_id.type}</p>
              <p>Age: {data.animal_id.age}</p>
              <p>injuries: {data.animal_id.injury}</p>
            </div>
            <a class="maps" target={"_blank"} href="https://www.google.com/maps/place/Sohrab+Goth+Gaye+Mandi/@24.9912912,67.164752,15z/data=!4m2!3m1!1s0x0:0xe0b72951539871aa?sa=X&ved=2ahUKEwjViZ7Lvon3AhVBRBoKHTM5CWUQ_BJ6BAg1EAU">
                  <img src={image}></img>
            </a>
          </div>
        <div>
            
        </div>
        <div><img src={data.photo}/></div>
      </div>

      <div class="second-bid">
        <div class="subtitle-bid">BIDDING</div>
        <div class="break"></div>
        <div class="bid-options">
          <div class="bid-text">
            <p>Starting Price:{startBid}</p>
            <p>Current Bid: {bidAmount}</p>
          </div>
        </div>
        <div class="break"></div>
        <div class="bidding">
          <p>Sell to the highest Bidder? <button onClick={confirmSell} class="button">SELL!</button> </p>     
        </div>
      </div>
    </div>
  );
};

export default SellerBidPage;
