import "../../../App.css";
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "./requests.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';

const Marketplace = ()=>{
    const feedDisplay = document.querySelector('#feed');
    let weight = [];
    let breed = [];
    let sellers = [];
    const [ads, setAds] = useState([]);
    const [type,setType] = useState("");
    const [weight, setweight] = useState(0);
    // let type = 0;
    

    useEffect(()=>{
        
        axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/get/butch').then(function (res) {
            //console.log("here");
            console.log(res);
            setAds(res.data);
            
          
        })
        .catch(function(err) {
          console.log(err)
        })
      },[])

      useEffect(()=>{
        
        axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/get/butch').then(function (res) {
            //console.log("here");
            console.log(res);
            setAds(res.data);
            
          
        })
        .catch(function(err) {
          console.log(err)
        })
      },[])


    const Submit = (event) => {
        // event.preventDefault()

        const newObj = {
            "seller_id" : watch[watch.length - 1],
            "weight" : weight
        }

        axios.post(process.env.REACT_APP_LOCAL_KEY+"/Ad/butch/watch",newObj).then((res)=>{
            if(res.data.error){
                console.log(res.data.error);
                }else{
                    alert("Added to watchlist");

                }
            }) .catch(err => {console.log("hello")})
        
    }

      return (
          <div class = "App">
              <div class = "filter-marketplace">
                  <div class = "title-marketplace">
                  <FaFilter class = "icon-marketplace"/>
                  <div class = "text-marketplace"> FITERS </div>
                  </div>
                  <form id = "myform">
                      <div class = "text-marketplace subtitle-marketplace"> TYPE </div>
                      <label>
                          <input type="checkbox" value = "big" onChange={(event)=>setType(event.target.value)}/>
                          BIG
                      </label>
                      <label>
                          <input type="checkbox" value = "small" onChange={(event)=>setType(event.target.value)}/>
                          SMALL
                      </label>
                      <label>
                          <input type="checkbox" value = "both" onChange={(event)=>setType(event.target.value)}/>
                          BOTH
                      </label>
                  </form>
              </div>
              <div class = "post-container-marketplace">
                {
                    ads.map((val)=>{
                        console.log(val)
                        function Add(){
                            watch.push(val.id);
                            setType(val.breed);
                            setweight(val.weight);
                            Submit();
                        }
                        if (type == "" | type == val.breed)
                        {
                            return(
                                <div class = "posts-marketplace">
                                    <div class = "header-marketplace">
                                        <div class = "header-text-marketplace">{val.seller_id.username}</div>
                                    
                                    </div>
                                    <div class = "post-body-marketplace">
                                        <div class = "body-lines-marketplace">
                                            <div class = "body-text-marketplace">Type Required: {val.breed} </div>
                                            <div class = "body-text-marketplace">Weight: {val.weight} </div>
                                        </div>  
                                    </div>

                                    <div class = "post-buttons-marketplace">
                                        <a class="button-marketplace OpenAd-marketplace">
                                            <Link to={"/view/ButcherAdd"} state={{data:val}}>Open</Link>
                                        </a>
                                        <a onClick={Add} class="button-marketplace Watchlist-marketplace">Add to Watchlist</a>
                                    </div>
                                    
                                </div>
                            )
                        }
                    })
                }
              </div>      
          </div>
      )
}

export default Marketplace;