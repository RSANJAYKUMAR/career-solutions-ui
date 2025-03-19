import React from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { BusinessCenter, Description, Group, Speed } from "@mui/icons-material";
import "../styles/common.css";

function Home() {
  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "40px 0", 
        background: "linear-gradient(to right,rgb(247, 251, 255),rgb(76, 205, 241))" 
      }}
    >
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#007bff",textAlign: "center"}}>
           <h1>Welcome to Career Solutions</h1>     
          </Typography>
          {/* <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#007bff",textAlign: "center"}}>
           <h2>Your Trusted Career Partner!</h2>
          </Typography> */}
                    <Typography variant="h5" sx={{ marginBottom: 3, textAlign: "center", color: "#007bff",fontWeight: "bold" }}>
                   Your Trusted Career Partner!
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3, textAlign: "center", color: "#007bff",fontWeight: "bold" }}>
            Find the Right Opportunity. Build Your Dream Career.
          </Typography>

          <Box sx={{ textAlign: "left", marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              For Job Seekers:
            </Typography>
            <Typography variant="body1">
              "Looking for the perfect job? We connect skilled professionals like you with top companies. Whether you're a fresher or an experienced candidate, we help you take the next big step in your career."
            </Typography>
          </Box>

          <Box sx={{ textAlign: "left", marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              For Employers:
            </Typography>
            <Typography variant="body1">
              "Finding the right talent has never been easier. We provide top-notch recruitment solutions to help your business grow with the best professionals in the industry."
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff", marginBottom: 2 }}>
              Why Choose Us?
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {[ 
                { text: "Personalized Career Guidance", icon: <BusinessCenter sx={{ fontSize: 40, color: "#007bff" }} /> },
                { text: "Expert Resume & Interview Support", icon: <Description sx={{ fontSize: 40, color: "#007bff" }} /> },
                { text: "Access to Leading Companies", icon: <Group sx={{ fontSize: 40, color: "#007bff" }} /> },
                { text: "Fast & Reliable Placement Services", icon: <Speed sx={{ fontSize: 40, color: "#007bff" }} /> }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div whileHover={{ scale: 1.05 }}>
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
                        {item.icon}
                        <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1 }}>{item.text}</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="contained" color="primary" size="large">
                  Explore Jobs
                </Button>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="contained" color="secondary" size="large">
                  Hire Talent
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;