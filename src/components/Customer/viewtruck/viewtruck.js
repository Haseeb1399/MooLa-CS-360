import React, { useEffect, useState } from "react";
import "./viewtruck.css";
import image from "./../../../assets/image2.png"
import axios from "axios";
import {Link} from 'react-router-dom'

const ViewTruck = () => {
  const [animal,setAnimal]=useState()
  const [delivery,setDelivery]=useState("")
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    axios.get(process.env.REACT_APP_LOCAL_KEY+'/Cart/getItem/'+localStorage.getItem("id")).then((res)=>{
      setAnimal(res.data[0])
      console.log(res.data[0])
      if(res.data[0].cart==null){
        setLoading(true)
      }else{
        setLoading(false)
      }
    })
  },[])


  const handleRemove=()=>{
    axios.get(process.env.REACT_APP_LOCAL_KEY+'/Cart/removeItem/'+localStorage.getItem("id")).then((res)=>{
      console.log(res)
      alert("Removed Animal from cart!")
      window.location.reload()
    })
  }

  const submitOrder=()=>{
    const newObj={
      buyer_id:localStorage.getItem("id"),
      ad_id:animal.cart._id,
      delivery:delivery,
      status:"Processing"
    }
    axios.post(process.env.REACT_APP_LOCAL_KEY+'/Cart/placeOrder/',newObj).then((res)=>{
      if(res.data.error){
        console.log(res.data.error)
      }else{
        console.log(res.data)
        
        
        axios.post(process.env.REACT_APP_LOCAL_KEY+'/Cart/addToLog/'+localStorage.getItem("id"),{ad_id:animal.cart._id}).then((res)=>{
          console.log(res)
        })
        alert("Order Recieved!")
        window.location.reload()
      }
    })
  }

  if(loading){
    return(
      <div class="App">
          <label>Cart is Empty</label>
      </div>
    )
  }

  return (
    <div class="App">
      <div className="first">
        <div className="ffirst">
          <div># Animal(s) Added</div>
        </div>
        <div className="fsecond">
          <div>Total: {animal.cart.price}</div>
        </div>
        <div className="contain">
          <div className="ffirst">
            <img className="pic" src={image}></img>           
          </div>

          <div className="fsecond info" >
            <div>Price: {animal.cart.price}</div>
            <Link to = {'/view/animalAdd'} state={{data:animal.cart}}>
            Go to Advertisement
            </Link>
            {/* <button className="gobutton">Go To Advertisement</button>  */}
            <button onClick={handleRemove} className="removebutton">Remove From Truck</button> 
          </div>
            
        </div>
        <div className="fillbox">
        </div>
      </div>

      <div className="second">
        <div className="info2">Please select one of the following</div><br></br>
          <label className="label1 info2">
            <input onClick={()=>setDelivery("Home Delivery")} value={"Home Delivery"} name="check" className="info2" type="radio"></input>
            Home Delivery
          </label>
          <label className="label1 info2">
            <input onClick={()=>setDelivery("Pick up from Seller")} value={"Pick Up From Seller"} name="check" className="info2" type="radio"></input>
            Pick Up From Seller
          </label>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="info2">Subtotal: Rs {animal.cart.price}</div><br></br>
          <div className="info2">Delivery Fees: Rs {delivery=="Home Delivery" ? 5000:0}</div><br></br>
          <div className="info2">Total: Rs {animal.cart.price + (delivery=="Home Delivery"? 5000:0)}</div><br></br>
        <div><button onClick={submitOrder} className="placebutton">Place Order</button></div>
      </div>
    </div>
  );
};

export default ViewTruck;
