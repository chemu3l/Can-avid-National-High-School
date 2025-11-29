import React from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;