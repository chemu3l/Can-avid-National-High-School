import React from "react";
import Navbar from "../components/Navbar/Navbar.tsx";
import AppRoutes from "../routes/AppRoutes.tsx";
import Footer from "../components/Footer/Footer.tsx";

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;