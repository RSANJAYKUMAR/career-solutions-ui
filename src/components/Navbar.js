import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "#007bff", color: "white", padding: "15px", width: "100%", fontWeight: "bold" }}>
      <Toolbar style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography variant="h5" style={{ fontWeight: "bold", textTransform: "uppercase", marginLeft: "20px" }}>
          Career Solutions
        </Typography>
        
        {/* Navigation Links */}
        <Box component="ul" style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>About Us</Link></li>
          <li><Link to="/services" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>Services</Link></li>
          <li><Link to="/courses" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>Courses</Link></li>
          <li><Link to="/domains" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>Domains</Link></li>
          <li><Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>Contact Us</Link></li>
          <li><Link to="/enquiry" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500" }}>Enquiry</Link></li>
        </Box>
        
        {/* Social Media Icons */}
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
