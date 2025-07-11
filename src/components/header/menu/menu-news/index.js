'use client';
import React from 'react';
import './style.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuNews = ({ onSubItemClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onSubItemClick) onSubItemClick();
  };

  const links = [
    {
      href: "/news",
      topHeading: "Our",
      subHeading: "News",
      description: "Industry-related news to help you in business management.",
      button: "Read more",
    },
    {
      href: "/customer-stories",
      topHeading: "Customer",
      subHeading: "Stories",
      description: "Read how other companies are using memate.",
      button: "Check Stories",
    },
    {
      href: "/memate-software-updates",
      topHeading: "Software",
      subHeading: "Update",
      description: "Our Latest Software Updates, Releases, and Upcoming Development Features",
      button: "See Updates",
      buttonClass: "first-news-button-3",
    },
  ];

  return (
    <div className='menu-new-wrapper'>
      <div className='menu-news'>
        {links.map(({ href, topHeading, subHeading, description, button, buttonClass }) => {
          const isActive = router.pathname === href;

          return (
            <Link href={href} key={href} onClick={handleClick} className={`${isActive ? 'menuActive' : 'link'} news first-News`}>
              <span>
                <span className='first-news-top-heading'>{topHeading}</span>
                <div className="first-news-sub-heading">{subHeading}</div>
                <p className='first-news-description'>{description}</p>
              </span>
              <button className={buttonClass || 'first-news-button'}>{button}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuNews;
