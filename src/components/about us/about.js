import React from "react";
import "./about.css";
import image1 from '../../images/Component2_praise.png';
import image2 from '../../images/Component3_praise.png';
import image3 from '../../images/Component4_praise.png';
import image4 from '../../images/Component5_praise.png';

const AboutUs = () => {

  return (
    <div class="App">
      <h1 className="text">Moola is a web application that serves to maximise information in a market. It allows people to buy and sell sacrificial animals by changing the tiresome conventional methods where buyers visit various markets and often end up disappointed since they are not able to buy what they want in a limited budget. Moola allows buyers to find animals within their budget so they know exactly which market, in a city, is selling animals within their budget. The bidding system allows buyers to negotiate the price in a regulated manner that reduces the chances for fraud as opposed to buyers and sellers negotiating off the platform where fraud can easily be committed. A buyer can combine their animal with a butcher of choice thus erasing the hassle of finding a butcher as buyers often find them booked. The objective of this application is to make these transactions easier, reduce fraud and maximise information in the market. A buyer should know the current market trends without having to visit all the market physically and sellers become more competitive on such a platform as the market network is closely knit. Lastly, it aims to bring buyers, sellers and butchers together on one platform in order to increase convenience and profitability in terms of time and money.</h1>  
      <div>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image4}/>
      </div>    
    </div>
  );
};

export default AboutUs;
