import React from "react";
import './style.css';


const MenuRessources = () => {

  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper-res">
        <div className="menu-feature-management">
        <p className="menu-feature-text"><a to="/resources" className={` ${location.pathname === "/resources" ? "navbar-item-active" : ""}`}>Resources & tools</a></p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <a to="/supplier-database" className={` ${location.pathname === "/supplier-database" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Supplier Database</p></a>
            </div>
          </div>
        
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <a to="/knowledge-base" className={` ${location.pathname === "/knowledge-base" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Knowledge Base</p></a>
            </div>
          </div>
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <a to="/brand" className={` ${location.pathname === "/brand" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Brand</p></a>
            </div>
          </div>
          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
              <a to="/delete-request" className={` ${location.pathname === "/delete-request" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Delete Request</p></a>
            </div>
          </div> */}
        </div>
        <div className="menu-feature-management">
          <p className="menu-feature-text">Memate wiki</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <a to="/memate-wiki" className={` ${location.pathname === "/memate-wiki" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Memate Wiki</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRessources;
