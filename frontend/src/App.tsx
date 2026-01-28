import React from "react";
import MainLayout from "./layout/Mainlayout.tsx";
import SwipeDrawer from "./components/Drawer/Drawer.tsx";
import "./assets/styles/DrawerNavigationList.css";
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
      <SwipeDrawer /> 
      <MainLayout />
    </>
  );
};

export default App;