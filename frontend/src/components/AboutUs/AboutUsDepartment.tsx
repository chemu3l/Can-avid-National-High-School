import React from "react";
import { department } from "@/constants/mockData";
import { principalImage } from "@/assets/images/index"
const OrgChart = () => {
  return (
    <div className="department-wrapper">
      <div className="department-container">
        <div className="department-card">
          <img src={principalImage}/>
          <div>
            <div>Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrgChart;
