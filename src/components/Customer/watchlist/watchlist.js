import "../../../App.css";
import { FaFilter } from 'react-icons/fa'
import img from "../../../images/profilepic.png";
import goatpic from "../../../images/goatpic.jpeg";
import "./marketplace.css"

const Watchlist = ()=>{
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
          {/* add posts the same way as marketplace */}
        </div>
    )
}

export default Watchlist;