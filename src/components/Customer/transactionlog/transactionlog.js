import React, { useEffect, useState } from "react";
import "./transactionlog.css";
import pic from "../../../images/goatpic.jpeg"
import axios from "axios";

const TransactionLog = () => {
    const [addArray,setAddArray]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get(process.env.REACT_APP_LOCAL_KEY+'/Cart/getTransaction/'+localStorage.getItem("id")).then((res)=>{
            setAddArray(res.data.res[0].log)
            setLoading(false)
        })
    },[])

    if(loading){
        return(<div>
            Loading Transactions
        </div>)
    }

  return (
    <div class="App">
        <div class="title">
            This Page Shows All Of Your Confirmed Orders
        </div>
        {addArray.map((val)=>{
            {console.log(val)}
            return(
                <div class="container">
            <div class="button-container">
                <input class="button-tl" type="submit" value="Open Ad"/>
                <input class="button-tl" type="submit" value="Lodge Complaint"/>
            </div>  
            
            <div class="picture">
                {/* add image here */}
                <img src={val.photo}/>
            </div>

            <div class="container-text">
                {/* add order details here */}
                <p>Order ID:#{val._id}</p>
                <p>Price: Rs 26000</p>
                <p>Payment: Cash</p>
                <p>Status: Delivered</p>
            </div> 

            
                </div>
            )
        })}
    </div>
  );
};

export default TransactionLog;
