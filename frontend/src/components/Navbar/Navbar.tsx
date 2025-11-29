import { logo } from "../../assets/images";
import DropdownButton from "../Button/DropdownButton";
import { FaFacebookF, FaEnvelope, } from "../../icons";
import { aboutUsMenuItems, admissionMenuItems, navigationLabels } from "../../constants/navigationDropdowns";


const Navbar = () => {
  const handleSelect = (key: string) => {
    console.log("Selected:", key);
  };
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
        <ul>
          <li>{navigationLabels.home}</li>
          <li>
            <DropdownButton
              label={navigationLabels.aboutUs}
              items={aboutUsMenuItems}
              onSelect={handleSelect}
              closeOnSelect={true} // optional, defaults to true
              className="dropdown-button"
            />
          </li>
          <li>
            <DropdownButton
              label={navigationLabels.admission}
              items={admissionMenuItems}
              onSelect={handleSelect}
              closeOnSelect={true} // optional, defaults to true
              className="dropdown-button"
            />
          </li>
          <li>{navigationLabels.career}</li>
          <li>{navigationLabels.contactUs}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;