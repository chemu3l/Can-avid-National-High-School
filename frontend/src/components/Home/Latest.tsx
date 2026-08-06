import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cards from "@/components/Card/Cards";

function Latest() {
  return (
    <Box sx={{ width: "100%", mt: 4, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
        }}
      >
        LATEST ANNOUNCEMENTS & EVENTS
      </Typography>
      <Cards />
    </Box>
  );
}

export default Latest;
