import React from "react";
import { Container, Typography, Paper, Box, Grid, Card, CardContent, Button } from "@mui/material";
import { People, VerifiedUser, TrendingUp } from "@mui/icons-material";
import "../styles/common.css";

function About() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 0", background: "linear-gradient(to right,rgb(247, 251, 255),rgb(76, 205, 241))" }}>
      <Container>
        <Paper elevation={4} sx={{
          padding: 4, borderRadius: "10px", textAlign: "center", marginBottom: 4, transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
          '&:hover': {
            background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
            transform: "scale(1.05)",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
          }
        }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
            About Us
          </Typography>

          <Typography variant="body" gutterBottom sx={{ fontWeight: "bold", color: "#555" }}>
            Career Solutions Private Limited is a leading recruitment and staffing solutions provider, dedicated to connecting top talent with esteemed organizations.We empower businesses with the right workforce while helping individuals achieve their career goals.           </Typography>

        </Paper>
      </Container>

      {/* HERO SECTION */}
      <Paper elevation={4} sx={{
        padding: 4, borderRadius: "10px", textAlign: "center", marginBottom: 4, transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
        '&:hover': {
          background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
          transform: "scale(1.05)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
        }
      }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
          Empowering Careers, Enhancing Lives
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Your Trusted Partner For Recruitment and Staffing Solutions.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Explore Our Services
        </Button>
      </Paper>

      <Container>
        <Box mt={5}>
          <Grid container spacing={3} justifyContent="center">
            {/* Our Mission */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{
                  padding: 2,
                  borderRadius: "10px",
                  textAlign: "center",
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >
                <CardContent>
                  <VerifiedUser sx={{ fontSize: 50, color: "#007bff" }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>Our Mission</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
                    To Empower businesses and job seekers with the best recruitment and staffing solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Why Choose Us? */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{
                  padding: 2,
                  borderRadius: "10px",
                  textAlign: "center",
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >                <CardContent>
                  <TrendingUp sx={{ fontSize: 50, color: "#007bff" }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>Why Choose Us?</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
                    Industry Expertise, Personalized Solutions, and a Proven Track Record in Staffing and Recruitment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Our Team */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{
                  padding: 2,
                  borderRadius: "10px",
                  textAlign: "center",
                  transition: "background 0.3s ease-in-out, transform 0.3s ease-in-out",
                  '&:hover': {
                    background: "linear-gradient(135deg,rgb(127, 209, 234) 0%,rgb(19, 162, 234) 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
                  }
                }}
              >
                <CardContent>
                  <People sx={{ fontSize: 50, color: "#007bff" }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>Our Team</Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
                    A dedicated group of professionals committed to delivering excellence in recruitment and staffing.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
