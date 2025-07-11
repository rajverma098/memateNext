import "./style.css";


const MenuLegal = () => {

  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper">
        <div className="menu-feature-management">
          <p className="menu-feature-text">Legal</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <a to="/terms" className={` ${location.pathname === "/terms" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Terms & Conditions</p></a>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
            <a to="/privacy" className={` ${location.pathname === "/privacy" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Privacy</p></a>
            </div>
          </div>

      

          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
            <a to="/security" className={` ${location.pathname === "/security" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Security</p></a>
            </div>
          </div> */}

          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
              <a to="/legal" className={` ${location.pathname === "/legal" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Legal</p></a>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default MenuLegal;
