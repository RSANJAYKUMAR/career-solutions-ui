import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { Work, People, School } from "@mui/icons-material";
import "../styles/common.css";

function Services() {
  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        // // backgroundImage: "url('/services-bg.jpg')", 
        // backgroundImage: /assets/courses/ser.webp,
        backgroundImage: "url('/assets/courses/ser.webp')",

        backgroundSize: "cover", 
        backgroundPosition: "center", 
        padding: "40px 0" 
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
            Our Services
          </Typography>
          <Box sx={{ textAlign: "left", marginTop: 2 }}>
            <Typography variant="h5" display="flex" alignItems="center" gutterBottom>
              <Work sx={{ marginRight: 1, color: "#007bff" }} /> Recruitment Services
            </Typography>
            <Typography variant="body1">Executive Search, Contingent Staffing, Temporary Staffing</Typography>
            
            <Typography variant="h5" display="flex" alignItems="center" gutterBottom sx={{ marginTop: 2 }}>
              <People sx={{ marginRight: 1, color: "#007bff" }} /> Staffing Solutions
            </Typography>
            <Typography variant="body1">Permanent Placement, Contract Staffing, Payroll Management</Typography>
            
            <Typography variant="h5" display="flex" alignItems="center" gutterBottom sx={{ marginTop: 2 }}>
              <School sx={{ marginRight: 1, color: "#007bff" }} /> Career Consulting
            </Typography>
            <Typography variant="body1">Resume Building, Interview Preparation, Career Coaching</Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Services;
