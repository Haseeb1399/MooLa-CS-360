import "../../../App.css";
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "../../Customer/marketplace/marketplace.css"
import "./viewlistings.css"
import { Link } from "react-router-dom";

const ViewListing = ()=>{
    return (
        <div class="App">

          <div class="posts-container-viewlistings">


            <div class="posts-marketplace">

                <div class="header-marketplace">
                <img src={img} class="profilepic-marketplace"/>
                <div class="header-lines-marketplace">
                    <div class="header-text-marketplace">Mafzii</div>
                    <div class="header-text-marketplace subtex-marketplacet"></div>
                </div>
                </div>

                <img id="myimg" src={goatpic} class="post-picture-marketplace" />
                <div class="post-body-marketplace">
                <div class="body-lines-marketplace">
                    <div class="body-text-marketplace">Sex: </div>
                    <div class="body-text-marketplace">No. of teeth: </div>
                    <div class="body-text-marketplace">Weight: </div>
                    <div class="body-text-marketplace">Color: </div>
                    <div class="body-text-marketplace">Breed: </div>
                    <div class="body-text-marketplace">Age: </div>
                    <div class="body-text-marketplace">Injuries: </div>
                    <div class="body-text-marketplace">Price: </div>
                </div>
                </div>

                <div class="post-buttons-marketplace">
                <a class="button-marketplace OpenAd-marketplace"> Open
                    {/* <Link to={"/view/animalAdd"} state={{data:val}}>Open</Link> */}
                </a>
                </div>
            </div>




          </div>        
        </div>
    )
}

export default ViewListing;