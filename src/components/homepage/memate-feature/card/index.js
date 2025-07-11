import React from "react";
import "../card/style.css";
import WhiteNormalButton from "@/app/hover-button/WhiteNormalButton";

const FeatureCard = (props) => {
 
  return (
    <>
      <div className="all-in-one allinonefeatueWrap" >
        <div className="strean-line">
       <div className={`main-operation${props.className ? ` ${props.className}` : ''}`}>
            <div className="operation-left">
              <p className="all-text">{props.subHeading}</p>
              <div className="smallH2Heading">{props.topHeading}</div>
              <div className="mediumHeadText">{props.mainHeading}</div>

              <div className="operation-desp">
                <p>{props.description}</p>
              </div>
              <div className="request-btn request-btn-bg" 
   >
        <a href='/features' className="nav-btn--get-started get-started-border-box navbar-link"><WhiteNormalButton text={props.cardButton} /></a>
      </div>
            </div>

            <div className="operation-right">
              <div className="boost-image">{props.maxImage}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
