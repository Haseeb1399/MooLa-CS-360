import React from "react";
import "./App.css";
import { FaFilter } from 'react-icons/fa'
import img from "./images/profilepic.png";
import goatpic from "./images/goatpic.jpeg";


const Marketplace = () => {

  return (
    <div class="App">
{/* filter tab */}
      <div class="filter">
        
        <div class="title"> 
          <FaFilter class="icon"/>
          <div class="text">Filters</div> 
        </div>
        <form id="myform">

          <div class="animal">
            <div class="text subtitle">Animal</div>

            <div class="checkcontainer">
              <label for="cow">
                <input class="checkbox" type="checkbox" id="cow"/>
                Cow
              </label>
              <label for="goat">
                <input class="checkbox" type="checkbox" id="goat"/>
                Goat
              </label>
              <label for="camel">
                <input class="checkbox" type="checkbox" id="camel"/>
                Camel
              </label>
              <label for="buffalo">
                <input class="checkbox" type="checkbox" id="buffalo"/>
                Buffalo
              </label>
            </div>
          </div>
          
          <div class="sex">
            <div class="text subtitle">Sex</div>

            <div class="checkcontainer">
              <label for="male">
                <input class="checkbox" type="checkbox" id="male"/>
                Male
              </label>
              <label for="female">
                <input class="checkbox" type="checkbox" id="female"/>
                Female
              </label>
            </div>
          </div>

          <div class="weight"> 
            <div class="text subtitle">Weight</div>

            <input class="textboxes" type="text" placeholder="KG" id="lowest-weight" />
             - 
            <input class="textboxes" type="text" placeholder="KG" id="highest-weight" />
          </div>
        
        </form>
        <input class="button" type="submit" form="myform" value="Filter"/>
      
      </div>


{/* posts */}
    <div class="posts-container">

      <div class="posts">
        
        <div class="header">
          <img src={img} class="profilepic"/>
          <div class="header-lines">
            <div class="header-text">Mafzi </div>
            <div class="header-text subtext">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture" />
        
        <div class="post-body">
          <div class="body-lines">
            <div class="body-text">Sex: Male </div>
            <div class="body-text">No. of teeth: 2</div>
            <div class="body-text">Weight: 30KG</div>
            <div class="body-text">Color: Brown, Black</div>
            <div class="body-text">Breed: Kamori</div>
            <div class="body-text">Age: 2 years</div>
            <div class="body-text">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons">
          <a href="#" class="button OpenAd">Open</a>
          <a href="#" class="button Watchlist">Add to Watchlist</a>
        </div>

      </div>

      <div class="posts">
        
        <div class="header">
          <img src={img} class="profilepic"/>
          <div class="header-lines">
            <div class="header-text">Mafzi </div>
            <div class="header-text subtext">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture" />
        
        <div class="post-body">
          <div class="body-lines">
            <div class="body-text">Sex: Male </div>
            <div class="body-text">No. of teeth: 2</div>
            <div class="body-text">Weight: 30KG</div>
            <div class="body-text">Color: Brown, Black</div>
            <div class="body-text">Breed: Kamori</div>
            <div class="body-text">Age: 2 years</div>
            <div class="body-text">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons">
          <a href="#" class="button OpenAd">Open</a>
          <a href="#" class="button Watchlist">Add to Watchlist</a>
        </div>

      </div>

      <div class="posts">
        
        <div class="header">
          <img src={img} class="profilepic"/>
          <div class="header-lines">
            <div class="header-text">Mafzi </div>
            <div class="header-text subtext">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture" />
        
        <div class="post-body">
          <div class="body-lines">
            <div class="body-text">Sex: Male </div>
            <div class="body-text">No. of teeth: 2</div>
            <div class="body-text">Weight: 30KG</div>
            <div class="body-text">Color: Brown, Black</div>
            <div class="body-text">Breed: Kamori</div>
            <div class="body-text">Age: 2 years</div>
            <div class="body-text">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons">
          <a href="#" class="button OpenAd">Open</a>
          <a href="#" class="button Watchlist">Add to Watchlist</a>
        </div>

      </div>

      <div class="posts">
        
        <div class="header">
          <img src={img} class="profilepic"/>
          <div class="header-lines">
            <div class="header-text">Mafzi </div>
            <div class="header-text subtext">Posted 9 hours ago</div>
          </div>
        </div>

        <img src={goatpic} class="post-picture" />
        
        <div class="post-body">
          <div class="body-lines">
            <div class="body-text">Sex: Male </div>
            <div class="body-text">No. of teeth: 2</div>
            <div class="body-text">Weight: 30KG</div>
            <div class="body-text">Color: Brown, Black</div>
            <div class="body-text">Breed: Kamori</div>
            <div class="body-text">Age: 2 years</div>
            <div class="body-text">Injuries: None</div>
          </div>
        </div>

        <div class="post-buttons">
          <a href="#" class="button OpenAd">Open</a>
          <a href="#" class="button Watchlist">Add to Watchlist</a>
        </div>

      </div>

      </div>

    </div>
  );
};

export default Marketplace;
