import { heroLandingImages } from "../../assets/images";
import HeroSection from "../../components/Hero/HeroSection";
import { buttonLabel } from "../../constants/buttonConstants";
import { FaAngleDoubleRight } from "../../icons";


const Home = () => {
  return (
    <div className="home-page">
      <HeroSection
        title=""
        subtitle="Empowering students to achieve excellence through quality education, innovation, and character development."
        buttonText=""
        image={heroLandingImages}
        onButtonClick={() => console.log("Button clicked")}
        icon={<FaAngleDoubleRight />}
        iconPosition="right"
      />
    </div>
  );
};

export default Home;