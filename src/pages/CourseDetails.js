import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state || {}; // Get course details from state

  if (!course) {
    return <Typography variant="h6" align="center">No course data available.</Typography>;
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "right", justifyContent: "center", background: "linear-gradient(to right,rgb(247, 251, 255),rgb(76, 205, 241))", padding: "40px 0" }}>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CardContent sx={{ textAlign: "center", maxWidth: "800px", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>{course.name}</Typography>
            <Typography variant="body1" paragraph>{course.description}</Typography>
          </CardContent>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseDetails;
