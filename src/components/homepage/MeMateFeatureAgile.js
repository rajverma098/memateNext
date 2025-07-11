import React from "react";
import './MeMateFeatureAgile.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import FeatureCard from "./memate-feature/card";
const MeMateFeatureAgile = () => {
  return (
    <div className="agile-container-section mainOperationRight"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Agile"
          topHeading="Total control"
          mainHeading="anywhere"
          className="shadowRightline2 shadowLeftline2"
          description="At any stage, view projects, work, linked expenses, employee time, and subcontractors. Gain a clear overview of what’s happening in your company at any time."
          cardButton="See All Features "
          maxImage={
             <LazyLoadImage
                  alt="MeMate branding guidelines"
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-total-control-min.png"
                  effect="blur" 
                />
          }
        />
      </div>
    </div>
  );
};

export default MeMateFeatureAgile;
