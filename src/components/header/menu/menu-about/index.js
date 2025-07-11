import React from 'react';
import './style.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuAbout = ({ onSubItemClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onSubItemClick) onSubItemClick();
  };

  const getLinkClass = (path) =>
    `${router.pathname === path ? "menuActive" : "link"} news first-News`;

  return (
    <div className='menu-new-wrapper'>
      <div className='menu-news'>
        <a href="/about">
          <a className={getLinkClass("/about")} onClick={handleClick}>
            <span>
              <span className='first-news-top-heading'>About</span>
              <div className="first-news-sub-heading">Memate</div> 
            </span>
            <button className='first-news-button'>Read more</button>
          </a>
        </a>

        <a 
          href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" 
          className="link news first-News"
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className='first-news-top-heading'>Our</span>
            <div className="first-news-sub-heading">Careers</div> 
          </span>
          <button className='first-news-button'>Check Careers</button>
        </a>

        <a href="/contact-us">
          <a className={getLinkClass("/contact-us")} onClick={handleClick}>
            <span>
              <span className='first-news-top-heading'>Contact</span>
              <div className="first-news-sub-heading">Our Team</div> 
            </span>
            <button className='first-news-button-3'>Contact</button>
          </a>
        </a>
      </div>
    </div>
  );
};

export default MenuAbout;
