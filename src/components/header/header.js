'use client';
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

import menuImages from "../../assests/menu-images";
import Images from "../../assests/images";

import {
  MenuAbout,
  MenuFeature,
  MenuIndustry,
  MenuLegal,
  MenuNews,
  MenuRessources,
} from "./menu";

import "./headerStyle.css";

import MemateLogoHeaderAbout from "@/svg/MemateLogoHeaderAbout";
import FeatureMain from "@/svg/FeatureMain";
import Industrymain from "@/svg/Industrymain";
import AboutMain from "@/svg/AboutMain";
import NewsAndStoriesmain from "@/svg/NewsAndStoriesmain";
import LegalActiveSVG from "@/svg/LegalActiveSVG";
import LegalInactiveSVG from "@/svg/LegalInactiveSVG";
import ResourcesInactiveSVG from "@/svg/ResourcesInactiveSVG";
import ResourcesActiveSVG from "@/svg/ResourcesActiveSVG";
import FAQSVG from "@/svg/FAQSVG";
import ContactSalesSVG from "@/svg/ContactSalesSVG";
import WatchDemoSVG from "@/svg/WatchDemoSVG";

import HeaderButtonWithGradient from "@/app/hover-button/HeaderButtonWithGradient";
import TronButton from "@/app/hover-button/tourn-but";
import MenuData from "./MenuData";


const DownBlackArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg";
const DownColorArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-color-arrow.svg";
const RightColorArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/right-color-arrow.svg";
const RightBlackArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg";

const HeaderMain = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const menuRef = useRef(null);
  const aboutButtonRef = useRef(null);

  const router = useRouter();

  const handleLogoClick = () => router.push("/");

  const menuItemList = [
    {
      id: 1,
      label: <a href="/features">Features</a>,
      unselectedIcon: <FeatureMain />,
    },
    {
      id: 2,
      label: <a href="/industries">Industries</a>,
      unselectedIcon: <Industrymain />,
    },
    {
      id: 3,
      label: <>News & Stories</>,
      unselectedIcon: <NewsAndStoriesmain />,
    },
    {
      id: 4,
      label: <a href="/about">About</a>,
      unselectedIcon: <AboutMain />,
    },
  ];

  useEffect(() => {
    const pathToMenuId = {
      "/features": 1,
      "/industries": 2,
      "/your-business-news-management": 3,
      "/customer-stories": 3,
      "/memate-software-updates": 3,
      "/about": 4,
      "/legal": 5,
      "/terms-and-conditions": 5,
      "/privacy": 5,
      "/terms-of-use": 5,
      "/security": 5,
      "/resources": 6,
      "/supplier-database": 6,
      "/knowledge-base": 6,
      "/delete-request": 6,
      "/memate-wiki": 6,
    };

    const matchedId =
      Object.entries(pathToMenuId).find(([path]) =>
        router.pathname.startsWith(path)
      )?.[1] || 1;

    setSelectedMenuItem(matchedId);
  }, [router.pathname]);

  const renderContent = () => {
    const handleSubItemClick = (menuId) => setSelectedMenuItem(menuId);

    switch (selectedMenuItem) {
      case 1:
        return <MenuFeature onSubItemClick={() => handleSubItemClick(1)} />;
      case 2:
        return <MenuIndustry onSubItemClick={() => handleSubItemClick(2)} />;
      case 3:
        return <MenuNews onSubItemClick={() => handleSubItemClick(3)} />;
      case 4:
        return <MenuAbout onSubItemClick={() => handleSubItemClick(4)} />;
      case 5:
        return <MenuLegal onSubItemClick={() => handleSubItemClick(5)} />;
      case 6:
        return <MenuRessources onSubItemClick={() => handleSubItemClick(6)} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <MenuData />
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-wrapper" onClick={handleLogoClick}>
            <img src={Images.logo} alt="logo" type="image/svg+xml" />
          </div>

          <div className="header-navbar-container">
            <div
              ref={aboutButtonRef}
              className={`navbar-item navbar-item-flex-item rightAboutArrow ${
                router.pathname === "/about" || showDropDown
                  ? "navbar-item-active"
                  : ""
              }`}
              onClick={() => setShowDropDown((prev) => !prev)}
            >
              <p>About</p>
              <img
                src={showDropDown ? DownColorArrow : DownBlackArrow}
                alt="Arrow"
              />
            </div>

            <a href="/pricing" className={`navbar-item ${router.pathname === "/pricing" ? "navbar-item-active" : ""}`}>
              <p>Pricing</p>
            </a>

            <a href="/news" className={`navbar-item ${router.pathname === "/news" ? "navbar-item-active" : ""}`}>
              <p>News</p>
            </a>

            <a href="/contact-us" className={`navbar-item ${router.pathname === "/contact-us" ? "navbar-item-active" : ""}`}>
              <p>Contact us</p>
            </a>
          </div>

          <div className="dflexbannerbtn dflexbannerHeaderbtn dflexbannerbtnp">
            <div className="request-btn">
              <a
                href="https://app.memate.com.au/requestdemo"
                target="_blank"
                className="nav-btn--get-started  navbar-link"
                rel="noopener noreferrer"
              >
                <HeaderButtonWithGradient text="Request a Demo" borderVal="black" />
              </a>
            </div>
            <div className="navbar-log-in">
              <a
                href="https://app.memate.com.au/"
                target="_blank"
                className="nav-btn--get-started navbar-link"
                rel="noopener noreferrer"
              >
                <TronButton text="Log In" />
              </a>
            </div>
          </div>

          {showDropDown && (
            <div ref={menuRef} className="header-menu-wrapper">
              <div className="header-menu-header-div">
                <div className="header-menu-header-div-menu">
                  {menuItemList.map((menu) => (
                    <div
                      key={menu.id}
                      className={
                        selectedMenuItem === menu.id
                          ? "header-menu-item"
                          : "header-menu-item-unselected"
                      }
                      onMouseEnter={() => setSelectedMenuItem(menu.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="header-menu-icon-wrapper">
                        {menu.unselectedIcon}
                        <p
                          style={{
                            marginLeft: menu.id === 3 ? "6px" : "",
                          }}
                          className={
                            selectedMenuItem === menu.id
                              ? "header-menu-item-name-selected"
                              : "header-menu-item-name-unselected"
                          }
                        >
                          {menu?.label}
                        </p>
                      </div>
                      <div
                        className={
                          selectedMenuItem === menu.id
                            ? "menu-next-icon-wrapper"
                            : "menu-next-icon-wrapper-unselected"
                        }
                      >
                        <img
                          src={
                            selectedMenuItem === menu.id
                              ? RightColorArrow
                              : RightBlackArrow
                          }
                          alt="Arrow"
                          style={
                            selectedMenuItem === menu.id
                              ? {}
                              : { transform: "rotate(-90deg)" }
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="header-menu-header-div-menu-component">
                  {renderContent()}
                </div>

                <div className="header-menu-header-div-memate-component">
                  <MemateLogoHeaderAbout alt="logo" type="image/svg+xml" />
                  <div className="header-menu-memate-feature">
                    {[
                      "Easy to Learn and Use",
                      "Remote Acess",
                      "Workflow",
                      "Single database",
                      "Build for Australia",
                      "CRM & ERP",
                      "Reporting",
                    ].map((text, i) => (
                      <div key={i} className="header-menu-features">
                        <img src={menuImages.meMateCheck} alt="meMateCheck" />
                        <p className="header-menu-feature-texts">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="request-a-button-wrapper">
                    <a href="https://app.memate.com.au/requestdemo">
                      <HeaderButtonWithGradient
                        text="Request a Demo"
                        borderVal="black"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="header-menu-footer-div">
                <div className="header-menu-footer-left-content">
                  <div
                    className="header-footer-legal"
                    onClick={() => setSelectedMenuItem(5)}
                    style={{ cursor: "pointer" }}
                  >
                    {selectedMenuItem === 5 ? <LegalActiveSVG /> : <LegalInactiveSVG />}
                    <p
                      className={
                        selectedMenuItem === 5
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      Legal
                    </p>
                  </div>

                  <div
                    className="header-footer-legal"
                    onClick={() => setSelectedMenuItem(6)}
                    style={{ cursor: "pointer" }}
                  >
                    {selectedMenuItem === 6 ? <ResourcesActiveSVG /> : <ResourcesInactiveSVG />}
                    <p
                      className={
                        selectedMenuItem === 6
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      Resources
                    </p>
                  </div>

                  <a href="/faqs" className="header-footer-legal header-footer-faqs">
                    <FAQSVG />
                    <p
                      className={
                        router.pathname === "/faqs"
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      &nbsp; FAQs
                    </p>
                  </a>
                </div>

                <div className="header-menu-footer-left-content">
                  <a href="/contact-us" className="header-footer-legal">
                    <ContactSalesSVG />
                    <p className="header-footer-legal-text">Contact Sales</p>
                  </a>
                  <div className="header-footer-legal">
                    <WatchDemoSVG />
                    <p className="header-footer-legal-text">Watch demo</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
