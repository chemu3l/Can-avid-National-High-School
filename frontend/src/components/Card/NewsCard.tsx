import React from "react";
import { Card } from "antd";


interface NewsCardProps {
  cardType?: string;
  cardTitle?: string;
  cardDescription?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Card uses div
  image?: string; // URL for image
}

const NewsCard: React.FC<NewsCardProps> = ({
  cardType,
  cardTitle,
  cardDescription,
  className,
  image,
}) => {
  return (
  <Card className={className} title={cardType}>
    <Card type="inner" title={cardTitle}> 
      {cardDescription}
    </Card>
  </Card>
  );
};

export default NewsCard;
