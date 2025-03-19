import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from "@mui/material";
import { Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: "#007bff",
        color: "white",
        padding: "10px 20px",
        fontWeight: "bold",
        top: "0px",
        width: "100%",
        margin: 0,
        display: "flex" // Missing closing curly brace
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo / Title */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none" }}>
            <Avatar
              alt="Career Solutions Logo"
              src="/assets/courses/LOGO.jpeg"
              style={{ marginRight: 8 }}
            />
            <Typography variant="h5" style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Career Solutions
            </Typography>
          </Link>
        </div>
        {/* Navigation Links */}
        <Box component="ul" style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>About Us</Link></li>
          <li><Link to="/services" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Services</Link></li>
          <li><Link to="/courses" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Courses</Link></li>
          <li><Link to="/domains" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Domains</Link></li>
          <li><Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Contact Us</Link></li>
          <li><Link to="/enquiry" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Enquiry</Link></li>
        </Box>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center">
          <IconButton component="a" href="https://www.instagram.com/career_placement_solutions?igsh=MWp3bW91ODZ1dXVpNg==" target="_blank" rel="noopener noreferrer">
            <Instagram style={{ color: "white" }} />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/career-solutions-73786b355?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BybmkLYZ2ReiIhSEddEuhmg%3D%3D" target="_blank" rel="noopener noreferrer">
            <LinkedIn style={{ color: "white" }} />
          </IconButton>
          <IconButton component="a" href="https://api.whatsapp.com/send/?phone=8098970087&text&app_absent=0" target="_blank" rel="noopener noreferrer">
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
