import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Overview from "@/pages/About/Overview";
import Department from "@/pages/About/Department";
import Announcement from "@/pages/About/Announcement";
import Event from "@/pages/About/Event";
import MOOE from "@/pages/About/Mooe";
import PageNotFound from "@/pages/NotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About page */}
        <Route path="/about" element={<Overview />} />
        <Route path="/about/departments" element={<Department />} />
        <Route path="/about/announcements" element={<Announcement />} />
        <Route path="/about/events" element={<Event />} />
        <Route path="/about/mooe" element={<MOOE />} />

        {/* Not Found page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
