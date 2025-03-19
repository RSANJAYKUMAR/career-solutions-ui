import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";
 
const DomainDetails = () => {
  const location = useLocation();
  const { domain } = location.state || {}; // Get domain details from state
 
  if (!domain) {
    return <Typography variant="h6" align="center">No domain data available.</Typography>;
  }
 
  return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "right", justifyContent: "center", background: "linear-gradient(to right,rgb(247, 251, 255),rgb(76, 205, 241))", padding: "40px 0" }}>
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Card style={{ maxWidth: "800px", width: "100%" }}>
          {/* <CardMedia
            component="img"
            height="400"
            image={domain.image}
            alt={domain.name}
            style={{ objectFit: "contain" }}
          /> */}
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>{domain.name}</Typography>
            <Typography variant="body1" paragraph>
              {domain.fullDescription}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
    </Box>
  );
};
 
export default DomainDetails;