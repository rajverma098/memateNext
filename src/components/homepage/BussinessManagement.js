import React from "react";
import Images from "../../assests/images";
import "./styleHome1.css";
import WhiteButtonBammer from "@/app/hover-button/WhiteButtonBammer";
import TronRequestADemo from "@/app/hover-button/TronRequestADemo";
const BussinessManagement = () => { 
  return (
    <div className="home-page-content filtercolorbox">
      <div className="home-container-wrapper">
      <div
        className="home-page-section"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="home-platform">
          <h1>Business management software.</h1>
          <h2>All-in-One Platform</h2>
        </div>
        <div className="gradientHeading gradiientColor header-text" 
        >
          to run your business
        </div>
      </div>
      
      <div className="image-wrapper">
        {/* <img src={Images.landingHero} /> */}
        <div className="macBook-image">
          <div className="big-img-mac">
            <div className="big-img-macMain">
          <img
  alt="Business Management Software"
  src={Images.landingHero}
  width="1200"
  height="600"
  style={{ width: '100%', height: 'auto' }}
  loading="eager"
/>
            </div>
          
          </div>
        </div>
      </div>
       </div>
      <div className="how-to-use">
        <p>Easy-to-Use Business Management Software: to Start, Run,<br/> and Succeed in Your Business </p>
        {/* <p>to Start, Run, and Succeed in Your Business</p> */}
      </div>
      <div className="businesses-mode fontFamilyRomanHead">
        <span>
         Made for Small to Medium Businesses & Business Projects, Offering Simplicity & Control
        </span>
      </div>
     

 <div className="dflexbannerbtn">
      <div className="request-btn">
        <a
          href="https://app.memate.com.au/requestdemo"
          target="_blank"
          className="nav-btn--get-started  navbar-link"
        >
            <TronRequestADemo text="Request a Demo" />
        </a>
      </div>
      <div className="request-btn">
        <a
          href="https://app.memate.com.au/onboarding"
          target="_blank"
          className="nav-btn--get-started  navbar-link"
        >
            <WhiteButtonBammer text="Start Free Trial"/>
        </a>
      </div>
</div>


    </div>
  );
};

export default BussinessManagement;
