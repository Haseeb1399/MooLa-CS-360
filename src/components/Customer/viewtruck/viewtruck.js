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
      if(animal==null){
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

  return (
    <div class="App">
      <div className="first">
        <div># Animal(s) Added</div>
        <div>
          {loading ? (
            <>
            <label>Empty Cart!</label>
            </>
          ): (
            <>
            <div>Advertisement ID:{animal.cart._id} </div>
            <div>
            <Link to={"/view/animalAdd"} state={{data:animal.cart}}>View Original Advertisement</Link>
            </div>
            <div>Price: {animal.cart.price}</div>
            <button onClick={handleRemove}>Remove From Truck</button>
            </>
          )}
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
