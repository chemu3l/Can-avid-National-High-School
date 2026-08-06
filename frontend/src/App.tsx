import React from "react";
import MainLayout from "@/layout/Mainlayout";
import Footer from "@/components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MainLayout />
      <Footer />
    </div>
  );
};

export default App;
