import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Divider } from "@mui/material";
import { Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      background: "#007bff",
      color: "white",
      padding: "20px",
      marginTop: "auto",
      position: "relative",
      bottom: "0",
      width: "100%",
      fontWeight: "bold",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      {/* Address Section with Bright White Text */}
      <Box style={{ color: "white", marginBottom: "10px", fontSize: "16px", fontWeight: "500" }}>
        <Typography variant="h6" style={{ fontWeight: "bold", textTransform: "uppercase", color: "white" }}>Career Solutions Private Limited</Typography>
        <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}> W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101</Typography>
        <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}>📧 Email: <a href="mailto:hr@careersolutions.com" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>hr@careersolutionss.com</a></Typography>
        <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}>📞 Phone: <a href="tel:+12345678999" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>+91 80989 70087</a></Typography>
      </Box>

      {/* Divider */}
      <Divider style={{ backgroundColor: "white", width: "80%", margin: "10px 0" }} />

      {/* Quick Links */}
      <Box style={{ display: "flex", gap: "15px", marginBottom: "10px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        <Link to="/courses" style={{ color: "white", textDecoration: "none" }}>Courses</Link>
        <Link to="/domains" style={{ color: "white", textDecoration: "none" }}>Domains</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </Box>

      {/* Tagline */}
      <Typography variant="body2" style={{ fontStyle: "italic", marginBottom: "10px", color: "white" }}>
        "Empowering Careers, Building Futures."
      </Typography>

      {/* Centered copyright text */}
      <Typography variant="body1" style={{ color: "white", marginBottom: "10px" }}>
        &copy; {new Date().getFullYear()} Career Solutions Private Limited. All rights reserved.
      </Typography>

      {/* Centered social media icons */}
      <Box display="flex" justifyContent="center">
        <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram style={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn style={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <WhatsApp style={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <YouTube style={{ color: "white" }} />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;
