import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import "./bid.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const Bid = (props) => {
  const location = useLocation()
  const data = location.state.data
  const [bidAmount,setBidAmount]=useState(0)
  const [startBid,setStartBid]=useState(0)
  const [enteredBid,setEnteredBid]=useState(0)
  const [bidID,setBidID]=useState("")

  useEffect(()=>{
    axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/getLatestBid/'+data._id).then((res)=>{
      setStartBid(res.data[0].bid_value_original)
      setBidAmount(res.data[0].bid_value)
      setBidID(res.data[0]._id);
    }).catch((err)=>{
      console.log(err)
    })
  })
  const handleChangeBid=(event)=>{
    setEnteredBid(event.target.value)
  }
  
  const handleBids = (bidData)=>{
    console.log(bidData)
    let newBid=0
    if(bidData.type==1){
      newBid = bidAmount + 1000;
    }else if(bidData.type==2){
      newBid = bidAmount+2000;
    }else if(bidData.type==3){
      newBid=bidAmount+5000;
    }else{
      newBid=bidData.value;
      if(newBid<=bidAmount){
        alert("Bid Amount is less than current bid");
        window.location="/marketplace";
      }
    }
    const newObj={
      newBid:newBid,
      id:bidID,
      buyer_id:localStorage.getItem("id")
    }
    
    axios.post(process.env.REACT_APP_LOCAL_KEY+'/Ad/postbid',newObj).then((res)=>{
      setBidAmount(res.data.value)
      alert("Your bid has been made!")
    }).catch((err)=>{
      alert("Error in making your bid!");
      window.location="/marketplace";
    })

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
            <p>Place Your Bid: <button onClick={()=>handleBids({type:1,value:0})} class="button">Bid 1</button> <button onClick={()=>handleBids({type:2,value:0})} class="button">Bid 2</button> <button onClick={()=>handleBids({type:3,value:0})} class="button">Bid 3</button> </p> 
            <ul>
              <li>Bid 1: Current Bid + 1000 PKR</li>
              <li>Bid 2: Current Bid + 2000 PKR</li>
              <li>Bid 3: Current Bid + 5000 PKR</li>
            </ul>
            <p>OR</p>
            <p><input onChange={handleChangeBid} class="input-bid" placeholder="Type Here"></input> <button onClick={()=>handleBids({type:4,value:enteredBid})} class="button">Bid</button></p>
        </div>
      </div>
    </div>
  );
};

export default Bid;
