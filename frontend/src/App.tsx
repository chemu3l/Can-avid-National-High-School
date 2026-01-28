import React from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./assets/styles/rootPage.css"
import "./assets/styles/rootPage.css";
import "./assets/styles/Navbar.css";
import "./assets/styles/HomePage.css";
import "./assets/styles/HeroPage.css";
import "./assets/styles/FooterPage.css";
import "./assets/styles/PageNotFound.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;