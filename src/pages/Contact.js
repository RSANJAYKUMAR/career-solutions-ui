import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const images = [
  "/contact-bg1.jpg",
  "/contact-bg2.jpg",
  "/contact-bg3.jpg"
];

const Contact = () => {
  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBgImage(images[index]);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        transition: "background-image 1s ease-in-out"
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <LocationOn sx={{ marginRight: 1 }} /> <strong>Address:</strong> 123 Career Solutions Pvt Ltd, Tech Park, City, Country
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <Email sx={{ marginRight: 1 }} /> <strong>Email:</strong> contact@careersolutions.com
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
              <Phone sx={{ marginRight: 1 }} /> <strong>Phone:</strong> +123 456 7890
            </Typography>
          </Box>
          
          {/* Embedded Google Map */}
          <Box sx={{ marginTop: 2, borderRadius: "8px", overflow: "hidden" }}>
            <iframe
              title="Career Solutions Location"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Tech+Park,City,Country"
            ></iframe>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
