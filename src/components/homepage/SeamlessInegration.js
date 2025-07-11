import React from "react";
import "./SeamlessInegration.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SeamlessInegration = () => {
  return (
    <div className="integration-section" >
      <div className="integation-title ">
        <span className="gradientAnimenate gradiientColor">seamless integration</span>
      </div>
      <div className="integration-brand-container shadowRightline3 shadowLeftline3">
        <LazyLoadImage
                        alt="Integration"
                        src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/imag-seamless-integration.jpg'}
                        effect="blur" 
                        style={{width: "100%", height: "auto"}}
                      />
      </div>
      <div className="integration-disp" >
          <p className="sequel_sans_roman_head">We use Stripe for payments, AWS to securely store your data, and Google Analytics to provide valuable insights.</p>
      </div>
    </div>
  );
};

export default SeamlessInegration;
