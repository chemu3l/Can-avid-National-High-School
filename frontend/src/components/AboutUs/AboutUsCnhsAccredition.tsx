import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { accreditationData } from "@/constants/mockData";
import { styled } from "@mui/material/styles";

const AboutUsCNHSAccredition = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          size={{ xs: 4, sm: 8, md: 12 }}
          className="cnhs-accredition-header"
        >
          <Item className="cnhs-accredition-sub-header">
            <div className="cnhs-accredition-green-header"></div>
            <div className="cnhs-accredition-title">
              CNHS&nbsp;<p>Accreditation</p>
            </div>
          </Item>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          >
            {accreditationData.map((data) => (
              <Grid
                key={data.id}
                size={{ xs: 4, sm: 4, md: 4, lg: 3 }}
                className="cnhs-accredition-values"
              >
                <Box
                  sx={{
                    width: 300,
                    height: 200,
                    borderRadius: 1,
                    bgcolor: "#ffffff",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      bgcolor: "#ffffff",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                  className="box-values"
                >
                  <Box
                    component="img"
                    src={data.image}
                    alt={data.title}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                    }}
                  />

                  {/* TEXT */}
                  <Box
                    sx={{
                      p: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      component="h4"
                      sx={{
                        m: 0,
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#333",
                        textAlign: "center",
                      }}
                    >
                      {data.description}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
export default AboutUsCNHSAccredition;
