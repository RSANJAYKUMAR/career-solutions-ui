"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { BusinessCenter, Description, Group, Speed, ArrowForward } from "@mui/icons-material"

function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: <BusinessCenter sx={{ fontSize: 40, color: "#2E3B55" }} />,
      title: "Personalized Career Guidance",
      description: "Get tailored advice for your unique career path and goals.",
    },
    {
      icon: <Description sx={{ fontSize: 40, color: "#2E3B55" }} />,
      title: "Expert Resume & Interview Support",
      description: "Stand out with professionally crafted resumes and interview preparation.",
    },
    {
      icon: <Group sx={{ fontSize: 40, color: "#2E3B55" }} />,
      title: "Access to Leading Companies",
      description: "Connect with top employers across various industries.",
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: "#2E3B55" }} />,
      title: "Fast & Reliable Placement Services",
      description: "Quick and efficient job matching with the right opportunities.",
    },
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/assets/courses/home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          position: "relative",
          pt: { xs: 10, md: 15 },
          pb: { xs: 15, md: 20 },
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)",
            zIndex: 1,
          },
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                opacity: isLoaded ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                  lineHeight: 1.2,
                }}
              >
                Your Career Journey <br />
                <Box
                  component="span"
                  sx={{
                    color: "#4dabf5",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  Starts Here
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  opacity: 0.95,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                Connecting top talent with leading organizations
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                   onClick={() => navigate("/enquiry")}
                  sx={{
                    bgcolor: "#4dabf5",
                    px: 5,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    boxShadow: "0 6px 20px rgba(77, 171, 245, 0.4)",
                    border: "2px solid transparent",
                    "&:hover": {
                      bgcolor: "#2196f3",
                      boxShadow: "0 8px 25px rgba(77, 171, 245, 0.6)",
                      transform: "translateY(-3px)",
                      border: "2px solid rgba(255,255,255,0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Find Jobs
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    borderWidth: "2px",
                    px: 5,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      borderColor: "#4dabf5",
                      bgcolor: "rgba(77, 171, 245, 0.2)",
                      color: "#4dabf5",
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 20px rgba(77, 171, 245, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Hire Talent
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: { xs: "none", md: "block" },
                transform: isLoaded ? "translateX(0)" : "translateX(50px)",
                opacity: isLoaded ? 1 : 0,
                transition: "all 0.8s ease-out 0.3s",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "400px",
                  width: "100%",
                  borderRadius: "15px",
                  overflow: "hidden",
                  // boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                 // border: "3px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    transform: "scale(1.02)",
                    // boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {/* <Box
                  component="img"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qtDWo4w7KqYn8j7f9hpq7lHP4ikYlc.png"
                  alt="Career Solutions - This Must Be The Place"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                /> */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // background: "linear-gradient(135deg, rgba(77,171,245,0.1) 0%, rgba(33,150,243,0.2) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Client Groups */}
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 6,
            textAlign: "center",
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.8s ease-out 0.5s",
          }}
        >
          {/* <Typography variant="h6" sx={{ color: "#2E3B55", mb: 3, fontWeight: 500 }}>
            TRUSTED BY LEADING COMPANIES
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid item key={item} xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    height: "60px",
                    width: "100%",
                    bgcolor: "#e9ecef",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.7,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 600, color: "#2E3B55" }}>
                    COMPANY {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Container>

      {/* For Job Seekers & Employers */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
                transition: "all 0.8s ease-out 0.7s",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      bgcolor: "rgba(77, 171, 245, 0.1)",
                      p: 1.5,
                      borderRadius: "10px",
                      mb: 2,
                    }}
                  >
                    <Group sx={{ fontSize: 30, color: "#4dabf5" }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#2E3B55" }}>
                    For Job Seekers
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
                    Looking for the perfect job? We connect skilled professionals like you with top companies. Whether
                    you're a fresher or an experienced candidate, we help you take the next big step in your career.
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: "#4dabf5",
                      fontWeight: 600,
                      p: 0,
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#2196f3",
                      },
                    }}
                  >
                    Explore Opportunities
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
                transition: "all 0.8s ease-out 0.9s",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      bgcolor: "rgba(77, 171, 245, 0.1)",
                      p: 1.5,
                      borderRadius: "10px",
                      mb: 2,
                    }}
                  >
                    <BusinessCenter sx={{ fontSize: 30, color: "#4dabf5" }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#2E3B55" }}>
                    For Employers
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
                    Finding the right talent has never been easier. We provide top-notch recruitment solutions to help
                    your business grow with the best professionals in the industry.
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: "#4dabf5",
                      fontWeight: 600,
                      p: 0,
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#2196f3",
                      },
                    }}
                  >
                    Hire Top Talent
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: "#f8f9fa", py: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              opacity: isLoaded ? 1 : 0,
              transition: "all 0.8s ease-out 1.1s",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#4dabf5",
                fontWeight: 600,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#2E3B55",
                mb: 2,
              }}
            >
              Our Advantages
            </Typography>
            <Divider
              sx={{
                width: "80px",
                mx: "auto",
                borderColor: "#4dabf5",
                borderWidth: 3,
                mb: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                maxWidth: "700px",
                mx: "auto",
                color: "#555",
              }}
            >
              We combine industry expertise with personalized service to deliver exceptional recruitment solutions.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: `all 0.8s ease-out ${1.3 + index * 0.2}s`,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#2E3B55" }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "#2E3B55",
          py: 10,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.8s ease-out 2s",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Transform Your Career?
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, mb: 4, opacity: 0.9 }}>
            Join thousands of professionals who have found their dream careers with us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#4dabf5",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "4px",
                boxShadow: "0 4px 14px 0 rgba(77, 171, 245, 0.39)",
                "&:hover": {
                  bgcolor: "#2196f3",
                  boxShadow: "0 6px 20px rgba(77, 171, 245, 0.6)",
                },
              }}
            >
              Get Started Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "4px",
                "&:hover": {
                  borderColor: "#4dabf5",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </Box>
  )
}

export default Home
