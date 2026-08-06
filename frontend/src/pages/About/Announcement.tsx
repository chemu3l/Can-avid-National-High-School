import { heroLandingImages } from "@/assets/images";
import HeroSection from "@/components/Hero/HeroSection";
import { FaAngleDoubleRight } from "@/icons/othersImport";
import { aboutuspageSubtitle } from "@/constants/mockData";
import ContentSection from "@/components/ContentSection/ContentSection";
import { useNavigate } from "react-router-dom";
import { news } from '@/constants/mockData'

const Announcement = () => {
  const navigate = useNavigate();
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
      <ContentSection
        title="School Announcements"
        items={news}
        onSeeMore={() => navigate("/announcements/all")}
      />
    </div>
  );
};

export default Announcement;
