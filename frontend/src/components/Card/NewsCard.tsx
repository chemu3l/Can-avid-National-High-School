import React from "react";
import { Space } from "../../icons/antdImports";
import RegularCard from "./RegularCard";
import SpecialCard from "./SpecialCard";
import type { NewsCardInterface } from "../../types/NewsCard.interface";

const NewsCard: React.FC<NewsCardInterface> = ({
  cardType,
  cardTitle,
  cardDate,
  className,
  image,
  isAnnouncementsOrEvents
}) => {

  return (
  <Space vertical size="middle">
    {isAnnouncementsOrEvents ? (
        <SpecialCard
          isAnnouncementsOrEvents={isAnnouncementsOrEvents}
          cardType={cardType}
          cardTitle={cardTitle}
          cardDate={cardDate}
          className={className}
          image={image}
        />
      ) : (
        <RegularCard
          isAnnouncementsOrEvents={isAnnouncementsOrEvents}
          cardType={cardType}
          cardTitle={cardTitle}
          cardDate={cardDate}
          className={className}
          image={image}
        />
      )}
  </Space>
  );
};

export default NewsCard;
