import React from 'react';
import logo from '../../images/moolalogopng.png';
import axios from "axios";
//import {useHistory} from 'react-router-dom'
//import { removeToken } from './useToken.js'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';


  const Navbar = () => {
    function logOut() {
      localStorage.clear()
      window.location('/')
      //history.push('/')
    }
    if (localStorage.getItem("permission") == 3) {

      //let user = localStorage.getItem("id")
      //const history = useHistory()
      


      return (
        <Nav>
            <img src={logo} style={{height: "60px"}} />
          <Bars />
          <NavMenu>
            <NavLink to='/about' activestyle>
              About Us
            </NavLink>
            <NavLink to='/post/animal' activestyle>
              List New Animal
            </NavLink>
            <NavLink to='/contact-us' activestyle>
              Active Listings
            </NavLink>
            {/* <NavLink to='/temp' activestyle>
              Past Listings
            </NavLink> */}
            <NavLink to='/profile' activestyle>
              Profile
            </NavLink>
            <NavLink onClick = {logOut} to='/' activestyle>
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      );
    }
    else if (localStorage.getItem("permission") == 2){
      return (
        <Nav>
          <img src={logo} style={{height: "60px"}} />
          <Bars />
          <NavMenu>
            <NavLink to='/about' activestyle>
              About Us
            </NavLink>
            <NavLink to='/temp4' activestyle>
              Requests
            </NavLink>
            <NavLink to='/watchlist' activestyle>
              WatchList
            </NavLink>
            <NavLink to='/temp6' activestyle>
              Transaction Log
            </NavLink>
            <NavLink to='/profile' activestyle>
              Profile
            </NavLink>
            <NavLink onClick = {logOut} to = '/' activestyle>
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      );
    }
    else if (localStorage.getItem("permission") == 1) {
      return (
        <Nav>
          <img src={logo} style={{height: "60px"}} />
          <Bars />
          <NavMenu>
            <NavLink to='/about' activestyle>
              About Us
            </NavLink>
            <NavLink to='/marketplace' activestyle>
              Cattle
            </NavLink>
            <NavLink to='/ad/for/butcher' activestyle>
              Butchers
            </NavLink>
            <NavLink to='/watchlist' activestyle>
              WatchList
            </NavLink>
            <NavLink to='/transactionlog' activestyle>
              Transaction Log
            </NavLink>
            <NavLink to='/view/truck' activestyle>
              View Truck
            </NavLink>
            <NavLink to='/profile' activestyle>
              Profile
            </NavLink>
            <NavLink onClick = {logOut} to = '/' activestyle>
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      );
    }
    else if(!localStorage.getItem('permission')) {
      return(
        <Nav>
          <NavLink to='/'>
            <img src={logo} style={{height: "60px"}} />
          </NavLink>
          <Bars />
        </Nav>
      );
    }
}



export default Navbar;