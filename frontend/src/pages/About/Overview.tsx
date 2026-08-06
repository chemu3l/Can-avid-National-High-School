import { mockData2 } from "@/assets/images";
import HeroSection from "@/components/Hero/HeroSection";
import { FaAngleDoubleRight } from "@/icons/othersImport";
import { aboutuspageSubtitle } from "@/constants/mockData";
import AboutUsCNHSAccredition from "@/components/AboutUs/AboutUsCnhsAccredition";
import AboutUsGlanceOfTheSchool from "@/components/AboutUs/AboutUsGlanceOfTheSchool";
import Reviews from "@/components/AboutUs/AboutUsFeedbackAndReviews";

const Overview = () => {

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
      <AboutUsCNHSAccredition />
      <AboutUsGlanceOfTheSchool />
      <Reviews />
    </div>
  );
};

export default Overview;
