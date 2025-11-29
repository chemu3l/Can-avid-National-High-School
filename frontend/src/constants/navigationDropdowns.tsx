import { type DropdownItem }  from "../components/Button/DropdownButton";

const aboutUsMenuItems: DropdownItem[] = [
  { key: "1", label: "Department" },
  { key: "2", label: "Announcements" },
  { key: "3", label: "Events" },
  { key: "4", label: "MOOE" },
];

const admissionMenuItems: DropdownItem[] = [
  { key: "1", label: "Department" },
  { key: "2", label: "Announcements" },
];

const navigationLabels = { 
    home: "Home",
    aboutUs: "About Us",
    admission: "Admission",
    career: "Career",
    contactUs: "Contact Us",

}
export {aboutUsMenuItems, admissionMenuItems, navigationLabels};