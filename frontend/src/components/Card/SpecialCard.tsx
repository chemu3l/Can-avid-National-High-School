import React from "react";
import { Card, Button, RightOutlined } from "../../icons/antdImports";
import { truncateText, formatDate } from "../../utils/helper.utils";
import type { NewsCardInterface } from "../../types/NewsCard.interface";

 const SpecialCard: React.FC<NewsCardInterface> = ({
   cardType,
   cardTitle,
   cardDate,
   className,
   image,
 }) => {
   return (

<Card  
        title={
          <div
            style={{
              backgroundColor: "#5E936C",
              color: "white",
              padding: "5px 4px",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
          {cardType}
        </div>
      }
    style={{ width: 300, textAlign: 'center', height: 410, border: "none",  }} >
    <Card
          className={className}
          style={{ height: 300 }}
          cover={
            image && (
              <img
                src={image}
                alt={cardTitle}
                draggable={false}
                style={{ width: "100%", objectFit: "cover", border: "none" }}
              />
            )
          }
        actions={[
            <span style={{ fontSize: "12px", color: "#040404", cursor: "default" }} key="date">
              {cardDate ? formatDate(cardDate) : "Date"}
            </span>,
            <Button type="link" key="read-more" style={{ fontSize: "14px", padding: 10, borderRadius: "15px", border: "1px solid #e5e5e5", backgroundColor: "#D9D9D9", color: "#040404" }}>
              Read more <RightOutlined />
            </Button>,
        ]}
        >
          <p>{truncateText(cardTitle, 40)}</p>
        </Card>
    </Card>
    );
};

export default SpecialCard;