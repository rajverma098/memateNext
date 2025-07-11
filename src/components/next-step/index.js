import React from "react";
import "./nextstep.css";
import WhiteButtonBammer from "@/app/hover-button/WhiteButtonBammer";
import TronRequestADemo from "@/app/hover-button/TronRequestADemo";


const NextStep = (props) => {

  return (
    <div className="next-step">
      <h3>Take the</h3>
      <div className="next-title">
        <div className="nextStepHeading">next step</div>
      </div>
      <div className="next-step-page-description">
        <p className="next-step-data">
          We believe in supporting Australian businesses.
        </p>
        <span className="next-step-data-description">
          Right now, we’re offering zero onboarding and migration fees for every
          legitimate Australian company.
        </span>
      </div>
      <div className="next-step-btn-container">
               <div className="dflexbannerbtn">
      <div className="request-btn request-btn-bg">
        <a href="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text={props.text} /></a>
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
    </div>
  );
};

export default NextStep;
