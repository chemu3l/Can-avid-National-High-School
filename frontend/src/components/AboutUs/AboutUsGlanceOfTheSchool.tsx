import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const AboutUsGlanceOfTheSchool = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    maxWidth: 400,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className="about-us-glance-of-the-school"
    >
      <Box sx={{ flexGrow: 1 }} className="about-us-glance-of-the-school-box">
        <Stack
          direction="column"
          spacing={4}
          bgcolor="#ffffff"
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          <Item className="about-us-glance-of-the-school-header">
            SCHOOL AT A GLANCE
          </Item>
          <Item className="about-us-glance-of-the-school-header-subtitle">
            A quick look at the people and numbers that help our community grow,
            learn, and succeed.
          </Item>
          <Stack
            className="stack-glance"
            direction="row"
            spacing={4}
            marginTop="0px !important"
            padding={2}
            display="flex"
            height={200}
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Item className="about-us-glance-of-the-school-value">
              <p className="glance-item-1">50+</p>
              <p className="glance-item-1" style={{ fontSize: 15 }}>
                Total Teachers & Staff
              </p>
            </Item>
            <Item className="about-us-glance-of-the-school-value">
              <p className="glance-item-1">7.45K</p>
              <p className="glance-item-1" style={{ fontSize: 15 }}>
                Total Students
              </p>
            </Item>
            <Item className="about-us-glance-of-the-school-value">
              <p className="glance-item-1">100.2M</p>
              <p className="glance-item-1" style={{ fontSize: 15 }}>
                Total Graduates
              </p>
            </Item>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
export default AboutUsGlanceOfTheSchool;
