import { heroLandingImages } from "../../assets/images";
import HeroSection from "../../components/Hero/HeroSection";
import { buttonLabel } from "../../constants/buttonConstants";
import { VMCVList } from "../../constants/VMCVCardConstants";
import { newsData } from "../../constants/mockData";
import { newestThree } from "../../utils/helper.utils";
import { FaAngleDoubleRight } from "../../icons/othersImport";
import NewsCard from "../../components/Card/NewsCard";

const Home = () => {
  const topThreeNews = newestThree(newsData);
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
      {VMCVList.map((item, index) => (
        <div className="VMCV-card" key={index}>
          <div className="title-content">{item.title}</div>

          <div
            className="description-content"
            style={item.preLine ? { whiteSpace: "pre-line" } : {}}
          >
            {item.description}
          </div>
        </div>
      ))}
    </div>
      <div className="home-news-section">
            <div className="home-news-class">LATEST ANNOUNCEMENTS & EVENTS</div>
            <div className="home-news-class-card">
              {topThreeNews.map((item) => (
                <NewsCard
                  isAnnouncementsOrEvents={false}
                  key={item.id}
                  cardType={item.mockDataType}
                  cardTitle={item.title}
                  image={item.image}
                  cardDate={item.createdAt}
                  className="News-Card-Title"
                  onClick={() => console.log("Clicked:", item.id)}
                />
              ))}
            </div>
      </div>
    </div>
  );
};

export default Home;