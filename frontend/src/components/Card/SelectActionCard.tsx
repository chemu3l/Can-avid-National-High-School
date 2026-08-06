import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import useMediaQuery from "@mui/material/useMediaQuery";

const cards = [
  {
    id: 1,
    title: "VISION",
    description:
      "We dream of Filipinos who passionately love their country and whose competencies and values enable them to realize their full potential and contribute meaningfully in building the nation as a learner-centered public institution the department of education continuously improves it self to better serves its stakeholders.",
  },
  {
    id: 2,
    title: "MISSION",
    description:
      "To protect and promote the right of every Filipino to quality, equitable, culture-based and complete basic education where: Students learn in a child-friendly, gender-sensitive, safe and motivating environment.\n\nTeachers facilitate learning and constantly nurture every learner. Families, communities, and other stakeholders are actively engaged. They share responsibility for developing lifelong learners. Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.",
  },
  {
    id: 3,
    title: "CORE VALUES",
    description: ["Maka-Diyos", "Maka-tao", "Makakalikasan", "Maka-bansa"],
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(1);
  const isBetween1200And1278 = useMediaQuery(
    "(min-width:1200px) and (max-width:1278px)",
  );
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex", // ✅ make container a flexbox
        justifyContent: "center", // ✅ centers all child Grid items horizontally
        rowGap: "2rem", // optional vertical gap for wrapping
        width: "100%",
        marginTop: "60px",
      }}
    >
      {cards.map((card, index) => (
        <Grid
          key={card.id}
          size={{
            xs: 12, // full width on mobile
            md: card.id === 3 ? 12 : 6, // first two cards: 50%, third card: full width on md
            lg: 4, // large screens: each 1/3 width
          }}
          sx={{
            display: "flex",
            justifyContent: "center", // horizontally center the content
            alignItems: "flex-start", // optional: align content to top
          }}
        >
          <Card
            sx={{
              width: {
                xs: "100%",
                md: card.id === 3 ? "50%" : "100%", // third card narrower on medium screens
                lg: "20rem",
              },
            }}
            className="vmc-card"
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                "&.Mui-focusVisible": {
                  outline: "none", // removes the focus ring
                },
                "&:focus": {
                  outline: "none", // removes focus outline
                },
                "&:active": {
                  outline: "none", // removes active outline
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "var(--white-background-color)",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    display: "flex",
                    backgroundColor: "#5E936C",
                    width: "100%",
                    justifyContent: "center",
                    padding: "1rem",
                    borderRadius: "10px",
                    fontSize: "1rem",
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  className="vmc-card-selection"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)", // back shadow
                    height: {
                      xs: "200px", // mobile screen height
                      sm: "auto", // tablet and above use automatic height
                    },
                    overflowY: "auto", // optional: scroll if content exceeds height
                  }}
                >
                  {Array.isArray(card.description) ? (
                    <ul
                      className="core-values"
                      style={{ paddingLeft: "20px", lineHeight: 3 }}
                    >
                      {card.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <div
                      style={{
                        whiteSpace: "pre-line",
                        lineHeight: isBetween1200And1278 ? 1.3 : 1.5,
                      }}
                    >
                      {card.description}
                    </div>
                  )}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SelectActionCard;
