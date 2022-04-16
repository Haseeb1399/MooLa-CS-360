import "../../../App.css";
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "./marketplace.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';

const Marketplace = ()=>{
    const feedDisplay = document.querySelector('#feed');
    let watch = [];
    const [ads, setAds] = useState([]);

    

    useEffect(()=>{
        axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/marketplace',{}).then(function (res) {
          // console.log(res.data.message);
          // feedDisplay.insertAdjacentHTML("beforeend",<div><h3>`${res.data.message}</h3></div>)
          // console.log(res) //Console me data arha he isse display karna he
        //   setAds(res.data.message);
        //   console.log(res.data.message);
        //   console.log("here");
        //   console.log(ads);
            console.log("here");
            console.log(res);
            setAds(res.data);
          
          //feedDisplay.insertAdjacentHTML("beforeend", res.data.data.message[0])
        })
        .catch(function(err) {
          console.log(err)
        })
      },[])

      return (
          <div class="App">
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
            <div>
            {
                ads.map((val)=>{
                    function add() {
                        watch.push(val.animal_id)
                    }
                    return(
                        <div class="posts-marketplace">
        
                            <div class="header-marketplace">
                            <img src={img} class="profilepic-marketplace"/>
                            <div class="header-lines-marketplace">
                                <div class="header-text-marketplace">{val.seller_id.username}</div>
                                <div class="header-text-marketplace subtex-marketplacet"></div>
                            </div>
                            </div>

                            <img id="myimg" src={val.photo} class="post-picture-marketplace" />
                            {console.log(val.photo)}
                            <div class="post-body-marketplace">
                            <div class="body-lines-marketplace">
                                <div class="body-text-marketplace">Sex: {val.animal_id.sex} </div>
                                <div class="body-text-marketplace">No. of teeth: {val.animal_id.teeth}</div>
                                <div class="body-text-marketplace">Weight: {val.animal_id.weight}</div>
                                <div class="body-text-marketplace">Color: {val.animal_id.color} </div>
                                <div class="body-text-marketplace">Breed: {val.animal_id.type}</div>
                                <div class="body-text-marketplace">Age:{val.animal_id.age} </div>
                                <div class="body-text-marketplace">Injuries: {val.animal_id.injury}</div>
                                <div class="body-text-marketplace">Price: {val.animal_id.price}</div>
                            </div>
                            </div>

                            <div class="post-buttons-marketplace">
                            <a href="/cattle/bid" class="button-marketplace OpenAd-marketplace">Open</a>
                            <button onClick={add} class="button-marketplace Watchlist-marketplace">Add to Watchlist</button>
                            </div>

                    </div>
                    )
                })
            }
            </div>
          </div>
      )
}

export default Marketplace;