import "../../../App.css";
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "../../Customer/marketplace/marketplace.css"
import "./viewlistings.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

const ViewListing = ()=>{
    const [ads, setAds] = useState([]);
    let type = 0;
    if(localStorage.getItem("permission") == 3) {
        type = 3;
    }
    else {
        type = 1;
    }
    
    useEffect(()=>{
        let userId = localStorage.getItem("id")    
        console.log(userId)
        axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/sellerAds/'+userId).then(function (res) {
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

        <div class="posts-container-marketplace">
            {
                ads.map((val)=>{
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
                                    <Link to={'/seller/Advert'} state={{data:val}}>Open</Link>
                                </a>
                            </div>

                    </div>
                    )
                })
            }
            </div>

            </div>
    )
}

export default ViewListing;