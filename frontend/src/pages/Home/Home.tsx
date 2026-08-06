import { heroLandingImages } from "@/assets/images";

import HeroSection from "@/components/Hero/HeroSection";
import { buttonLabel } from "@/constants/buttonConstants";
import { homepageSubtitle } from "@/constants/mockData";
import { FaAngleDoubleRight } from "@/icons/othersImport";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import SelectActionCard from "@/components/Card/SelectActionCard";
import Latest from "@/components/Home/Latest";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeroSection
        title="Welcome to Can-avid National High School"
        subtitle={homepageSubtitle}
        buttonText={buttonLabel.learnMore}
        image={heroLandingImages}
        onButtonClick={() => console.log("Button clicked")}
        icon={<FaAngleDoubleRight />}
        iconPosition="right"
      />
      <SelectActionCard />
      <Latest />
    </React.Fragment>
  );
};

export default Home;
