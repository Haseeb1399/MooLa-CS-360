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
    let animals = [];
    let sellers = [];
    const [ads, setAds] = useState([]);
    let type = 0;
    

    


    const Submit = (event) => {
        
        const newObj = {
            "a_id" : watch[watch.length - 1],
            "b_id" : localStorage.getItem("id"),
            "animal_id":animals[animals.length - 1],
            "seller_id":sellers[sellers.length - 1]
        }
        console.log(newObj)

        axios.post(process.env.REACT_APP_LOCAL_KEY+"/Ad/post/watchlist",newObj).then((res)=>{
            if(res.data.error){
                console.log(res.data.error);
                }else{
                    alert("Added to watchlist");

                }
            }) .catch(err => {console.log(err)})
     }

     if(localStorage.getItem("permission") == 1) {
        type = 3;
    }
    else {
        type = 1;
    }

    useEffect(()=>{
        
        axios.post(process.env.REACT_APP_LOCAL_KEY+'/Ad/marketplace',{ad_type:type}).then(function (res) {
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
                            <input type="checkbox" id="cow"/>
                            Cow
                        </label>
                        <label for="goat">
                            <input type="checkbox" id="goat"/>
                            Goat
                        </label>
                        <label for="camel">
                            <input type="checkbox" id="camel"/>
                            Camel
                        </label>
                        <label for="buffalo">
                            <input type="checkbox" id="buffalo"/>
                            Buffalo
                        </label>
                    </div>
                </div>
                
                {/*<div class="sex-marketplace">
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
                </div>*/}
                
                </form>
      <input class="button-marketplace" type="submit" form="myform" value="Filter"/>
            
            </div>
            <div class="posts-container-marketplace">
            {
                ads.map((val)=>{
                    console.log(val) 
                    function Add() {
                        // const [ad_id, setAd] = useState("");
                        
                        
                        watch.push(val._id);
                        animals.push(val.animal_id._id);
                        sellers.push(val.seller_id._id);
                        console.log(watch)
                        Submit()
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
                            <a class="button-marketplace OpenAd-marketplace">
                                <Link to={"/view/animalAdd"} state={{data:val}}>Open</Link>
                            </a>
                            <a onClick={Add} class="button-marketplace Watchlist-marketplace">Add to Watchlist</a>
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