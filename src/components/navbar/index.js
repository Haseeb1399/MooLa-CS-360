import React from 'react';
import logo from '../../images/moolalogopng.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

const Navbar = () => {
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
        <NavLink to='/post-ad' activeStyle>
          List New Animal
        </NavLink>
        <NavLink to='/contact-us' activeStyle>
          Active Listings
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          Past Listings
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          Profile
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          Log Out
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;