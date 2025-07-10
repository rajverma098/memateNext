import "./style.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MenuLegal = () => {
  const location = useLocation();
  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper">
        <div className="menu-feature-management">
          <p className="menu-feature-text">Legal</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link to="/terms" className={` ${location.pathname === "/terms" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Terms & Conditions</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/privacy" className={` ${location.pathname === "/privacy" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Privacy</p></Link>
            </div>
          </div>

      

          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/security" className={` ${location.pathname === "/security" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Security</p></Link>
            </div>
          </div> */}

          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
              <Link to="/legal" className={` ${location.pathname === "/legal" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Legal</p></Link>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default MenuLegal;
