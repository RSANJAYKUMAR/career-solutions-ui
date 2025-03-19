import React, { useEffect } from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { Work, People, School, Business, Gavel, Group, Assignment } from "@mui/icons-material";
import "../styles/common.css";

function Services() {
  useEffect(() => {
    document.title = "Career Solution"; // Change tab title
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/assets/courses/LOGO.jpeg"; // Set services-specific favicon
    }

    return () => {
      if (favicon) {
        favicon.href = "/assets/courses/LOGO.jpeg"; // Reset to default when leaving
      }
    };
  }, []);

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "40px 0", 
        background: "linear-gradient(to right,rgb(247, 251, 255),rgb(76, 205, 241))" 
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#007bff", textAlign: "center" }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "#333", marginBottom: 4, fontWeight: 900 }}>
          At Career Solution, we specialize in providing top-quality manpower solutions tailored to meet the unique needs of your business. Whether you're looking for temporary, permanent, or specialized workforce solutions, we are here to ensure you have the right talent at the right time.
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
  {[
    { icon: <Work />, title: "Temporary Staffing Solutions", description: "Short-term Contracts, On-demand Labor, Flexible Schedules, Industries: Retail, Construction, Warehousing, Hospitality, Manufacturing" },
    { icon: <People />, title: "Permanent Staffing Solutions", description: "Executive Search, Specialized Recruitment, End-to-End Recruitment, Industries: Technology, Finance, Healthcare, Marketing, Engineering, Education" },
    { icon: <School />, title: "Skilled Labor Staffing", description: "Technical Staff, Trade Workers, Certified Workers, Industries: Construction, Manufacturing, Engineering, Energy, Utilities" },
    { icon: <Business />, title: "Workforce Outsourcing", description: "Payroll Management, Compliance and Legal, Training and Development, Industries: Corporate, Retail, Logistics, Healthcare, Education" },
    { icon: <Group />, title: "Recruitment Process Outsourcing (RPO)", description: "Full-Cycle Recruiting, Customizable Solutions, Global Reach, Industries: Technology, Business Services, Telecommunications, Life Sciences" },
    { icon: <Assignment />, title: "Executive Search and Leadership Hiring", description: "C-Suite Recruiting, Board of Directors Recruitment, Talent Mapping" },
    { icon: <Gavel />, title: "Labor Compliance and HR Solutions", description: "Employment Contracts, Labor Law Consulting, Employee Benefits Administration" }
  ].map((service, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card 
        elevation={3} 
        sx={{ 
          height: "250px", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: 2, 
          textAlign: "center", 
          borderRadius: "10px", 
          background: "#ffffff",
          transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
          '&:hover': {
            background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
            transform: "scale(1.05)",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
          }
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ fontSize: 50, color: "#007bff" }}>{service.icon}</Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1, color: "#333" }}>{service.title}</Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: "#555", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


        <Box sx={{ marginTop: 5, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#007bff" }}>
            Why Choose Career Solution?
          </Typography>
          <Typography variant="body1" sx={{ color: "#333", marginTop: 2 }}>
            ✓ Experienced Workforce | ✓ Tailored Solutions | ✓ Fast and Efficient | ✓ Comprehensive Support
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
