import { mockData2 } from "@/assets/images";
import HeroSection from "@/components/Hero/HeroSection";
import { FaAngleDoubleRight } from "@/icons/othersImport";
import { aboutuspageSubtitle } from "@/constants/mockData";
import OrgChart from "@/components/AboutUs/AboutUsDepartment";

const Department = () => {
  return (
    <div className="aboutUs-page">
      <HeroSection
        title=""
        subtitle={aboutuspageSubtitle}
        buttonText=""
        image={mockData2}
        onButtonClick={() => console.log("Button clicked")}
        icon={<FaAngleDoubleRight />}
        iconPosition="right"
      />
      <OrgChart />
    </div>
  );
};

export default Department;