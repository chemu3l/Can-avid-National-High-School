import type { DropdownItemInterface } from "../types/Button.interface";

const aboutUsMenuItems: DropdownItemInterface[] = [
  { key: "1", label: "Overview", path: "/about/" },
  { key: "2", label: "Department", path: "/about/departments" },
  { key: "3", label: "Announcements", path: "/about/announcements" },
  { key: "4", label: "Events", path: "/about/events" },
  { key: "5", label: "MOOE", path: "/about/mooe" },
];

const admissionMenuItems: DropdownItemInterface[] = [
  { key: "1", label: "Request form", path: "/admission/request-form" },
  { key: "2", label: "Ask Form", path: "/admission/ask-form" },
];

type MenuType = "aboutUs" | "admission"

const menuMap: Record<MenuType, DropdownItemInterface[]> = {
  aboutUs: aboutUsMenuItems,
  admission: admissionMenuItems,
}

const navigationLabels = ["Home", "Career", "Contact Us"] as const;
type NavLabel = typeof navigationLabels[number];

const navigationRoutes: Record<NavLabel, string> = {
  Home: "/",
  Career: "/career",
  "Contact Us": "/contact-us",
}; 

export {aboutUsMenuItems, admissionMenuItems, navigationLabels, navigationRoutes, menuMap};