import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MenuRessources = () => {
  const location = useLocation();
  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper-res">
        <div className="menu-feature-management">
        <p className="menu-feature-text"><Link to="/resources" className={` ${location.pathname === "/resources" ? "navbar-item-active" : ""}`}>Resources & tools</Link></p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link to="/supplier-database" className={` ${location.pathname === "/supplier-database" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Supplier Database</p></Link>
            </div>
          </div>
        
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/knowledge-base" className={` ${location.pathname === "/knowledge-base" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Knowledge Base</p></Link>
            </div>
          </div>
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/brand" className={` ${location.pathname === "/brand" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Brand</p></Link>
            </div>
          </div>
          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
              <Link to="/delete-request" className={` ${location.pathname === "/delete-request" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Delete Request</p></Link>
            </div>
          </div> */}
        </div>
        <div className="menu-feature-management">
          <p className="menu-feature-text">Memate wiki</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link to="/memate-wiki" className={` ${location.pathname === "/memate-wiki" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Memate Wiki</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRessources;
