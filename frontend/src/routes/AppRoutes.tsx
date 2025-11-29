import { Routes, Route } from "react-router-dom";
import "../assets/styles/rootPage.css";
import "../assets/styles/Navbar.css";
import "../assets/styles/HomePage.css";
import "../assets/styles/HeroPage.css";
import Home from "../pages/Home/Home";



const AppRoutes = () => {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;