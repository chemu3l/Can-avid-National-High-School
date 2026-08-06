import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import {news} from '@/constants/mockData';
import { getNewestItems, formatDate } from '@/utils/helper.utils';

const Cards = () => {
  const latestNews = getNewestItems(news);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {latestNews.map((card) => (
        <Box
          key={card.id}
          sx={{
            flex: "1 1 300px", // responsive width
            maxWidth: 345,
            minWidth: 200,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 300, // fixed height
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title || "Card image"}
              />
            </CardActionArea>

            <CardContent sx={{ flexGrow: 1, px: 3 }}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                sx={{
                  textAlign: "center",
                }}
              >
                {card.title}
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: 50,
                minHeight: 50,
                maxHeight: 50,
                px: 2,
                py: 0,
                boxSizing: "border-box",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {formatDate(card.date)}
              </Typography>

              <Button
                size="small"
                sx={{
                  backgroundColor: "#D9D9D9",
                  color: "#000000",
                  "&:hover": { backgroundColor: "#73d48d" },
                  textTransform: "none",
                }}
              >
                Read More &gt;
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
