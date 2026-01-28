import { logo } from "../../assets/images";
import NavigationUnOrderList from "./NavItems/NavBarUnOrderList";
import { FaFacebookF, FaEnvelope } from "../../icons/othersImport";

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="right-top-bar">
          <div id="top-bar-trapezoid">
          </div>
          <p>Join with us and be part of the success</p>
        </div>
        <div className="left-top-bar">
          <FaFacebookF className="facebook-icon" />
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="logo-section">
          <img src={logo} alt="School Logo" />
          <span>CAN-AVID NATIONAL HIGH SCHOOL</span>
        </div>
        <button className="message-button">
          <span>MESSAGE US</span>
          <FaEnvelope className="envelope-icon" />
        </button>
      </div>
      {/* Navigation Menu */}
      <nav className="navbar">
        <NavigationUnOrderList />
      </nav>
    </header>
  );
};

export default Navbar;