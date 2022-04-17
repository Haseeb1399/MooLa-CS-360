import "../../../App.css";
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "./watch.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';

const WatchListButcher = () => {
    const navigate = useNavigate();
    const [watchList, setWatch] = useState([]);
    const [NullState,setNullState]=useState("")
    let to_remove;
    useEffect(()=>{
        axios.get(process.env.REACT_APP_LOCAL_KEY+'/Ad/butch/render').then((data)=>{
            //setWatch(data);
            //setWatch(data.data[0]);
            setWatch(data.data);
           // console.log(data.data[0])
        }).catch((err)=>{
            console.log(err)
        })
      },[])

      async function Remove(to_remove) {
          console.log(to_remove)
          const newObj = {"id":to_remove}
          axios.post(process.env.REACT_APP_LOCAL_KEY+'/Ad/delete/butchlist',newObj).then((data)=>{
              console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
            alert("Watchlisted Ad Removed!")
            window.location.reload()
          
      } 

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
                  watchList.map((val)=>{
                    //console.log(val[0].weight)
                    function Remove1() {
                        to_remove = val._id
                        console.log(val._id)
                        Remove(to_remove)
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

                            {/* <img id="myimg" src={val.ad_id.photo} class="post-picture-marketplace" /> */}
                            <div class="post-body-marketplace">
                            <div class="body-lines-marketplace">
                                <div class="body-text-marketplace">Weight: {val.weight} </div>
                                <div class="body-text-marketplace">Breed: {val.breed}</div>
                                {/* <div class="body-text-marketplace">Weight: {val.animal_id.weight}</div>
                                <div class="body-text-marketplace">Color: {val.animal_id.color} </div>
                                <div class="body-text-marketplace">Breed: {val.animal_id.type}</div>
                                <div class="body-text-marketplace">Age:{val.animal_id.age} </div>
                                <div class="body-text-marketplace">Injuries: {val.animal_id.injury}</div>
                                <div class="body-text-marketplace">Price: {val.animal_id.price}</div> */}
                            </div>
                            </div>

                            <div class="post-buttons-marketplace">
                            <a href="/cattle/bid" class="button-marketplace OpenAd-marketplace">Open</a>
                            <button onClick={Remove1}>Remove</button>
                            </div>

                    </div>
                        )
                    })
              }
          </div>
            
            
    </div>
      )
}

export default WatchListButcher;