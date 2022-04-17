import React, { useEffect, useState } from "react";
import "./viewtruck.css";
import image from "./../../../assets/image2.png"
import axios from "axios";
import {Link} from 'react-router-dom'

const ViewTruck = () => {
  const [animal,setAnimal]=useState()
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
