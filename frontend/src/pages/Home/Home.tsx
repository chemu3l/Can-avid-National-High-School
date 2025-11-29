import { heroLandingImages } from "../../assets/images";
import HeroSection from "../../components/Hero/HeroSection";
import { buttonLabel } from "../../constants/buttonConstants";
import {VMCVTitle, VMCVDescription } from "../../constants/VMCVCardConstants";
import { FaAngleDoubleRight } from "../../icons";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection
        title="Welcome to Can-avid National High School"
        subtitle="Empowering students to achieve excellence through quality education, innovation, and character development."
        buttonText={buttonLabel.learnMore}
        image={heroLandingImages}
        onButtonClick={() => console.log("Button clicked")}
        icon={<FaAngleDoubleRight />}
        iconPosition="right"
      />
      <div className="VMCV-section">
        <div className="VMCV-card">
          <div className="title-content">{VMCVTitle.vision}</div>
          <div className="description-content">{VMCVDescription.vision}</div>
        </div>
        <div className="VMCV-card">
          <div className="title-content">{VMCVTitle.mission}</div>
          <div className="description-content" style={{whiteSpace: "pre-line"}}>{VMCVDescription.mission}</div>
        </div>
        <div className="VMCV-card">
          <div className="title-content">{VMCVTitle.coreValue}</div>
          <div className="description-content">
            <ul>
              {VMCVDescription.coreValues.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;