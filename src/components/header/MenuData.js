
import React, { useState,useEffect } from 'react';

import { slide as Menu } from 'react-burger-menu';
import Images from "../../assests/images";
import './menudat.css'; 

import menuImages from "../../assests/menu-images";
import PanelMenu from './panel-menu';


const MenuData = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };


  // const closeMenu = () => setMenuOpen(false);
  // const toggleMenu = () => setMenuOpen(!menuOpen);
  

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > '100%' ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


  return (
    <div className={`burger-menu-wrapper active ${show && 'hidden'}`}>
      <Menu 
        isOpen={menuOpen}
        right
        customBurgerIcon={ <img src={Images.BurgerIcon} alt='BurgerIcon' type="image/svg+xml" /> }
        customCrossIcon={ <img src={Images.burgerCloseIcon} className='burgerCloseIcon' alt='burgerCloseIcon' type="image/svg+xml" /> }
        onStateChange={handleStateChange}
        width={'359px'}
      >
        <PanelMenu />
         <div className='listMobileWrap'>
         <div className="privacymobileNav">
           <a href='/pricing'>Pricing</a>
            <a href='/news'>News</a>
           <a href='/contact-us'>Contact us</a>
          </div>
       </div>
       <div className='logoMobileWrap'>
       <div className="header-menu-header-div-memate-component">
                  <img src={Images.logo} alt="logo" type="image/svg+xml" />
                  <div className="header-menu-memate-feature">
                    <div className="header-menu-feature">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-text">
                        Easy to Learn and Use
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Remote Acess</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Workflow</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck' />
                      <p className="header-menu-feature-texts">
                        Single database
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">
                        Build for Australia
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">CRM & ERP</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Reporting</p>
                    </div>
                  </div>
                  <div className="request-a-button-wrapper">
                   <a href='https://app.memate.com.au/requestdemo'  target="_blank"><img src={menuImages.RequestAdemo} alt='RequestAdemo'/> </a>
                  </div>
                </div>
       </div>
      </Menu>
      <div className='mobilemenu-wrapper'>
 <div className='mobile-logo'>
<a href='/'><img src={Images.logo} alt="logo" type="image/svg+xml" /></a>
 </div>
 <div className="hamburger-container"></div>
 </div>
    </div>
  );
};

export default MenuData;
