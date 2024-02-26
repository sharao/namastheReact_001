import React, { useState } from 'react';
import compLogo from './../images/logo.webp';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import About from './About';
function Header() {
 let [btnName, setBtnName] = useState('Login');
 return (
  <div className="header">
   <div className="logo-container">
    <img src={compLogo} alt="logo" className="logo" />
   </div>
   <div className="nav-items">
    <ul>
     <Link to="./">
      <li>Home</li>
     </Link>
     <Link to="/about">
      <li>About Us</li>
     </Link>
     <Link to="/contact">
      <li>Contact Us</li>
     </Link>
     <Link>
      <li>Cart</li>
     </Link>

     <li>
      <Button
       variant="outlined"
       onClick={() => {
        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
       }}>
       {btnName}
      </Button>
     </li>
    </ul>
   </div>
  </div>
 );
}

export default Header;
