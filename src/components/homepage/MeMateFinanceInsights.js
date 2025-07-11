import React from "react";
import "./MeMateFinanceInsights.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FeatureCard from "./memate-feature/card";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper mainOperationRight"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1400"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Finance"
          topHeading="Real-time financial"
          mainHeading="insights"
           className="shadowRightline2 shadowLeftline2"
          description="Oversee company performance by product or service type. Reward managers based on actual performance, and view transparent, easy-to-understand statistics."
          cardButton="See All Features "
          maxImage={
             <LazyLoadImage
                alt="Financial Reporting Software"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-real-time-min.png"
                effect="blur" 
                />
          }
        />
      </div>
    </div>
  );
};

export default MeMateFinanceInsights;
