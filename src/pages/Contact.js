import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        background: "linear-gradient(to right,rgb(247, 251, 255),rgb(76, 205, 241))"
      }}
    >
      {/* Responsive Full-Width Image with Contact Us Header */}
      <Box
        sx={{
          width: "100vw",
          height: "40vh",
          marginBottom: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/courses/teleus.jpg"
          alt="Contact Us"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Contact Us Header Overlay */}
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#ffffff",
            fontSize: "50px",
            padding: "10px 20px",
            fontFamily: "",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>
      </Box>

      {/* Contact Details Section */}
      <Container>
        <Box mt={5}>
          <Grid container spacing={3} justifyContent="center">
            {/* Address */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={5}
                sx={{
                  background: "#ffffff",
                  padding: 2,
                  textAlign: "center",
                  borderRadius: "10px",
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >
                <CardContent>
                  <LocationOn sx={{ fontSize: 50, color: "#007bff" }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>Address</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
                    W-583, School Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Mobile Number */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={5}
                sx={{
                  background: "#ffffff",
                  padding: 2,
                  textAlign: "center",
                  borderRadius: "10px",
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >
                <CardContent>
                  <Phone sx={{ fontSize: 50, color: "#007bff" }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>Mobile Number</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
                    +91 80989 70087
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Business EmailId */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={5}
                sx={{
                  background: "#ffffff",
                  padding: 2,
                  textAlign: "center",
                  borderRadius: "10px",
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >                <CardContent>
                  <Email sx={{ fontSize: 50, color: "#007bff" }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>Business Email Id</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
                    hr@careersolutionss.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={10}>
              <Card
                elevation={5}
                sx={{
                  padding: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  minHeight: "200px", // Increase height
                  maxWidth: "100%",  // Full width of the grid item
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 2 }}>
                    Get in Touch with Career Solution 👋
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: 2, color: "#555", fontSize: "1.2rem" }}>
                    Feel free to connect with us for any of your needs regarding our services.
                    Our support team is ready to solve any of your issues. Just push a text to us and
                    we will get back to you soon.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Full-Width Google Map */}
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          marginTop: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom color="ffffff">
          Location
        </Typography>
        <iframe
          title="Career Solutions Location"
          width="100%"
          height="600"
          style={{ border: 0, borderRadius: "8px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0986160306684!2d80.1944299!3d13.092936199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265000f1eaddb%3A0x174f57a42e12987f!2sCAREER%20PLACEMENT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1742297832608!5m2!1sen!2sin"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
