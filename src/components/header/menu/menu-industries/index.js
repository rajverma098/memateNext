// import menuImages from "../../../../assests/menu-images";
import "./style.css";
import CreativeAgenciesSVG from "../../../../svg/CreativeAgenciesSVG";
import ElectronicRepairSVG from "../../../../svg/ElectronicRepairSVG";
import PhotoAndVideoAgencySVG from "../../../../svg/PhotoAndVideoAgencySVG";
import AutomotiveSVG from "../../../../svg/AutomotiveSVG";
import StartupsSVG from "../../../../svg/StartupsSVG";
import ConstructionSVG from "../../../../svg/ConstructionSVG";


const MenuIndustry = () => {

  return (
    <div className="menu-feature-wrapper-industries">
      <div className="menu-feature-wrapper-upper">
        <div className="menu-feature-management">
          <p className="menu-feature-text">INDUSTRIES</p>

          <div
            className="menu-management-features"
            
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.creativeAgency} /> */}
              <CreativeAgenciesSVG/>
              <a href="/industries/business-software-for-creative-agencies" className={` ${location.pathname === "/industries/business-software-for-creative-agencies" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon021">Creative Agencies</p></a>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              {/* <img src={menuImages.electronic} /> */}
              <ElectronicRepairSVG/>
              <a href="/industries/software-for-electronic-repair-businesses" className={` ${location.pathname === "/industries/software-for-electronic-repair-businesses" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon022"  style={{ width: "100%" }}>Electronic Repair Specialists</p></a>
              </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.photoVideoAgency} /> */}
              <PhotoAndVideoAgencySVG/>
              <a href="/industries/software-for-photo-video-agencies" className={` ${location.pathname === "/industries/software-for-photo-video-agencies" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon023"  style={{ width: "100%" }}>Photo & Video Agency</p></a>
           </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.automotive} /> */}
              <AutomotiveSVG/>
              <a href="/industries/business-software-for-automotive-industry" className={` ${location.pathname === "/industries/business-software-for-automotive-industry" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon024">Automotive</p></a>
            </div>
          </div>
          <div
            className="menu-management-feature"
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.startUps} /> */}
              <StartupsSVG/>
              <a href="/industries/business-management-software-for-startups" className={` ${location.pathname === "/industries/business-management-software-for-startups" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon025" >Startups</p></a>
            </div>
          </div>
          <div
            className="menu-management-feature"
           >
            <div className="menu-client-management">
              {/* <img src={menuImages.construction} /> */}
              <ConstructionSVG/>
              <a href="/industries/business-software-for-construction-industry" className={` ${location.pathname === "/industries/business-software-for-construction-industry" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon026" >Construction</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIndustry;
