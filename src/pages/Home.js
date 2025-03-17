// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Career Solutions Private Limited</h1>
//       <h2>Your Trusted Partner for Recruitment & Staffing</h2>
//       <p>Empowering Careers, Enhancing Lives</p>
//     </div>
//   );
// }

// export default Home;
// import React from "react";
// import "../styles/common.css";


// function Home() {
//   return (
//     <div className="container">
//       <h1>Welcome to Career Solutions Private Limited</h1>
//       <h2>Your Trusted Partner for Recruitment & Staffing</h2>
//       <p>Empowering Careers, Enhancing Lives</p>
//       <button className="cta-button">Explore Our Services</button>
//     </div>
//   );
// }

// export default Home;


///// 2 nd one 

// import React from "react";
// import "../styles/common.css";

// function Home() {
//   return (
//     <div className="container">
//       <h1>Welcome to Career Solutions Private Limited</h1>
//       <h2>Your Trusted Partner for Recruitment & Staffing</h2>
//       <p>Empowering Careers, Enhancing Lives</p>

//       <div className="cards-container">
//         <div className="card">
//           <h3>Recruitment Services</h3>
//           <p>Helping businesses find the right talent with our expert hiring solutions.</p>
//         </div>
//         <div className="card">
//           <h3>Staffing Solutions</h3>
//           <p>Flexible staffing solutions to meet your business needs efficiently.</p>
//         </div>
//         <div className="card">
//           <h3>Career Consulting</h3>
//           <p>Guiding individuals to build successful careers with our expert advice.</p>
//         </div>
//       </div>
      
//       <button className="cta-button">Explore Our Services</button>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import "../styles/common.css";

function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 0", backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center", backgroundColor: "white", borderRadius: "10px" }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
            Welcome to Career Solutions – Your Trusted Career Partner!
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }}>
            Find the Right Opportunity. Build Your Dream Career.
          </Typography>

          {/* Job Seekers Section */}
          <Box sx={{ textAlign: "left", marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              For Job Seekers:
            </Typography>
            <Typography variant="body1">
              "Looking for the perfect job? We connect skilled professionals like you with top companies. Whether you're a fresher or an experienced candidate, we help you take the next big step in your career."
            </Typography>
          </Box>

          {/* Employers Section */}
          <Box sx={{ textAlign: "left", marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              For Employers:
            </Typography>
            <Typography variant="body1">
              "Finding the right talent has never been easier. We provide top-notch recruitment solutions to help your business grow with the best professionals in the industry."
            </Typography>
          </Box>

          {/* Why Choose Us? */}
          <Box sx={{ textAlign: "left", marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              Why Choose Us?
            </Typography>
            <ul>
              <li>Personalized Career Guidance</li>
              <li>Expert Resume & Interview Support</li>
              <li>Access to Leading Companies</li>
              <li>Fast & Reliable Placement Services</li>
            </ul>
          </Box>

          {/* Buttons */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" size="large">
                Explore Jobs
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" size="large">
                Hire Talent
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;

