import { useLocation } from "react-router-dom";
import DropdownButton from "../../Button/DropdownButton";
import { aboutUsMenuItems, admissionMenuItems, navigationLabels, navigationRoutes } from "../../../constants/navigationDropdowns";
import { LinkButton } from "../../Button/Button";
import type { NavigationUnOrderListProps } from "../../../types/Button.interface";
import { useEffect } from "react";

const NavigationUnOrderList = ({ onItemClick, enableActive = false, }: NavigationUnOrderListProps)  => {
  const location = useLocation();
  useEffect(()=> {
    console.log("location.pathname: ", location.pathname);
  },[location.pathname])
  
  return (
    <ul>
          <li><LinkButton label={navigationLabels.home} link={navigationRoutes.home} onClick={onItemClick} /></li>
          <li>
            <DropdownButton
              label={navigationLabels.aboutUs}
              items={aboutUsMenuItems}
              className="dropdown-button"
              onItemClick={onItemClick}
            />
          </li>
          <li>
            <DropdownButton
              label={navigationLabels.admission}
              items={admissionMenuItems}
              className="dropdown-button"
              onItemClick={onItemClick}
            />
          </li>
          <li><LinkButton label={navigationLabels.career} link={navigationRoutes.career} onClick={onItemClick}/></li>
          <li><LinkButton label={navigationLabels.contactUs} link={navigationRoutes.contactUs} onClick={onItemClick}/></li>
        </ul>
    );
};
export default NavigationUnOrderList;