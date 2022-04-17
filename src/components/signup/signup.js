import React from "react";
import "./signup.css";
import butcher from '../../assets/butcher.png';
import buyer from '../../assets/buyer.png';
import seller from '../../assets/estate-agent.png';
import {Link} from "react-router-dom";


const Signup = () => {

  return (
    <div class="App">
      <h1 className="title">CREATE AN ACCOUNT</h1>
      <h1 className="subtitle">I want to sign up as a</h1>
      <div className="signup">
        <img src={buyer} className="pic left" />
        <Link to ='/signup/customer'><button className="buttons">Customer</button></Link>
      </div>

      <div className="signup">
        <img src={seller} className="pic middle" />
        <Link to ='/signup/seller'><button className="buttons">Seller</button></Link>
      </div>    

      <div className="signup">
        <img src={butcher} className="pic right" />
        <Link to ='/signup/butcher'><button className="buttons">Butcher</button></Link>
      </div>      
      <Link to = '/'> <button className="buttons">Go Back</button></Link>
    </div>
  );
};

export default Signup;
