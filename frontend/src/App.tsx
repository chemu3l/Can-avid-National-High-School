import React from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";
import Footer from "./components/Footer/Footer.tsx";


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