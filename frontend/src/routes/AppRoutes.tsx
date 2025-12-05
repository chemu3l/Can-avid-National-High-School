import { Routes, Route } from "react-router-dom";
import "../assets/styles/rootPage.css";
import "../assets/styles/Navbar.css";
import "../assets/styles/HomePage.css";
import "../assets/styles/HeroPage.css";
import "../assets/styles/FooterPage.css";
import "../assets/styles/PageNotFound.css";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/NotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;