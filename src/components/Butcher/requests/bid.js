import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import "../../Customer/bidding/bid.css";
import image from "./../../../assets/image2.png"
import axios from "axios";

const ButhcherBid = (props) => {
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
      <div class = "App">
          
      </div>
  );
};

export default ButhcherBid;
