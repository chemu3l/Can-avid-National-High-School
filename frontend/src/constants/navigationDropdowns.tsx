import type { DropdownItemInterface } from "../types/Button.interface";

const aboutUsMenuItems: DropdownItemInterface[] = [
  { key: "1", label: "Department", path: "/about/departments" },
  { key: "2", label: "Announcements", path: "/about/announcements" },
  { key: "3", label: "Events", path: "/about/events" },
  { key: "4", label: "MOOE", path: "/about/mooe" },
];

const admissionMenuItems: DropdownItemInterface[] = [
  { key: "1", label: "Request form", path: "/admission/request-form" },
  { key: "2", label: "Ask Form", path: "/admission/ask-form" },
];

const navigationLabels = { 
    home: "Home",
    aboutUs: "About Us",
    admission: "Admission",
    career: "Career",
    contactUs: "Contact Us",
}
const navigationRoutes = { 
    home: "/",
    career: "/career",
    contactUs: "/contact-us",
}
export {aboutUsMenuItems, admissionMenuItems, navigationLabels, navigationRoutes};