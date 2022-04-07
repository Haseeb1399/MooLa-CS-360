import React from "react";
import "./App.css";
import butcher from '../../assets/butcher.png';
import buyer from '../../assets/buyer.png';
import seller from '../../assets/estate-agent.png';

const Signup = () => {

  return (
    <div class="App">
      <h1 className="title">CREATE AN ACCOUNT</h1>
      <h1 className="subtitle">I want to sign up as a</h1>
      <div className="signup">
        <img src={buyer} className="pic left" />
        <button className="buttons">
          Customer
        </button>
      </div>

      <div className="signup">
        <img src={seller} className="pic middle" />
        <button className="buttons">
          Seller
        </button>
      </div>    

      <div className="signup">
        <img src={butcher} className="pic right" />
        <button className="buttons">
          Butcher
        </button>
      </div>      
    </div>
  );
};

export default Signup;
