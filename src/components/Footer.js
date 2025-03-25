// import React from "react";
// import { AppBar, Toolbar, Typography, Box, IconButton, Divider } from "@mui/material";
// import { Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer style={{
//       background: "#007bff",
//       color: "white",
//       padding: "20px",
//       marginTop: "auto",
//       position: "relative",
//       bottom: "0",
//       width: "100%",
//       fontWeight: "bold",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       textAlign: "center"
//     }}>
// {/* Address Section with Bright White Text */}
// <Box style={{ color: "white", marginBottom: "10px", fontSize: "16px", fontWeight: "500" }}>
//   <Typography variant="h6" style={{ fontWeight: "bold", textTransform: "uppercase", color: "white" }}>Career Solutions Private Limited</Typography>
//   <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}> W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101</Typography>
//   <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}>📧 Email: <a href="mailto:hr@careersolutions.com" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>hr@careersolutionss.com</a></Typography>
//   <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}>📞 Phone: <a href="tel:+12345678999" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}> 91-9360718107</a></Typography>
// </Box>

//       {/* Divider */}
//       <Divider style={{ backgroundColor: "white", width: "80%", margin: "10px 0" }} />

// {/* Quick Links */}
// <Box style={{ display: "flex", gap: "15px", marginBottom: "10px" }}>
//   <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
//   <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
//   <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
//   <Link to="/courses" style={{ color: "white", textDecoration: "none" }}>Courses</Link>
//   <Link to="/domains" style={{ color: "white", textDecoration: "none" }}>Domains</Link>
//   <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
// </Box>

//       {/* Tagline */}
//       <Typography variant="body2" style={{ fontStyle: "italic", marginBottom: "10px", color: "white" }}>
//         "Empowering Careers, Building Futures."
//       </Typography>

//       {/* Centered copyright text */}
//       <Typography variant="body1" style={{ color: "white", marginBottom: "10px" }}>
//         &copy; {new Date().getFullYear()} Career Solutions Private Limited. All rights reserved.
//       </Typography>

//       {/* Centered social media icons */}
//       <Box display="flex" justifyContent="center">
//         <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <Instagram style={{ color: "white" }} />
//         </IconButton>
//         <IconButton component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//           <LinkedIn style={{ color: "white" }} />
//         </IconButton>
//         <IconButton component="a" href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
//           <WhatsApp style={{ color: "white" }} />
//         </IconButton>
//         <IconButton component="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//           <YouTube style={{ color: "white" }} />
//         </IconButton>
//       </Box>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Typography, Box, IconButton, Divider } from "@mui/material";
import { Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      background: "#007bff",
      color: "white",
      padding: "20px",
      marginTop: "auto",
      width: "100%",
      fontWeight: "bold",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}>
      {/* Address Section */}
      <Box sx={{
        color: "white",
        mb: 2,
        fontSize: { xs: "12px", sm: "14px" },
        fontWeight: "500",
        alignItems: "center",
        textAlign: "center"
      }}>
        {/* Address Section with Bright White Text */}
        <Typography variant="h6" style={{ fontWeight: "bold", textTransform: "uppercase", color: "white" }}>Career Solutions Private Limited</Typography>
        <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}> W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101</Typography>
        <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}>📧 Email: <a href="mailto:hr@careersolutionss.com" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>hr@careersolutionss.com</a></Typography>
        <Typography variant="body2" style={{ fontSize: "14px", color: "white" }}>📞 Phone: <a href="tel:9360718107" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}> 91-9360718107</a></Typography>
      </Box>

      {/* Divider */}
      <Divider sx={{
        backgroundColor: "white", width: "80%", my: 1, alignItems: "center",
        textAlign: "center"
      }} />

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
      <Typography variant="body2" sx={{ fontStyle: "italic", mb: 2, fontSize: { xs: "12px", sm: "14px" } }}>
        "Empowering Careers, Building Futures."
      </Typography>

      {/* Copyright */}
      <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: "12px", sm: "14px" } }}>
        &copy; {new Date().getFullYear()} Career Solutions Private Limited. All rights reserved.
      </Typography>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", gap: { xs: "5px", sm: "10px" }, justifyContent: "center" }}>
        <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={{ fontSize: { xs: "18px", sm: "24px" } }}>
          <Instagram sx={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={{ fontSize: { xs: "18px", sm: "24px" } }}>
          <LinkedIn sx={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" sx={{ fontSize: { xs: "18px", sm: "24px" } }}>
          <WhatsApp sx={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" sx={{ fontSize: { xs: "18px", sm: "24px" } }}>
          <YouTube sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;