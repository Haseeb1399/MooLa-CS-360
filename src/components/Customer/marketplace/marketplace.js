import React from "react";
import "../../../App.css";
//import './marketplace.css'
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "./marketplace.css"
import { Link } from "react-router-dom";
import axios from 'axios';


const Marketplace = () => {

  const feedDisplay = document.querySelector('#feed');

  // fetch('http://localhost:3000/marketplace').then(res => {return res.json()}).then(data => {
  //     data.array.forEach(wow => {
  //       const result = <div><h3>wow</h3></div>
  //       feedDisplay.insertAdjacentHTML("beforeend", result);
  //     })
  // })
  // .catch(err => {console.log(err)})

  axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/marketplace',{}).then(function (res) {
    // console.log(res.data.message);
    // feedDisplay.insertAdjacentHTML("beforeend",<div><h3>`${res.data.message}</h3></div>)
    console.log(res) //Console me data arha he isse display karna he
    //feedDisplay.insertAdjacentHTML("beforeend", res.data.data.message[0])
  })
  .catch(function(err) {
    console.log(err)
  })
  

  return (
    <div class="App">
      {/* <button><Link to = '/marketplace'> </Link></button> */}
{/* filter tab */}
      <div class="filter-marketplace">
        
        <div class="title-marketplace"> 
          <FaFilter class="icon-marketplace"/>
          <div class="text-marketplace">Filters</div> 
        </div>
        <form id="myform">

          <div class="animal-marketplace">
            <div class="text-marketplace subtitle-marketplace">Animal</div>

            <div class="checkcontainer-marketplace">
              <label for="cow">
                <input class="checkbox-marketplace" type="checkbox" id="cow"/>
                Cow
              </label>
              <label for="goat">
                <input class="checkbox-marketplace" type="checkbox" id="goat"/>
                Goat
              </label>
              <label for="camel">
                <input class="checkbox-marketplace" type="checkbox" id="camel"/>
                Camel
              </label>
              <label for="buffalo">
                <input class="checkbox-marketplace" type="checkbox" id="buffalo"/>
                Buffalo
              </label>
            </div>
          </div>
          
          <div class="sex-marketplace">
            <div class="text-marketplace subtitle-marketplace">Sex</div>

            <div class="checkcontainer-marketplace">
              <label for="male">
                <input class="checkbox-marketplace" type="checkbox" id="male"/>
                Male
              </label>
              <label for="female">
                <input class="checkbox-marketplace" type="checkbox" id="female"/>
                Female
              </label>
            </div>
          </div>

          <div class="weight-marketplace"> 
            <div class="text-marketplace subtitle-marketplace">Weight</div>

            <input class="textboxes-marketplace" type="text" placeholder="KG" id="lowest-weight" />
             - 
            <input class="textboxes-marketplace" type="text" placeholder="KG" id="highest-weight" />
          </div>
        
        </form>
        <input class="button-marketplace" type="submit" form="myform" value="Filter"/>
      
      </div>

      {/* <div id = "feed"></div> */}


{/* posts */
    <div class="posts-container-marketplace">

      <div class="posts-marketplace">
        
        <div class="header-marketplace">
          <img src={img} class="profilepic-marketplace"/>
          <div class="header-lines-marketplace">
            <div class="header-text-marketplace">Mafzi </div>
            <div class="header-text-marketplace subtex-marketplacet">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture-marketplace" />
        
        <div class="post-body-marketplace">
          <div class="body-lines-marketplace">
            <div class="body-text-marketplace">Sex: Male </div>
            <div class="body-text-marketplace">No. of teeth: 2</div>
            <div class="body-text-marketplace">Weight: 30KG</div>
            <div class="body-text-marketplace">Color: Brown, Black</div>
            <div class="body-text-marketplace">Breed: Kamori</div>
            <div class="body-text-marketplace">Age: 2 years</div>
            <div class="body-text-marketplace">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons-marketplace">
          <a href="/cattle/bid" class="button-marketplace OpenAd-marketplace">Open</a>
          <a href="#" class="button-marketplace Watchlist-marketplace">Add to Watchlist</a>
        </div>

      </div>

      <div class="posts-marketplace">
        
        <div class="header-marketplace">
          <img src={img} class="profilepic-marketplace"/>
          <div class="header-lines-marketplace">
            <div class="header-text-marketplace">Mafzi </div>
            <div class="header-text-marketplace subtex-marketplacet">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture-marketplace" />
        
        <div class="post-body-marketplace">
          <div class="body-lines-marketplace">
            <div class="body-text-marketplace">Sex: Male </div>
            <div class="body-text-marketplace">No. of teeth: 2</div>
            <div class="body-text-marketplace">Weight: 30KG</div>
            <div class="body-text-marketplace">Color: Brown, Black</div>
            <div class="body-text-marketplace">Breed: Kamori</div>
            <div class="body-text-marketplace">Age: 2 years</div>
            <div class="body-text-marketplace">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons-marketplace">
          <a href="/cattle/bid" class="button-marketplace OpenAd-marketplace">Open</a>
          <a href="#" class="button-marketplace Watchlist-marketplace">Add to Watchlist</a>
        </div>

      </div>

      <div class="posts-marketplace">
        
        <div class="header-marketplace">
          <img src={img} class="profilepic-marketplace"/>
          <div class="header-lines-marketplace">
            <div class="header-text-marketplace">Mafzi </div>
            <div class="header-text-marketplace subtex-marketplacet">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture-marketplace" />
        
        <div class="post-body-marketplace">
          <div class="body-lines-marketplace">
            <div class="body-text-marketplace">Sex: Male </div>
            <div class="body-text-marketplace">No. of teeth: 2</div>
            <div class="body-text-marketplace">Weight: 30KG</div>
            <div class="body-text-marketplace">Color: Brown, Black</div>
            <div class="body-text-marketplace">Breed: Kamori</div>
            <div class="body-text-marketplace">Age: 2 years</div>
            <div class="body-text-marketplace">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons-marketplace">
          <a href="/cattle/bid" class="button-marketplace OpenAd-marketplace">Open</a>
          <a href="#" class="button-marketplace Watchlist-marketplace">Add to Watchlist</a>
        </div>

      </div>

      <div class="posts-marketplace">
        
        <div class="header-marketplace">
          <img src={img} class="profilepic-marketplace"/>
          <div class="header-lines-marketplace">
            <div class="header-text-marketplace">Mafzi </div>
            <div class="header-text-marketplace subtex-marketplacet">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture-marketplace" />
        
        <div class="post-body-marketplace">
          <div class="body-lines-marketplace">
            <div class="body-text-marketplace">Sex: Male </div>
            <div class="body-text-marketplace">No. of teeth: 2</div>
            <div class="body-text-marketplace">Weight: 30KG</div>
            <div class="body-text-marketplace">Color: Brown, Black</div>
            <div class="body-text-marketplace">Breed: Kamori</div>
            <div class="body-text-marketplace">Age: 2 years</div>
            <div class="body-text-marketplace">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons-marketplace">
          <a href="/cattle/bid" class="button-marketplace OpenAd-marketplace">Open</a>
          <a href="#" class="button-marketplace Watchlist-marketplace">Add to Watchlist</a>
        </div>

      </div>

      </div> /**/}

      

    </div>
  );
};

export default Marketplace;