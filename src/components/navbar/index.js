import React from 'react';
import logo from '../../images/moolalogopng.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';


  const Navbar = () => {
    if (localStorage.getItem("permission") == 3) {
      return (
        <Nav>
          <NavLink to='/'>
            <img src={logo} style={{height: "60px"}} />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
            <NavLink to='/post/animal' activeStyle>
              List New Animal
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
              Active Listings
            </NavLink>
            <NavLink to='/temp' activeStyle>
              Past Listings
            </NavLink>
            <NavLink to='/temp2' activeStyle>
              Profile
            </NavLink>
            <NavLink to='/temp3' activeStyle>
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      );
    }
    else if (localStorage.getItem("permission") == 2){
      return (
        <Nav>
          <NavLink to='/'>
            <img src={logo} style={{height: "60px"}} />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
            <NavLink to='/temp4' activeStyle>
              Requests
            </NavLink>
            <NavLink to='/temp5' activeStyle>
              WatchList
            </NavLink>
            <NavLink to='/temp6' activeStyle>
              Transaction Log
            </NavLink>
            <NavLink to='/temp2' activeStyle>
              Profile
            </NavLink>
            <NavLink to='/temp3' activeStyle>
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      );
    }
    else {
      return (
        <Nav>
          <NavLink to='/'>
            <img src={logo} style={{height: "60px"}} />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
            <NavLink to='/temp4' activeStyle>
              Cattle
            </NavLink>
            <NavLink to='/post/animal' activeStyle>
              Butchers
            </NavLink>
            <NavLink to='/temp6' activeStyle>
              WatchList
            </NavLink>
            <NavLink to='/temp6' activeStyle>
              Transaction Log
            </NavLink>
            <NavLink to='/temp7' activeStyle>
              View Truck
            </NavLink>
            <NavLink to='/temp2' activeStyle>
              Profile
            </NavLink>
            <NavLink to='/temp3' activeStyle>
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      );
    }
}



export default Navbar;