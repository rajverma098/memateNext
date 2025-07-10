import React, { useState } from 'react';
import "./style.css";
import Images from "../../assests/images";
import { Link } from "react-router-dom";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
 <div className='mobilemenu-wrapper'>
 <div className='mobile-logo'>
<Link to='/'><img src={Images.logo} alt="logo" type="image/svg+xml" /></Link>
 </div>
 <div className="hamburger-container">
      <div 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'visible' : ''}`}>
      
      </nav>
    </div>
 </div>
  );
};

export default HamburgerMenu;
