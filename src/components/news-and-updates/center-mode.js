
import Images from "../../assests/images";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./style.css";
import { Link } from "react-router-dom";
import CustomerStoriesImage from "../../assests/blog-images/customersoriesCamera.png";
import customersoriesProImage from "../../assests/blog-images/customersoriesPro.png";
import customersoriesEliteImage from "../../assests/blog-images/customersoriesElite.png";
import customersoriesBoatImage from "../../assests/blog-images/customersoriesBoat.png";
import CustomerStoriesImage1 from "../../assests/blog-images/CustomerStoriesImage1.png";
import CustomerStoriesImage2 from "../../assests/blog-images/CustomerStoriesImage2.png";

import React from "react";
import Slider from "react-slick";

const SliderStories = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 3,
        autoplay: false,
        speed: 5000,
        autoplaySpeed: 4000,
   
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <Link to='/'><img src={CustomerStoriesImage} alt="Blog featured image"/></Link> 
          <div className="customerstoriesitem">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/customer-stories-single' className="readMoreBut">Read More</Link>
            </div>
        </div>
        <div className="slider-item">
        <Link to='/'><img src={customersoriesProImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">PROvinyl</div>
              <div className="date-heading-title"><Link>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/customer-stories-single' className="readMoreBut">Read More</Link>
            </div>
        </div>
        <div className="slider-item">
        <Link to='/'><img src={customersoriesEliteImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Elite Life</div>
              <div className="date-heading-title"><Link>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/customer-stories-single' className="readMoreBut">Read More</Link>
            </div>
        </div>
        <div className="slider-item">
        <Link to='/'><img src={customersoriesBoatImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Boat Wizard</div>
              <div className="date-heading-title"><Link>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/customer-stories-single' className="readMoreBut">Read More</Link>
            </div>
        </div>
        <div className="slider-item">
        <Link to='/'><img src={CustomerStoriesImage1} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/customer-stories-single' className="readMoreBut">Read More</Link>
            </div>
        </div>
        <div className="slider-item">
        <Link to='/'><img src={CustomerStoriesImage2} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/customer-stories-single' className="readMoreBut">Read More</Link>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderStories;
