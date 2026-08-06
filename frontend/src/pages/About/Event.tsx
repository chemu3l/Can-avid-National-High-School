import { heroLandingImages } from "@/assets/images";
import HeroSection from "@/components/Hero/HeroSection";
import { FaAngleDoubleRight } from "@/icons/othersImport";
import { aboutuspageSubtitle } from "@/constants/mockData";
const Event = () => {
  return (
    <div className="aboutUs-page">
      <HeroSection
        title=""
        subtitle={aboutuspageSubtitle}
        buttonText=""
        image={heroLandingImages}
        onButtonClick={() => console.log("Button clicked")}
        icon={<FaAngleDoubleRight />}
        iconPosition="right"
      />
    </div>
  );
};

export default Event;